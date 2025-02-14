import "../css/styles.css"; // Import the main CSS file
/*import { setupDropdowns } from "./dropdownHandler.js";*/

document.addEventListener("DOMContentLoaded", () => {
    const boats = ["Acoustic Explorer", "Ketau", "Amore"];
    const categories = ["vesselData.json", "runningGear.json", "engineSpecs.json"];

    setupDropdowns(boats, categories);
});
