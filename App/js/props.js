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

    // Define the keys for specs with English and Spanish translations
    const specsKeys = {
        "diameter x pitch": lang === "es" ? "Diámetro x Paso" : "Diameter x Pitch",
        "markings": lang === "es" ? "Marcas" : "Markings",
        "Bore": lang === "es" ? "Agujero" : "Bore",
        "Material": lang === "es" ? "Material" : "Material"
    };

    // Loop through propDetails and create dropdowns
    data.propDetails.forEach((prop, index) => {
        const detailsSection = document.createElement('div');
        detailsSection.classList.add('prop-section');

        // Create a dropdown using the "direction" key as the label
        const dropdown = document.createElement('details');
        const summary = document.createElement('summary');
        dropdown.setAttribute('open', '');
        summary.textContent = prop.direction || (lang === 'es' ? "Dirección desconocida" : "Unknown Direction");
        dropdown.appendChild(summary);

        // Add serial number inside dropdown
        const serialDiv = document.createElement('div');
        serialDiv.classList.add('prop-info');
        serialDiv.innerHTML = `<strong>${lang === 'es' ? "Número de Serie" : "Serial Num."}</strong> ${prop.serialNumber || '<i>N/A</i>'}`;
        dropdown.appendChild(serialDiv);

        // Add info inside dropdown
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('prop-info');
        infoDiv.innerHTML = ` ${prop.info || '<i>""</i>'}`;
        dropdown.appendChild(infoDiv);

        detailsSection.appendChild(dropdown);
        detailsContainer.appendChild(detailsSection);
    });

    // Create Nut Section
    const nutSection = document.createElement("div");
    nutSection.classList.add("heading");

    const nutHeading = document.createElement("h3"); 
    nutHeading.textContent = lang === 'es' ? "Tuerca:" : "Nut:";
    nutSection.appendChild(nutHeading);

    const nutKeys = ["PropNutSize", "NutRestraint"];
    nutKeys.forEach(key => {
        const nutDetailDiv = document.createElement('div');
        nutDetailDiv.classList.add('detail-prop-row');
        nutDetailDiv.innerHTML = `
            <div class="detail-prop-key">${key.replace(/([A-Z])/g, ' $1')}: </div>
            <div class="detail-prop-value">${data.propDetails[0][key] || ''}</div>
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

    // Loop through the translated specsKeys
    Object.keys(specsKeys).forEach(key => {
        const specDetailDiv = document.createElement('div');
        specDetailDiv.classList.add('detail-prop-row');
        specDetailDiv.innerHTML = `
            <div class="detail-prop-key">${specsKeys[key]}: </div>
            <div class="detail-prop-value">${data.propDetails[0][key] || ''}</div>
        `;
        specsSection.appendChild(specDetailDiv);
    });

    detailsContainer.appendChild(specsSection);
}
