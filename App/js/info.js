export function loadHTML() {
    const taskName = localStorage.getItem("currentTask");
    const htmlPath = `./html/${taskName}.html`;

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
    const infoFilePath = `https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${vesselName}/${selectedLanguage}/info.json`;

    try {
        // Fetch JSON data
        const response = await fetch(infoFilePath);
        if (!response.ok) throw new Error(`Failed to fetch ${infoFilePath}`);

        const data = await response.json();
        console.log("Loaded info.json:", data);

        // Populate info template
        populateInfoHTML(data);

        // You can add other JSON-based content here if needed (taskData, etc.)
        const taskFilePath = `https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${selectedLanguage}/${vesselName}/info.json`;
        const taskResponse = await fetch(taskFilePath);
        if (taskResponse.ok) {
            const taskData = await taskResponse.json();
            console.log("Loaded taskData.json:", taskData);
            populateTaskHTML(taskData); // Add function to populate task-specific HTML
        }

    } catch (error) {
        console.error("Error loading info.json:", error);
    }
}

function populateInfoHTML(data) {
    const infoHtmlContainer = document.querySelector('.info-html');

    // Update the heading dynamically
    const heading = infoHtmlContainer.querySelector('h2');
    const description = infoHtmlContainer.querySelector('p');
    heading.textContent = `Information about ${data.name}`;
    description.textContent = `This section provides general information about ${data.name} couplers.`;

    // Get the details container where you will display ship details dynamically
    const detailsContainer = document.querySelector('.details');
    detailsContainer.innerHTML = ''; // Clear existing content

    // Loop through ship details and create HTML elements for each
    for (const key in data.shipDetails) {
        if (data.shipDetails.hasOwnProperty(key)) {
            const detailDiv = document.createElement('div');
            detailDiv.classList.add('detail');
            detailDiv.innerHTML = `
                <div class="detail-label">${key.replace(/([A-Z])/g, ' $1')}: </div>
                <div class="detail-value">${data.shipDetails[key] || '<i>N/A</i>'}</div>
            `;
            detailsContainer.appendChild(detailDiv);
        }
    }
}
