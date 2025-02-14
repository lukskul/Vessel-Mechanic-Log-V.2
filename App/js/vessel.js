import { displayTasks } from './taskDisplay.js';

const repoUrl = "https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/fileIndex.json";

/** Fetch vessel names and their tasks from fileIndex.json */
export async function fetchVesselData() {
    try {
        const response = await fetch(repoUrl);
        const data = await response.json();
        return data; // Returns full vessel data with tasks
    } catch (error) {
        console.error("Error fetching vessel data:", error);
        return {};
    }
}

/** Set up autocomplete and handle selection */
export function setupAutocomplete(input, suggestionsBox, vesselData) {
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

    // Show the task section
    const taskBlock = document.getElementById("task-main-block");
    taskBlock.style.display = "block";

    // Disable input and clear suggestions
    input.value = vesselName;
    input.disabled = true;
    suggestionsBox.innerHTML = "";

    // Populate task icons
    const taskList = document.getElementById("task-options");
    const allTasks = taskList.querySelectorAll(".task-option");

    allTasks.forEach(task => {
        const taskName = task.getAttribute("data-task");
        if (vesselFiles.includes(`${taskName}.json`)) {
            task.style.display = "flex"; // Show only relevant tasks
        } else {
            task.style.display = "none"; // Hide irrelevant tasks
        }
    });

    // Now display the tasks
    displayTasks(vesselName, vesselFiles);
}

document.addEventListener('DOMContentLoaded', async () => {
    const vesselInput = document.getElementById("vessel-name");
    const suggestionsBox = document.getElementById("autocomplete-suggestions");

    // Fetch vessel data from GitHub Pages
    const vesselData = await fetchVesselData();

    // Initialize autocomplete with vessel names & tasks
    setupAutocomplete(vesselInput, suggestionsBox, vesselData);
});
