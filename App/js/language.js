export let language = localStorage.getItem("language") || "en"; // Get saved language or default to 'en'

const languageSelectButton = document.getElementById("language-select");

function changeLanguage(newLang) {
    fetch(`https://lukskul.github.io/Vessel-Mechanic-Log-V.2/App/language/${newLang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll("[data-translate]").forEach(element => {
                const key = element.getAttribute("data-translate");
                element.textContent = data[key];
            });

            language = newLang; // Update the language variable
            localStorage.setItem("language", newLang); // Save language to local storage
        })
        .catch(error => console.error("Error loading translation:", error));
}

if (languageSelectButton) {
    languageSelectButton.addEventListener("click", () => {
        const currentLang = localStorage.getItem("language") || "en";
        const newLang = currentLang === "en" ? "es" : "en";

        document.documentElement.lang = newLang;
        changeLanguage(newLang);
    });
}

// Set the initial language on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "en";
    document.documentElement.lang = savedLanguage;
    changeLanguage(savedLanguage);
});
