export function loadHTML() {
    const taskName = localStorage.getItem("currentTask");
    const htmlPath = `https://lukskul.github.io/Vessel-Mechanic-Log-V.2/App/html/${taskName}.html`;
    console.log(htmlPath); 

    fetch(htmlPath)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById("html-container");
            container.innerHTML = data;

            // Wait for the HTML to be fully inserted, then fade in JSON
            setTimeout(() => {
                loadTaskJSON();
            }, 500); // 0.5-second delay
        })
        .catch(error => console.error("Error loading HTML:", error));
}

async function loadTaskJSON() {
    const vesselName = localStorage.getItem("selectedBoat");
    const selectedLanguage = localStorage.getItem("language") || "en";
    //const currentTask = localStorage.getItem("currentTask"); 

    // **Check if vesselName exists before proceeding**
    if (!vesselName) {
        console.warn("Missing vessel. JSON not loaded.");
        
        // **Clear task display if no valid vessel**
        const taskContainer = document.getElementById("task-data-container");
        if (taskContainer) taskContainer.innerHTML = "";
        return;
    }

    // Construct file path dynamically
    const infoFilePath = `https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${vesselName}/${selectedLanguage}/props.json`;

    try {
        // Fetch JSON data
        const response = await fetch(infoFilePath);
        if (!response.ok) throw new Error(`Failed to fetch ${infoFilePath}`);

        const data = await response.json();
        console.log("Loaded info.json:", data);

        // Populate info template
        populateInfoHTML(data);

        // You can add other JSON-based content here if needed (taskData, etc.)
        const taskFilePath = `https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${vesselName}/${selectedLanguage}/props.json`;
        const taskResponse = await fetch(taskFilePath);
        if (taskResponse.ok) {
            const taskData = await taskResponse.json();
            console.log("Loaded taskData.json:", taskData);
            //populateTaskHTML(taskData); // Add function to populate task-specific HTML
        }

    } catch (error) {
        console.error("Error loading info.json:", error);
    }
}
