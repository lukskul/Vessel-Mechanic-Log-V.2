import { clearPageContent } from "./vessel.js";
import { showError } from "./alert.js";

/** Information Button */
document.addEventListener("DOMContentLoaded", () => {
    const informationButton = document.getElementById("information");
    const infoDropdown = document.getElementById("info-dropdown");
    const infoInput = document.getElementById("info-input");

    const englishPlaceholders = {
        information: "Forms coming soon..."
    };

    const spanishPlaceholders = {
        information: "Formularios próximamente..."
    };

    // Set initial placeholder in English
    infoInput.placeholder = englishPlaceholders.information;

    // Toggle the visibility of the info dropdown when the button is clicked
    informationButton.addEventListener("click", () => {
        infoDropdown.classList.toggle("visible");
    });

    // Function to update placeholders based on language
    function updatePlaceholders(language) {
        if (language === "es") {
            infoInput.placeholder = spanishPlaceholders.information;
        } else {
            infoInput.placeholder = englishPlaceholders.information;
        }
    }

    // Assuming you have a language toggle similar to the previous one
    const languageSelectButton = document.getElementById("language-select");

    languageSelectButton.addEventListener("click", () => {
        const currentLang = localStorage.getItem("language") || "en";
        const newLang = currentLang === "en" ? "es" : "en";

        // Save the language to localStorage and update the page
        localStorage.setItem("language", newLang);
        updatePlaceholders(newLang);
    });
});
// document.addEventListener("DOMContentLoaded", function () {
//     const convertButton = document.getElementById("convert");
//     const tableContainer = document.getElementById("converter-container");
//     const converter = document.getElementById("converter");

//     convertButton.addEventListener("click", () => {
//         tableContainer.classList.toggle("visible");
//     });

//     // const socketSizes = [
//     //     { inches: "5/32", decimal: 0.15625, mm: 4 }, { inches: "3/16", decimal: 0.1875, mm: 5 }, { inches: "7/32", decimal: 0.21875, mm: 5.5 },
//     //     { inches: "1/4", decimal: 0.25, mm: 6 }, { inches: "9/32", decimal: 0.28125, mm: 7 }, { inches: "5/16", decimal: 0.3125, mm: 8 },
//     //     { inches: "11/32", decimal: 0.34375, mm: 9 }, { inches: "3/8", decimal: 0.375, mm: 10 }, { inches: "7/16", decimal: 0.4375, mm: 11 },
//     //     { inches: "1/2", decimal: 0.5, mm: 13 }, { inches: "9/16", decimal: 0.5625, mm: 14 }, { inches: "5/8", decimal: 0.625, mm: 16 },
//     //     { inches: "11/16", decimal: 0.6875, mm: 17 }, { inches: "3/4", decimal: 0.75, mm: 19 }, { inches: "13/16", decimal: 0.8125, mm: 21 },
//     //     { inches: "7/8", decimal: 0.875, mm: 22 }, { inches: "15/16", decimal: 0.9375, mm: 24 }, { inches: "1", decimal: 1.0, mm: 25 },
//     //     { inches: "1-1/16", decimal: 1.0625, mm: 27 }, { inches: "1-1/8", decimal: 1.125, mm: 29 }, { inches: "1-3/16", decimal: 1.1875, mm: 30 },
//     //     { inches: "1-1/4", decimal: 1.25, mm: 32 }, { inches: "1-5/16", decimal: 1.3125, mm: 34 }, { inches: "1-3/8", decimal: 1.375, mm: 35 },
//     //     { inches: "1-7/16", decimal: 1.4375, mm: 36 }, { inches: "1-1/2", decimal: 1.5, mm: 38 }, { inches: "1-9/16", decimal: 1.5625, mm: 40 },
//     //     { inches: "1-5/8", decimal: 1.625, mm: 41 }, { inches: "1-11/16", decimal: 1.6875, mm: 43 }, { inches: "1-3/4", decimal: 1.75, mm: 44 },
//     //     { inches: "1-13/16", decimal: 1.8125, mm: 46 }, { inches: "1-7/8", decimal: 1.875, mm: 48 }, { inches: "1-15/16", decimal: 1.9375, mm: 49 },
//     //     { inches: "2", decimal: 2.0, mm: 50 }, { inches: "2-1/16", decimal: 2.0625, mm: 52 }, { inches: "2-1/8", decimal: 2.125, mm: 54 },
//     //     { inches: "2-3/16", decimal: 2.1875, mm: 55 }, { inches: "2-1/4", decimal: 2.25, mm: 57 }, { inches: "2-5/16", decimal: 2.3125, mm: 59 },
//     //     { inches: "2-3/8", decimal: 2.375, mm: 60 }, { inches: "2-7/16", decimal: 2.4375, mm: 62 }, { inches: "2-1/2", decimal: 2.5, mm: 63 },
//     //     { inches: "2-9/16", decimal: 2.5625, mm: 65 }, { inches: "2-5/8", decimal: 2.625, mm: 67 }, { inches: "2-11/16", decimal: 2.6875, mm: 68 },
//     //     { inches: "2-3/4", decimal: 2.75, mm: 70 }, { inches: "2-13/16", decimal: 2.8125, mm: 72 }, { inches: "2-7/8", decimal: 2.875, mm: 73 },
//     //     { inches: "2-15/16", decimal: 2.9375, mm: 75 }, { inches: "3", decimal: 3.0, mm: 76 }
//     // ];    
//     const tapDrillSizes = [
//         // Standard Tap to Drill Bit Sizes (Inches)
//         { tap: "4-40", drill: { inches: "#43", decimal: 0.0890, mm: 2.26 } },
//         { tap: "6-32", drill: { inches: "#36", decimal: 0.1065, mm: 2.71 } },
//         { tap: "8-32", drill: { inches: "#29", decimal: 0.1360, mm: 3.45 } },
//         { tap: "10-24", drill: { inches: "#25", decimal: 0.1495, mm: 3.80 } },
//         { tap: "10-32", drill: { inches: "#21", decimal: 0.1590, mm: 4.04 } },
//         { tap: "1/4\"-20", drill: { inches: "#7", decimal: 0.2010, mm: 5.11 } },
//         { tap: "5/16\"-18", drill: { inches: "F", decimal: 0.2570, mm: 6.53 } },
//         { tap: "3/8\"-16", drill: { inches: "5/16\"", decimal: 0.3125, mm: 7.94 } },
//         { tap: "7/16\"-14", drill: { inches: "U", decimal: 0.3680, mm: 9.35 } },
//         { tap: "1/2\"-13", drill: { inches: "27/64\"", decimal: 0.4219, mm: 10.72 } },
//         { tap: "5/8\"-11", drill: { inches: "17/32\"", decimal: 0.5312, mm: 13.49 } },
//         { tap: "3/4\"-10", drill: { inches: "21/32\"", decimal: 0.6562, mm: 16.67 } },
    
//         // Metric Tap to Drill Bit Sizes
//         { tap: "M3 x 0.5", drill: { inches: "", decimal: 0.0984, mm: 2.5 } },
//         { tap: "M4 x 0.7", drill: { inches: "", decimal: 0.1299, mm: 3.3 } },
//         { tap: "M5 x 0.8", drill: { inches: "", decimal: 0.1654, mm: 4.2 } },
//         { tap: "M6 x 1.0", drill: { inches: "", decimal: 0.1969, mm: 5.0 } },
//         { tap: "M8 x 1.25", drill: { inches: "", decimal: 0.2677, mm: 6.8 } },
//         { tap: "M10 x 1.5", drill: { inches: "", decimal: 0.3346, mm: 8.5 } },
//         { tap: "M12 x 1.75", drill: { inches: "", decimal: 0.4016, mm: 10.2 } },
//         { tap: "M14 x 2.0", drill: { inches: "", decimal: 0.4724, mm: 12.0 } },
//         { tap: "M16 x 2.0", drill: { inches: "", decimal: 0.5512, mm: 14.0 } },
//         { tap: "M20 x 2.5", drill: { inches: "", decimal: 0.6889, mm: 17.5 } }
//     ];
    
//     const table = document.createElement("table");
//     table.classList.add("socket-table");

//     const thead = document.createElement("thead");
//     thead.innerHTML = `
//         <tr>
//             <th>Standard</th>
//             <th>Decimal</th>
//             <th>Metric</th>
//         </tr>
//     `;
//     table.appendChild(thead);

//     const tbody = document.createElement("tbody");

//     socketSizes.forEach(socket => {
//         const row = document.createElement("tr");

//         row.innerHTML = `
//             <td>${socket.inches}</td>
//             <td class="decimal">${socket.decimal}</td>
//             <td>${socket.mm} mm</td>
//         `;
//         tbody.appendChild(row);
//     });

//     table.appendChild(tbody);
//     converter.appendChild(table);
// });

document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convert");
    const tableContainer = document.getElementById("converter-container");
    const converter = document.getElementById("converter");
    const toggleButton = document.getElementById("toggle-table-button");

    let showingSockets = true;
    let rotated = false; 

    const socketSizes = [
        { inches: "5/32", decimal: 0.15625, mm: 4 }, { inches: "3/16", decimal: 0.1875, mm: 5 }, { inches: "7/32", decimal: 0.21875, mm: 5.5 },
        { inches: "1/4", decimal: 0.25, mm: 6 }, { inches: "9/32", decimal: 0.28125, mm: 7 }, { inches: "5/16", decimal: 0.3125, mm: 8 },
        { inches: "11/32", decimal: 0.34375, mm: 9 }, { inches: "3/8", decimal: 0.375, mm: 10 }, { inches: "7/16", decimal: 0.4375, mm: 11 },
        { inches: "1/2", decimal: 0.5, mm: 13 }, { inches: "9/16", decimal: 0.5625, mm: 14 }, { inches: "5/8", decimal: 0.625, mm: 16 },
        { inches: "11/16", decimal: 0.6875, mm: 17 }, { inches: "3/4", decimal: 0.75, mm: 19 }, { inches: "13/16", decimal: 0.8125, mm: 21 },
        { inches: "7/8", decimal: 0.875, mm: 22 }, { inches: "15/16", decimal: 0.9375, mm: 24 }, { inches: "1", decimal: 1.0, mm: 25 },
        { inches: "1-1/16", decimal: 1.0625, mm: 27 }, { inches: "1-1/8", decimal: 1.125, mm: 29 }, { inches: "1-3/16", decimal: 1.1875, mm: 30 },
        { inches: "1-1/4", decimal: 1.25, mm: 32 }, { inches: "1-5/16", decimal: 1.3125, mm: 34 }, { inches: "1-3/8", decimal: 1.375, mm: 35 },
        { inches: "1-7/16", decimal: 1.4375, mm: 36 }, { inches: "1-1/2", decimal: 1.5, mm: 38 }, { inches: "1-9/16", decimal: 1.5625, mm: 40 },
        { inches: "1-5/8", decimal: 1.625, mm: 41 }, { inches: "1-11/16", decimal: 1.6875, mm: 43 }, { inches: "1-3/4", decimal: 1.75, mm: 44 },
        { inches: "1-13/16", decimal: 1.8125, mm: 46 }, { inches: "1-7/8", decimal: 1.875, mm: 48 }, { inches: "1-15/16", decimal: 1.9375, mm: 49 },
        { inches: "2", decimal: 2.0, mm: 50 }, { inches: "2-1/16", decimal: 2.0625, mm: 52 }, { inches: "2-1/8", decimal: 2.125, mm: 54 },
        { inches: "2-3/16", decimal: 2.1875, mm: 55 }, { inches: "2-1/4", decimal: 2.25, mm: 57 }, { inches: "2-5/16", decimal: 2.3125, mm: 59 },
        { inches: "2-3/8", decimal: 2.375, mm: 60 }, { inches: "2-7/16", decimal: 2.4375, mm: 62 }, { inches: "2-1/2", decimal: 2.5, mm: 63 },
        { inches: "2-9/16", decimal: 2.5625, mm: 65 }, { inches: "2-5/8", decimal: 2.625, mm: 67 }, { inches: "2-11/16", decimal: 2.6875, mm: 68 },
        { inches: "2-3/4", decimal: 2.75, mm: 70 }, { inches: "2-13/16", decimal: 2.8125, mm: 72 }, { inches: "2-7/8", decimal: 2.875, mm: 73 },
        { inches: "2-15/16", decimal: 2.9375, mm: 75 }, { inches: "3", decimal: 3.0, mm: 76 }
    ]; 

    const tapDrillSizes = [
        // Standard Tap to Drill Bit Sizes (Inches)
        { tap: "4-40", drill: { inches: "#43", decimal: 0.0890, mm: 2.26 } },
        { tap: "6-32", drill: { inches: "#36", decimal: 0.1065, mm: 2.71 } },
        { tap: "8-32", drill: { inches: "#29", decimal: 0.1360, mm: 3.45 } },
        { tap: "10-24", drill: { inches: "#25", decimal: 0.1495, mm: 3.80 } },
        { tap: "10-32", drill: { inches: "#21", decimal: 0.1590, mm: 4.04 } },
        { tap: "1/4\"-20", drill: { inches: "#7", decimal: 0.2010, mm: 5.11 } },
        { tap: "5/16\"-18", drill: { inches: "F", decimal: 0.2570, mm: 6.53 } },
        { tap: "3/8\"-16", drill: { inches: "5/16\"", decimal: 0.3125, mm: 7.94 } },
        { tap: "7/16\"-14", drill: { inches: "U", decimal: 0.3680, mm: 9.35 } },
        { tap: "1/2\"-13", drill: { inches: "27/64\"", decimal: 0.4219, mm: 10.72 } },
        { tap: "5/8\"-11", drill: { inches: "17/32\"", decimal: 0.5312, mm: 13.49 } },
        { tap: "3/4\"-10", drill: { inches: "21/32\"", decimal: 0.6562, mm: 16.67 } },
    
        // Metric Tap to Drill Bit Sizes
        { tap: "M3 x 0.5", drill: { inches: "", decimal: 0.0984, mm: 2.5 } },
        { tap: "M4 x 0.7", drill: { inches: "", decimal: 0.1299, mm: 3.3 } },
        { tap: "M5 x 0.8", drill: { inches: "", decimal: 0.1654, mm: 4.2 } },
        { tap: "M6 x 1.0", drill: { inches: "", decimal: 0.1969, mm: 5.0 } },
        { tap: "M8 x 1.25", drill: { inches: "", decimal: 0.2677, mm: 6.8 } },
        { tap: "M10 x 1.5", drill: { inches: "", decimal: 0.3346, mm: 8.5 } },
        { tap: "M12 x 1.75", drill: { inches: "", decimal: 0.4016, mm: 10.2 } },
        { tap: "M14 x 2.0", drill: { inches: "", decimal: 0.4724, mm: 12.0 } },
        { tap: "M16 x 2.0", drill: { inches: "", decimal: 0.5512, mm: 14.0 } },
        { tap: "M20 x 2.5", drill: { inches: "", decimal: 0.6889, mm: 17.5 } }
    ];

    function createTable(data, type) {
        const table = document.createElement("table");
        table.classList.add("socket-table");

        const thead = document.createElement("thead");
        thead.innerHTML = type === 'socket' ? `
            <tr class="fixed">
                <th>Standard</th>
                <th>Decimal</th>
                <th>Metric</th>
            </tr>` : `
            <tr class="fixed">
                <th>Tap Size</th>
                <th>Drill Bit Size</th>
            </tr>`;

        table.appendChild(thead);

        const tbody = document.createElement("tbody");
        data.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = type === 'socket' ? `
                <td>${item.inches}</td>
                <td class="decimal">${item.decimal}</td>
                <td>${item.mm} mm</td>` : `
                <td>${item.tap}</td>
                <td>${item.drill.inches}</td>
                <td>${item.drill.decimal}</td>`;
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        return table;
    }

    function toggleTable() {
        converter.innerHTML = "";

        if (showingSockets) {
            converter.appendChild(createTable(tapDrillSizes, 'tap'));
        } else {
            converter.appendChild(createTable(socketSizes, 'socket')); 
        }
            // Add a spinning effect before the final rotation
            toggleButton.style.transition = "transform 1s ease-in-out";
            toggleButton.style.transform = `rotate(${rotated ? 0 : 1080}deg)`; // 3 full spins (360 * 3)

            setTimeout(() => {
                toggleButton.style.transition = "transform 0.5s ease-in-out";
                toggleButton.style.transform = `rotate(${rotated ? 0 : 180}deg)`;
                rotated = !rotated;
            }, 1000); // Start final rotation after 1 second

        showingSockets = !showingSockets;
     
    }

    convertButton.addEventListener("click", () => {
        tableContainer.classList.toggle("visible");
    });

    toggleButton.addEventListener("click", toggleTable);

    // Show the socket table by default
    converter.appendChild(createTable(socketSizes, 'socket'));
});

/** Ship Search */
document.getElementById("search-ship-button").addEventListener("click", () => {
    const selectedBoat = localStorage.getItem("selectedBoat"); // Retrieve the selected boat

    if (!selectedBoat) {
        alert("Select a vessel");
        return;
    }

    const lang = localStorage.getItem("language") || "en";

    // Open a blank tab first to avoid pop-up blockers on mobile
    const newTab = window.open("", "_blank");

    // Fetch vessel info from info.json
    fetch(`https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${selectedBoat}/info.json`)
        .then(response => response.json())
        .then(data => {
            const vessel = data.shipDetails;

            if (!vessel || vessel.name !== selectedBoat) {
                const errorMessage = lang === "es" ? "No hay datos disponibles" : "No Data Available";
                showError(errorMessage);
                newTab.close(); // Close the tab if there’s an error
                return;
            }

            if (!vessel.mmsiNumber) {
                const errorMessage = lang === "es"
                    ? "Agregue un número MMSI para rastrear este buque"
                    : "Add a MMSI number to track this vessel";
                showError(errorMessage);
                newTab.close(); // Close the tab if there’s no MMSI number
                return;
            }

            const mmsi = vessel.mmsiNumber;

            // Save to localStorage
            localStorage.setItem("selectedVessel", JSON.stringify({ name: selectedBoat, mmsi }));

            // Construct MarineTraffic search URL
            const searchUrl = `https://www.marinetraffic.com/en/ais/details/ships/mmsi:${encodeURIComponent(mmsi)}`;

            // Navigate the pre-opened tab to the correct URL
            newTab.location.href = searchUrl;
        })
        .catch(error => {
            console.error("Error fetching vessel info:", error);
            newTab.close(); // Close the tab on error
        });
});

/** Return Button */
document.addEventListener("DOMContentLoaded", () => {
    // Get references to elements
    const returnButton = document.getElementById("return-button");
    const vesselNameElement = document.getElementById("vessel-title"); // Displays boat name
    const vesselForm = document.getElementById("vessel-form"); // Search bar form
    const taskMenu = document.getElementById("task-menu"); // Task menu section
    const taskDetails = document.getElementById("task-data-container"); // The task JSON content section
    const vesselInput = document.getElementById("vessel-name"); // Search input field
    const suggestionsBox = document.getElementById("autocomplete-suggestions"); // Autocomplete suggestions box

    returnButton.addEventListener("click", () => {
        clearPageContent();
        // **Clear localStorage values**
        localStorage.removeItem("selectedBoat");
        localStorage.removeItem("currentTask");

        // **Ensure elements exist before modifying them**
        if (vesselNameElement) vesselNameElement.textContent = "";
        if (taskMenu) taskMenu.style.display = "none";
        if (taskDetails) taskDetails.innerHTML = ""; // Clears any displayed task JSON content
        if (vesselForm) vesselForm.style.display = "block";
        if (vesselInput) {
            vesselInput.value = "";
            vesselInput.disabled = false;
        }
        if (suggestionsBox) suggestionsBox.innerHTML = ""; // Remove autocomplete suggestions
    });
});


/** Language Button Image Display */
const languageSelectButton = document.getElementById("language-select");
const languageIcon = languageSelectButton.querySelector("img");

// Function to update the button icon based on the current language
function updateLanguageIcon() {
    const currentLang = localStorage.getItem("language") || "en";
    languageIcon.src = currentLang === "en" ? "//lukskul.github.io/Vessel-Mechanic-Log-V.2/App/icons/usa.svg" : "//lukskul.github.io/Vessel-Mechanic-Log-V.2/App/icons/mexico.svg";
}

// Run the function on page load to ensure the correct icon is displayed
document.addEventListener("DOMContentLoaded", updateLanguageIcon);

// Update the icon whenever the language button is clicked
languageSelectButton.addEventListener("click", () => {
    setTimeout(updateLanguageIcon, 50); // Small delay to ensure language change completes
});


