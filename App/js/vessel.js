import { shakeAlert } from "./alert";

const repoUrl = "https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/fileIndex.json";

// Mapping JSON files to task IDs (unchanged)
const fileTaskMapping = {
    "info.json": "archive",
    "bowThruster.json": "bow-thrusters",
    "engines.json": "engines",
    "couplers.json": "couplers",
    "seals.json": "seals",
    "shafts.json": "shafts",
    "props.json": "props",
    "rudder.json": "rudder",
    "seaScreens.json": "sea-screens",
    "zincs.json": "zincs",
    "generator.json": "generators",
    "electricMotors.json": "electricMotors",
    "doors.json": "doors",
    "misc.json": "misc"
};

let currentVesselName = ""; // Store the currently selected vessel name globally

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
        
        // Check if the fetch request was successful
        if (!indexResponse.ok) {
            throw new Error(`Failed to fetch ${indexUrl}`);
        }

        const fileIndex = await indexResponse.json();

        // Check if the vessel and language exist in the fileIndex
        if (fileIndex[vesselName] && fileIndex[vesselName][selectedLanguage]) {
            const files = fileIndex[vesselName][selectedLanguage];  // Get the files for the specific vessel and language
            const filesData = [];

            for (let file of files) {
                const filePath = `https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${vesselName}/${selectedLanguage}/${file}`;

                try {
                    const response = await fetch(filePath);
                    const data = await response.json();
                    filesData.push({ file, data });
                } catch (error) {
                    console.error(`Error fetching ${file}:`, error);
                }
            }

            return filesData;  // Return the fetched file data (name and content)
        } else {
            console.error(`Error: No files found for ${vesselName} in ${selectedLanguage}`);
            return [];  // Return an empty array if no files are found for the given vessel and language
        }
    } catch (error) {
        console.error(`Error fetching file index for ${vesselName}:`, error);
        return [];  // Return an empty array in case of error
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

async function selectVessel(vesselName, vesselData, input, suggestionsBox) {
    currentVesselName = vesselName;

    localStorage.setItem("selectedBoat", vesselName); 

    vesselName = String(vesselName);

    // Hide the search menu and display the selected vessel
    document.getElementById("vessel-form").style.display = "none";
    const vesselTitle = document.getElementById("vessel-title");
    vesselTitle.textContent = vesselName;
    vesselTitle.style.display = "block";

    // Disable input and clear suggestions
    input.value = vesselName;
    input.disabled = true;
    suggestionsBox.innerHTML = "";

    // Show task menu
    document.getElementById("task-menu").style.display = "block";
    const allTasks = document.querySelectorAll(".task-option");

    // Get selected language from localStorage or default to 'en'
    const selectedLanguage = localStorage.getItem("language") || "en";

    // Fetch vessel files (pass the selected language here)
    const vesselFiles = await fetchVesselFiles(vesselName, selectedLanguage);

    // Ensure we extract the file names correctly
    const availableTasks = new Set(vesselFiles.map(file => 
        typeof file.file === "string" ? file.file.replace(".json", "") : ""
    ));

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

    // Call displayTasks with vesselName and vesselFiles
    displayTasks(vesselName, vesselFiles);
}


function displayTasks(vesselName, files) {
    const taskBlock = document.getElementById("task-menu");
    const taskContainer = document.querySelector(".task-container"); // Correct selector
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


/** Handle task selection */
document.addEventListener("DOMContentLoaded", async () => {
    const vesselInput = document.getElementById("vessel-name");
    const suggestionsBox = document.getElementById("autocomplete-suggestions");

    // Fetch vessel data and initialize autocomplete
    const vesselData = await fetchVesselData();
    setupAutocomplete(vesselInput, suggestionsBox, vesselData);

    // Handle task selection
    const taskOptions = document.querySelectorAll(".task-option");
    taskOptions.forEach(option => {
        option.addEventListener("click", function () {
            taskOptions.forEach(opt => opt.classList.remove("active"));
            this.classList.add("active");

            if (currentVesselName) {
                const taskName = this.getAttribute("data-task");
                loadTaskData(currentVesselName, taskName);
            } else {
                console.error("Vessel name is not defined");
            }
        });
    });

    async function loadTaskData(vesselName, taskName) {
        const selectedLanguage = localStorage.getItem("language") || "en"; // Default to English
    
        // Define the folder path based on the selected language
        const languageFolder = selectedLanguage === "es" ? "es" : "en"; // Default to "en" if anything else is selected
    
        const taskFilePath = `https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${vesselName}/${languageFolder}/${taskName}.json`;
        console.log(`Fetching data from: ${languageFolder} folder`); // Debugging
    
        try {
            const response = await fetch(taskFilePath);
    
            // Check if the fetch request was successful
            if (!response.ok) {
                throw new Error(`Failed to fetch ${taskFilePath}`);
            }
    
            const data = await response.json();
    
            // Display the task data in the UI
            const taskContainer = document.getElementById("task-data-container");
            taskContainer.innerHTML = ""; // Clear previous content
    
            const taskTitle = document.createElement("h3");
            taskTitle.textContent = `${taskName} for ${vesselName}`;
            taskContainer.appendChild(taskTitle);
    
            // Function to create collapsible UI for nested objects
            function createCollapsibleContent(obj, parentElement) {
                Object.keys(obj).forEach(key => {
                    const value = obj[key];
    
                    const itemDiv = document.createElement("div");
                    itemDiv.classList.add("task-item");
    
                    if (typeof value === "object" && value !== null) {
                        // Create a collapsible container
                        const collapsible = document.createElement("div");
                        collapsible.classList.add("collapsible");
    
                        // Create a header that toggles the visibility
                        const header = document.createElement("div");
                        header.classList.add("collapsible-header");
                        header.textContent = key;
                        header.onclick = function () {
                            content.classList.toggle("collapsed");
                        };
    
                        // Create a content div to hold the nested data
                        const content = document.createElement("div");
                        content.classList.add("collapsible-content", "collapsed");
    
                        // Recursively add child elements
                        createCollapsibleContent(value, content);
    
                        collapsible.appendChild(header);
                        collapsible.appendChild(content);
                        itemDiv.appendChild(collapsible);
                    } else {
                        // If it's not an object, just display key-value pair
                        itemDiv.innerHTML = `<strong>${key}:</strong> ${value}`;
                    }
    
                    parentElement.appendChild(itemDiv);
                });
            }
    
            // Populate the UI
            createCollapsibleContent(data, taskContainer);
        } catch (error) {
            console.error("Error loading task data:", error);
            const taskContainer = document.getElementById("task-data-container");
            taskContainer.innerHTML = "<p>Error loading task data. Please try again later.</p>";
        }
    }
    
    
});
