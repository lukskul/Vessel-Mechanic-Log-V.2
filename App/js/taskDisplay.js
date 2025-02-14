const repoUrl = "https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/fileIndex.json";

// Mapping JSON files to task IDs
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
export async function fetchVesselData() {
    try {
        const response = await fetch(repoUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching vessel data:", error);
        return {};
    }
}

/** Display tasks based on selected vessel */
export function displayTasks(vesselName, files) {
    const taskBlock = document.getElementById("task-main-block");
    const taskList = document.getElementById("task-options");
    const allTasks = taskList.querySelectorAll(".task-option");

    if (!files || files.length === 0) {
        console.warn(`No tasks available for ${vesselName}`);
        return;
    }

    // Show the task section
    taskBlock.style.display = "block";

    // Loop through all task icons
    allTasks.forEach(task => {
        const taskId = task.getAttribute("data-task");

        // Check if any of the vessel's files match the current task
        const isTaskAvailable = files.some(file => fileTaskMapping[file] === taskId);

        if (isTaskAvailable) {
            task.style.display = "flex"; // Show relevant task
        } else {
            task.style.display = "none"; // Hide irrelevant task
        }
    });
}
