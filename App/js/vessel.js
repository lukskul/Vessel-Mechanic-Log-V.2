import { shakeAlert } from "./alert";

const repoUrl = "https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/fileIndex.json";

let currentVesselName = localStorage.getItem("selectedBoat") || "";
let currentTask = ""; 

/** Fetch vessel data */
async function fetchVesselData() {
    try {
        const response = await fetch(repoUrl);
        return await response.json();
    } catch (error) {
        console.error("Error fetching vessel data:", error);
        return {};
    }
}

async function fetchVesselFiles(vesselName, selectedLanguage) {
    const indexUrl = `https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/fileIndex.json`;

    try {
        const indexResponse = await fetch(indexUrl);
        if (!indexResponse.ok) throw new Error(`Failed to fetch ${indexUrl}`);

        const fileIndex = await indexResponse.json();
        if (fileIndex[vesselName] && fileIndex[vesselName][selectedLanguage]) {
            const files = fileIndex[vesselName][selectedLanguage];
            const filesData = [];

            for (let file of files) {
                const filePath = `https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${vesselName}/${file}`;

                try {
                    const response = await fetch(filePath);
                    const data = await response.json();
                    filesData.push({ file, data });
                } catch (error) {
                    console.error(`Error fetching ${file}:`, error);
                }
            }

            return filesData;
        } else {
            console.error(`Error: No files found for ${vesselName} in ${selectedLanguage}`);
            return [];
        }
    } catch (error) {
        console.error(`Error fetching file index for ${vesselName}:`, error);
        return [];
    }
}

/** Set up the autocomplete functionality */
function setupAutocomplete(input, suggestionsBox, vesselData) {
    input.addEventListener("input", () => {
        const searchValue = input.value.toLowerCase();
        suggestionsBox.innerHTML = ""; // Clear old suggestions

        if (!searchValue) return;

        const filtered = Object.keys(vesselData).filter(name =>
            name.toLowerCase().includes(searchValue)
        );

        filtered.forEach(name => {
            const div = document.createElement("div");
            div.textContent = name;
            div.classList.add("suggestion");
            div.addEventListener("click", () => selectVessel(name, vesselData[name], input, suggestionsBox));
            suggestionsBox.appendChild(div);
        });

        if (filtered.length === 0) shakeAlert("No Matches");
    });
}

/** Display Available Tasks */
function displayTasks(vesselName, files) {
    const taskBlock = document.getElementById("task-menu");
    const taskContainer = document.querySelector(".task-container");
    const allTasks = taskContainer.querySelectorAll(".task-option");

    if (!files || files.length === 0) {
        shakeAlert(`No tasks available for ${vesselName}`);
        return;
    }

    taskBlock.style.display = "block";

    const availableTasks = new Set(files.map(fileData => fileData.file.replace(".json", "")));

    allTasks.forEach(task => {
        const taskId = task.getAttribute("data-task");
        if (availableTasks.has(taskId)) {
            task.classList.remove("disabled");
            task.classList.add("clickable");
        } else {
            task.classList.remove("clickable");
            task.classList.add("disabled");
        }
    });
}

/** Handle Task Selection */
document.addEventListener("DOMContentLoaded", async () => {
    const vesselInput = document.getElementById("vessel-name");
    const suggestionsBox = document.getElementById("autocomplete-suggestions");

    const vesselData = await fetchVesselData();
    setupAutocomplete(vesselInput, suggestionsBox, vesselData);

    const taskOptions = document.querySelectorAll(".task-option");
    taskOptions.forEach(option => {
        option.addEventListener("click", function () {
            const taskName = this.getAttribute("data-task");
            activateTask(taskName);
        });
    });

    // **Re-activate previous task on page reload**
    if (currentVesselName && currentTask) {
        // If a vessel and task are already selected, activate the "info" task by default
        activateTask(currentTask);
    }
});

/** Select Vessel & Activate 'info' Task Automatically */
async function selectVessel(vesselName, vesselData, input, suggestionsBox) {
    currentVesselName = vesselName;
    localStorage.setItem("selectedBoat", vesselName);

    // **Set currentTask to "info" on vessel selection**
    currentTask = "info";  // Always default to the 'info' task
    localStorage.setItem("currentTask", currentTask);  // Save task to localStorage

    // Hide the search menu and display the selected vessel
    document.getElementById("vessel-form").style.display = "none";
    const vesselTitle = document.getElementById("vessel-title");
    vesselTitle.textContent = vesselName;
    vesselTitle.style.display = "block";

    input.value = vesselName;
    input.disabled = true;
    suggestionsBox.innerHTML = "";

    document.getElementById("task-menu").style.display = "block";
    const allTasks = document.querySelectorAll(".task-option");

    const selectedLanguage = localStorage.getItem("language") || "en";
    const vesselFiles = await fetchVesselFiles(vesselName, selectedLanguage);

    const availableTasks = new Set(vesselFiles.map(file => file.file.replace(".json", "")));

    allTasks.forEach(task => {
        const taskId = task.getAttribute("data-task");
        if (availableTasks.has(taskId)) {
            task.classList.remove("disabled");
            task.classList.add("clickable");
        } else {
            task.classList.remove("clickable");
            task.classList.add("disabled");
        }
    });

    displayTasks(vesselName, vesselFiles);

    // **Automatically select the 'info' task after vessel selection**
    activateTask("info");  // Activate the 'info' task by default
}

/** Set new active task */
function activateTask(taskName) {
    const taskOptions = document.querySelectorAll(".task-option");

    // Clear previously active task
    taskOptions.forEach(opt => opt.classList.remove("active"));

    // Ensure the taskName and currentVesselName are valid
    if (currentTask && currentVesselName) {
        // Find the new task
        const activeTask = document.querySelector(`.task-option[data-task="${taskName}"]`);
        
        if (activeTask) {
            activeTask.classList.add("active");
            currentTask = taskName;
            localStorage.setItem("currentTask", taskName); // Store task in localStorage
            loadTaskData(currentVesselName, taskName); // Load task-specific data
        } else {
            console.warn(`Task '${taskName}' not found.`);
        }
    } else {
        console.warn("currentTask or currentVesselName is missing. Skipping task activation.");
    }
}

/** Load Task Data */
async function loadTaskData(vesselName, taskName) {
    if (!vesselName || !taskName) {
        console.warn("Vessel or task not selected. Aborting load.");
        return;
    }

    // Load the HTML page for the selected task
    loadHTML();
}

/** Dynamically pull JSON files and watch for content updates */
export function loadHTML() {
    const taskName = localStorage.getItem("currentTask");
    const htmlPath = `https://lukskul.github.io/Vessel-Mechanic-Log-V.2/App/html/${taskName}.html`;

    fetch(htmlPath)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById("html-container");
            container.innerHTML = data;

            // Start observing for dynamic content
            loadTaskJSON(); 
            watchDynamicContent();
        })
        .catch(error => console.error("Error loading HTML:", error));
}

/** MutationObserver to detect and populate dynamically loaded content */
function watchDynamicContent() {
    const observerTarget = document.getElementById("html-container");

    if (!observerTarget) {
        console.error("html-container not found.");
        return;
    }

    const observer = new MutationObserver((mutations, obs) => {
        mutations.forEach(mutation => {
            if (mutation.type === "childList") {
                loadTaskJSON(); // Automatically loads the correct task JSON and function
                obs.disconnect();
            }
        });
    });

    observer.observe(observerTarget, { childList: true, subtree: true });
}

async function loadTaskJSON() {
    const vesselName = localStorage.getItem("selectedBoat");
    const selectedLanguage = localStorage.getItem("language") || "en";
    const currentTask = localStorage.getItem("currentTask");

    if (!vesselName) {
        console.warn("Missing vessel. JSON not loaded.");
        const taskContainer = document.getElementById("task-data-container");
        if (taskContainer) taskContainer.innerHTML = "";
        return;
    }

    const taskFilePath = `https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${vesselName}/${currentTask}.json`;

    try {
        const response = await fetch(taskFilePath);
        if (!response.ok) throw new Error(`Failed to fetch ${taskFilePath}`);
        
        const data = await response.json();
        // Dynamically import the task function based on the currentTask value
        try {
            const taskModule = await import(`./${currentTask}.js`); // Assuming you have a file per task
            const functionName = `${currentTask}Populate`;

            if (typeof taskModule[functionName] === "function") {
                taskModule[functionName](data);  // Call the dynamically imported function
            } else {
                console.error(`Function ${functionName} does not exist in ${currentTask}.js`);
            }
        } catch (error) {
            console.error(`Error importing ${currentTask}.js:`, error);
        }

    } catch (error) {
        console.error("Error loading task JSON:", error);
    }
}

/*  Reset everything when back button is pushed */
export async function clearPageContent() {
    // Clear the HTML container where hard-coded content is rendered
    const htmlContainer = document.getElementById("html-container");
    if (htmlContainer) {
        htmlContainer.innerHTML = "";  // Clear out any child elements (HTML content)
    }

    // Clear the task data container where the task-specific HTML and JSON data are rendered
    const taskDataContainer = document.getElementById("task-data-container");
    if (taskDataContainer) {
        taskDataContainer.innerHTML = "";  // Clear out any child elements (task data)
    }

    // Clear the task menu if necessary
    const taskMenu = document.getElementById("task-menu");
    if (taskMenu) {
        taskMenu.style.display = "none";  // Optionally hide the task menu when switching views
    }

    // Optionally clear any other elements you want to reset when changing views
    const vesselForm = document.getElementById("vessel-form");
    if (vesselForm) {
        vesselForm.style.display = "block";  // Re-enable vessel form if needed for new selection
    }
}

