export function sealsPopulate(data) {
    const container = document.getElementById("html-container");
    container.innerHTML = "";

    const lang = localStorage.getItem('language') || 'en';

    // Title
    const title = document.createElement("h1");
    title.className = "text-2xl font-semibold mb-4";
    title.textContent = data.title || (lang === "es" ? "Sellos" : "Seals");
    container.appendChild(title);

    // Description
    if (data.description) {
        const desc = document.createElement("p");
        desc.className = "mb-4 text-gray-700";
        desc.textContent = data.description;
        container.appendChild(desc);
    }

    // Wrap all dropdowns
    const dropdownContainer = document.createElement("div");
    dropdownContainer.classList.add("dropdown-container");
    container.appendChild(dropdownContainer);

    const seals = data.sealDetails || [];

    seals.forEach((seal, index) => {
        const section = document.createElement("div");
        section.classList.add("dropdown-section", `seal-object-${index + 1}`);

        const dropdown = document.createElement("details");
        const summary = document.createElement("summary");
        summary.classList.add("drop-down-image-prop");

        summary.textContent =
            seal.location ||
            seal.type ||
            (lang === "es" ? "Sello" : "Seal");

        dropdown.appendChild(summary);

        // Info box
        const infoWrapper = document.createElement("div");
        infoWrapper.classList.add("section-info", "mt-3");

        Object.keys(seal).forEach(key => {
            if (key === "photo" || key === "notes") return; // handled separately

            const row = document.createElement("div");
            row.classList.add("detail-b-row");

            row.innerHTML = `
                <div class="detail-b-key">${formatLabel(key, lang)}:</div>
                <div class="detail-b-value">${seal[key]}</div>
            `;

            infoWrapper.appendChild(row);
        });

        // Photo
        if (seal.photo) {
            const img = document.createElement("img");
            img.src = seal.photo;
            img.className = "w-full rounded-lg mt-3";
            infoWrapper.appendChild(img);
        }

        // Notes
        const notesBox = document.createElement("textarea");
        notesBox.placeholder = lang === "es" ? "Notas..." : "Notes...";
        notesBox.className = "w-full p-2 border rounded-lg bg-gray-100 mt-3";
        notesBox.value = seal.notes || "";
        infoWrapper.appendChild(notesBox);

        dropdown.appendChild(infoWrapper);
        section.appendChild(dropdown);
        dropdownContainer.appendChild(section);
    });

    // Match bow thruster column count
    const count = seals.length;
    dropdownContainer.classList.remove("one-item", "two-items", "three-items", "four-items");
    dropdownContainer.classList.add(
        count === 1 ? "one-item" :
        count === 2 ? "two-items" :
        count === 3 ? "three-items" : "four-items"
    );
}

// Helper: convert JSON keys to readable labels
function formatLabel(key, lang) {
    const labels = {
        serialNumber: lang === "es" ? "Número de Serie" : "Serial Number",
        manufacturer: lang === "es" ? "Fabricante" : "Manufacturer",
        model: "Model",
        type: lang === "es" ? "Tipo" : "Type",
        location: lang === "es" ? "Ubicación" : "Location",
        shaftSize: lang === "es" ? "Tamaño del Eje" : "Shaft Size",
        bellowsSize: lang === "es" ? "Tamaño del Fuelle" : "Bellows Size",
        shaftDia: lang === "es" ? "Diámetro del Eje" : "Shaft Dia.",
        housingDia: lang === "es" ? "Diámetro de la Carcasa" : "Housing Dia.",
        sealSize: lang === "es" ? "Tamaño del Sello" : "Seal Size"
    };

    return labels[key] || key.replace(/([A-Z])/g, " $1");
}
