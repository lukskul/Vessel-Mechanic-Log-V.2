const repoUrl = "https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/fileIndex.json";

// Mapping JSON files to task IDs (unchanged)
const fileTaskMapping = {
    "vesselData.json": "archive", 
    "mainProps.json": "props",
    "runningGear.json": "shafts",
    "mainEngines.json": "engines",
    "electricMotors.json": "electricMotors",
    "generator.json": "generators",
    "bowThruster.json": "bow-thrusters",
    "rudder.json": "rudder",
    "seaScreens.json": "sea-screens",
    "doors.json": "doors",
    "zincs.json": "zincs",
    "misc.json": "misc"
};

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

/** Set up autocomplete and handle selection */
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
                selectVessel(name, vesselData[name], input, suggestionsBox);
            });
            suggestionsBox.appendChild(div);
        });

        if (filtered.length === 0) {
            suggestionsBox.innerHTML = "<div class='no-results'>No matches</div>";
        }
    });
}

/** Handles vessel selection */
function selectVessel(vesselName, vesselFiles, input, suggestionsBox) {
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

    // Update tasks visibility based on selected vessel
    const allTasks = document.querySelectorAll(".task-option");
    allTasks.forEach(task => task.style.display = "none"); // Hide all

    vesselFiles.forEach(file => {
        const taskName = file.replace(".json", ""); 
        const taskElement = document.querySelector(`.task-option[data-task="${taskName}"]`);
        if (taskElement) {
            taskElement.style.display = "flex"; // Show only relevant tasks
        }
    });

    displayTasks(vesselName, vesselFiles);
}

/** Display tasks based on selected vessel */
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
        const isTaskAvailable = files.some(file => fileTaskMapping[file] === taskId);

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

            // Load JSON based on data-task attribute
            const taskName = this.getAttribute("data-task");
            loadTaskData(vesselName, taskName);
        });
    });

    function loadTaskData(vesselName, taskName) {
        // Dynamically fetch the vessel folder and task file
        const taskFilePath = `https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${vesselName}/${taskName}.json`;

        fetch(taskFilePath)
            .then(response => response.json())
            .then(data => {
                console.log(`Loaded data for ${taskName}:`, data);
                // Process and display the data in your UI as needed
            })
            .catch(error => console.error("Error loading task data:", error));
    }
});
