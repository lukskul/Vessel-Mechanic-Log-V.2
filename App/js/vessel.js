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
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching vessel data:", error);
        return {};
    }
}

function setupAutocomplete(input, suggestionsBox, vesselData) {
    input.addEventListener("input", () => {
        const searchValue = input.value.toLowerCase();
        suggestionsBox.innerHTML = ""; // Clear old suggestions

        if (!searchValue) return;

        // Filter vessels based on input
        const filtered = Object.keys(vesselData).filter(name =>
            name.toLowerCase().includes(searchValue)
        );

        // Display suggestions
        filtered.forEach(name => {
            const div = document.createElement("div");
            div.textContent = name;
            div.classList.add("suggestion");
            div.addEventListener("click", () => {
                // Make sure name is passed as the vesselName
                selectVessel(name, vesselData[name], input, suggestionsBox);
            });
            suggestionsBox.appendChild(div);
        });

        if (filtered.length === 0) {
            suggestionsBox.innerHTML = "<div class='no-results'>No matches</div>";
        }
    });
}

function selectVessel(vesselName, vesselFiles, input, suggestionsBox) {
    // Store the vessel name globally
    currentVesselName = vesselName;

    // Make sure vesselName is a string
    vesselName = String(vesselName);  // Convert to string, just to be sure

    // Hide the search menu
    document.getElementById("vessel-form").style.display = "none";

    // Display vessel name at the top
    const vesselTitle = document.getElementById("vessel-title");
    vesselTitle.textContent = vesselName;
    vesselTitle.style.display = "block"; 

    // Disable input and clear suggestions
    input.value = vesselName;
    input.disabled = true;
    suggestionsBox.innerHTML = "";

    // Show the task section
    const taskBlock = document.getElementById("task-menu");
    taskBlock.style.display = "block";

    // Get all task options
    const allTasks = document.querySelectorAll(".task-option");

    // Loop through all tasks and apply the appropriate styling
    allTasks.forEach(task => {
        const taskId = task.getAttribute("data-task");

        // Check if the current task is in the list of available tasks for the selected vessel
        const isTaskAvailable = vesselFiles.some(file => fileTaskMapping[file] === taskId);

        // If the task is available (in the vesselFiles), make it clickable and show in default color
        if (isTaskAvailable) {
            task.style.display = "flex"; // Ensure the task is displayed
            task.classList.remove("disabled"); // Remove 'disabled' class if task is available
            task.classList.add("clickable");  // Add 'clickable' class to make it interactive
        } else {
            task.style.display = "flex"; // Ensure the task is displayed
            task.classList.remove("clickable"); // Remove 'clickable' class
            task.classList.add("disabled");  // Add 'disabled' class to grey it out and make unclickable
        }
    });

    // Call displayTasks with vesselName and vesselFiles
    displayTasks(vesselName, vesselFiles);
}

function displayTasks(vesselName, files) {
    const taskBlock = document.getElementById("task-menu");
    const taskList = document.getElementById("task-options");
    const allTasks = taskList.querySelectorAll(".task-option");

    if (!files || files.length === 0) {
        console.warn(`No tasks available for ${vesselName}`);
        return;
    }

    taskBlock.style.display = "block";

    allTasks.forEach(task => {
        const taskId = task.getAttribute("data-task");

        // Check if this task exists in the vessel's available files
        const isTaskAvailable = files.some(file => fileTaskMapping[file] === taskId);

        // Show task if available, else hide
        task.style.display = isTaskAvailable ? "flex" : "none";
    });
}

/** Handle task selection */
document.addEventListener("DOMContentLoaded", async () => {
    const vesselInput = document.getElementById("vessel-name");
    const suggestionsBox = document.getElementById("autocomplete-suggestions");

    // Fetch vessel data from GitHub Pages
    const vesselData = await fetchVesselData();

    // Initialize autocomplete with vessel names & tasks
    setupAutocomplete(vesselInput, suggestionsBox, vesselData);

    // Handle task selection
    const taskOptions = document.querySelectorAll(".task-option");
    taskOptions.forEach(option => {
        option.addEventListener("click", function () {
            taskOptions.forEach(opt => opt.classList.remove("active"));
            this.classList.add("active");

            // Use the global currentVesselName variable here
            const taskName = this.getAttribute("data-task");
            if (currentVesselName) {
                loadTaskData(currentVesselName, taskName);
            } else {
                console.error("Vessel name is not defined");
            }
        });
    });

    function loadTaskData(vesselName, taskName) {
        // Dynamically fetch the vessel folder and task file
        const taskFilePath = `https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${vesselName}/${taskName}.json`;
    
        fetch(taskFilePath)
            .then(response => response.json())
            .then(data => {
                console.log(`Loaded data for ${taskName}:`, data);
    
                // Display the task data in your UI
                const taskContainer = document.getElementById("task-data-container");
                taskContainer.innerHTML = ""; // Clear previous content
    
                // Create a div to display the task name
                const taskTitle = document.createElement("h3");
                taskTitle.textContent = `${taskName} for ${vesselName}`;
                taskContainer.appendChild(taskTitle);
    
                // Iterate over the task data and display each item
                for (let key in data) {
                    if (data.hasOwnProperty(key)) {
                        const itemDiv = document.createElement("div");
                        itemDiv.classList.add("task-item");
                        itemDiv.innerHTML = `<strong>${key}:</strong> ${data[key]}`;
                        taskContainer.appendChild(itemDiv);
                    }
                }
            })
            .catch(error => {
                console.error("Error loading task data:", error);
                const taskContainer = document.getElementById("task-data-container");
                taskContainer.innerHTML = "<p>Error loading task data. Please try again later.</p>";
            });
    }
    
});
