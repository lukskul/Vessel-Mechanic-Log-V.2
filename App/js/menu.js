import { clearPageContent } from "./vessel.js";

/** Information Button */
document.addEventListener("DOMContentLoaded", () => {
    const informationButton = document.getElementById("information");
    const infoDropdown = document.getElementById("info-dropdown");
    const infoInput = document.getElementById("info-input");

    const englishPlaceholders = {
        information: "Enter information here..."
    };

    const spanishPlaceholders = {
        information: "Ingresa información aquí..."
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

/** Converter Button */
document.addEventListener("DOMContentLoaded", () => {
    const convertButton = document.getElementById("convert");
    const converterContainer = document.getElementById("converter-container");

    // Toggle the visibility of the converter container when the button is clicked
    convertButton.addEventListener("click", () => {
        converterContainer.classList.toggle("visible"); // Add/remove the "visible" class to control animation
    });

    // Conversion functions
    function inchesToMillimeters(inches) {
        return inches * 25.4;
    }

    function millimetersToInches(mm) {
        return mm / 25.4;
    }

    // Convert inches to millimeters when inches input changes
    const inchesInput = document.getElementById("inches-input");
    const mmInput = document.getElementById("mm-input");

    inchesInput.addEventListener("input", () => {
        let inches = parseFraction(inchesInput.value);
        mmInput.value = inches ? inchesToMillimeters(inches).toFixed(2) : "";
    });

    // Convert millimeters to inches when millimeters input changes
    mmInput.addEventListener("input", () => {
        const mm = parseFloat(mmInput.value);
        inchesInput.value = mm ? decimalToFraction(millimetersToInches(mm)) : "";
    });

    // Function to parse a mixed fraction or simple fraction to a decimal
    function parseFraction(fraction) {
        if (fraction.includes(" ")) {
            // Handle mixed fractions like "1 1/4"
            let parts = fraction.split(" ");
            let wholeNumber = parseInt(parts[0]);
            let fractionPart = parts[1];
            let [numerator, denominator] = fractionPart.split("/").map(Number);
            return wholeNumber + (numerator / denominator);
        } else if (fraction.includes("/")) {
            // Handle simple fractions like "1/4"
            let [numerator, denominator] = fraction.split("/").map(Number);
            return numerator / denominator;
        } else {
            // Handle whole numbers or decimals
            return parseFloat(fraction);
        }
    }

    // Function to convert a decimal to the nearest fraction
    function decimalToFraction(decimal) {
        if (decimal === "") return ""; // Allow clearing of input
        const tolerance = 1.0E-6;
        const maxDenominator = 16; // Limit the denominator size to 16 for common fractions

        let bestFraction = { numerator: 0, denominator: 1 };
        let smallestError = Number.MAX_VALUE;

        // Loop through possible denominators (1 to 16)
        for (let denominator = 1; denominator <= maxDenominator; denominator++) {
            let numerator = Math.round(decimal * denominator);
            let error = Math.abs(decimal - numerator / denominator);

            // Track the fraction with the smallest error
            if (error < smallestError) {
                bestFraction = { numerator, denominator };
                smallestError = error;
            }
        }

        // Return the fraction in the form of "numerator/denominator"
        return `${bestFraction.numerator}/${bestFraction.denominator}`;
    }

    // Update the inch input to display as a fraction
    function updateInchesAsFraction(inches) {
        const fractionInches = decimalToFraction(inches);
        inchesInput.value = fractionInches;  // Display fraction in inches input
    }

    // Update conversion when the "Convert" button is clicked
    convertButton.addEventListener("click", () => {
        const inchesValue = parseFraction(inchesInput.value);
        
        // If inches value is provided, convert and show fraction
        if (!isNaN(inchesValue)) {
            let fractionInches = decimalToFraction(inchesValue);
            let millimeters = inchesToMillimeters(inchesValue);
            inchesInput.value = fractionInches;  // Display as fraction
            mmInput.value = millimeters.toFixed(2);  // Display millimeters
        }
    });
});

/** Ship Search */
document.getElementById("search-ship-button").addEventListener("click", () => {
    const selectedBoat = localStorage.getItem("selectedBoat"); // Retrieve the selected boat

    if (!selectedBoat) {
        alert("Select a vessel");
        return;
    }

    // Construct the MarineTraffic search URL with the selected boat name
    const searchUrl = `https://www.marinetraffic.com/en/ais/index/search/all?keyword=${encodeURIComponent(selectedBoat)}`;

    window.open(searchUrl, "_blank"); // Open in a new tab
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


