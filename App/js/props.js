export function propsPopulate(data) {
    const propsHtmlContainer = document.querySelector('.props-html');
    const detailsContainer = document.querySelector('.details'); 

    // Check language preference from local storage
    const lang = localStorage.getItem('language') || 'en';

    if (!data || !Array.isArray(data.propDetails)) {
        console.error("Missing or incorrect prop details. Expecting an array.");
        return;
    }

    // Clear previous content
    detailsContainer.innerHTML = "";

    // Loop through propDetails and create dropdowns
    data.propDetails.forEach((prop, index) => {
        const detailsSection = document.createElement('div');
        detailsSection.classList.add('dropdown-section');

        // Create a dropdown using the "direction" key as the label
        const dropdown = document.createElement('details');
        const summary = document.createElement('summary');
        dropdown.setAttribute('close', '');
        summary.textContent = prop.direction || (lang === 'es' ? "Dirección desconocida" : "N/A");
        dropdown.appendChild(summary);

        // Add serial number inside dropdown
        const serialDiv = document.createElement('div');
        serialDiv.classList.add('section-info');
        serialDiv.innerHTML = `<strong>${lang === 'es' ? "Número de Serie" : "Serial Num."}</strong> ${prop.serialNumber || '<i>N/A</i>'}`;
        dropdown.appendChild(serialDiv);

        // Add info inside dropdown
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('section-info');
        infoDiv.innerHTML = ` ${prop.info || '<i>""</i>'}`;
        dropdown.appendChild(infoDiv);

        detailsSection.appendChild(dropdown);
        detailsContainer.appendChild(detailsSection);
    });

    // Create Nut Section
    const nutSection = document.createElement("div");
    nutSection.classList.add("heading");

    const nutHeading = document.createElement("h3"); 
    nutHeading.textContent = lang === 'es' ? "Tuerca:" : "Prop Nut:";
    nutSection.appendChild(nutHeading);

    const nutKeys = [
        { key: "propNutSize", label: lang === "es" ? "Tamaño de la Tuerca" : "Nut Size" },
        { key: "nutRestraint", label: lang === "es" ? "Restricción de la Tuerca" : "Nut Restraint" },
        { key: "pullingHoles", label: lang === "es" ? "Agujeros de Extracción" : "Pulling Holes" }
    ];
    nutKeys.forEach(({key, label}) => {
        const nutDetailDiv = document.createElement('div');
        nutDetailDiv.classList.add('detail-b-row');
        nutDetailDiv.innerHTML = `
            <div class="detail-b-key">${label}: </div>
            <div class="detail-b-value">${data.propDetails[0][key] || ''}</div>
        `;
        nutSection.appendChild(nutDetailDiv);
    });

    detailsContainer.appendChild(nutSection);

    // Create Specs Section
    const specsSection = document.createElement("div");
    specsSection.classList.add("heading");

    const specsHeading = document.createElement("h3");
    specsHeading.textContent = lang === 'es' ? "Especificaciones:" : "Specs:";
    specsSection.appendChild(specsHeading);

    // Define the keys for specs with English and Spanish translations
    const specsKeys = {
        "diameter x pitch": lang === "es" ? "Diámetro x Paso" : "Dia. x Pitch",
        "markings": lang === "es" ? "Marcas" : "Markings",
        "bore": lang === "es" ? "Agujero" : "Bore",
        "material": lang === "es" ? "Material" : "Material"
    };

    // Loop through the translated specsKeys
    Object.keys(specsKeys).forEach(key => {
        const specDetailDiv = document.createElement('div');
        specDetailDiv.classList.add('detail-b-row');
        specDetailDiv.innerHTML = `
            <div class="detail-b-key">${specsKeys[key]}: </div>
            <div class="detail-b-value">${data.propDetails[0][key] || ''}</div>
        `;
        specsSection.appendChild(specDetailDiv);
    });

    detailsContainer.appendChild(specsSection);
}
