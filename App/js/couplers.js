export function couplersPopulate(data) {
    const couplersHtmlContainer = document.querySelector('.couplers-html');
    const detailsContainer = document.querySelector('.details'); 

    // Check language preference from local storage
    const lang = localStorage.getItem('language') || 'en';

    if (!data || !Array.isArray(data.couplerDetails)) {
        console.error("Missing or incorrect coupler details. Expecting an array.");
        return;
    }

    // Clear previous content
    detailsContainer.innerHTML = "";

    // Define the keys for specs with English and Spanish translations
    const specKeys = {
        "Coupler Bolt": lang === "es" ? "Perno de Acoplamiento" : "Coupler Bolt",
        "Retaining Nut": lang === "es" ? "Tuerca de Retención" : "Retaining Nut",
        "Safety Lock": lang === "es" ? "Bloqueo de Seguridad" : "Safety Lock",
        "Removal Info": lang === "es" ? "Información de Remoción" : "Removal Info"
    };

    // Loop through couplerDetails and create dropdowns
    data.couplerDetails.forEach((coupler, index) => {
        const detailsSection = document.createElement('div');
        detailsSection.classList.add('dropdown-section');

        // Create a dropdown using the "location" key as the label
        const dropdown = document.createElement('details');
        const summary = document.createElement('summary');
        dropdown.setAttribute('close', '');
        summary.textContent = coupler.location || (lang === 'es' ? "Ubicación Desconocida" : "Unknown Location");
        dropdown.appendChild(summary);

        // Add coupler info inside dropdown
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('section-info');
        infoDiv.innerHTML = `<strong>Info:</strong> ${coupler.info || '<i>N/A</i>'}`;
        dropdown.appendChild(infoDiv);

        detailsSection.appendChild(dropdown);
        detailsContainer.appendChild(detailsSection);
    });

    const specSection = document.createElement("div");
    specSection.classList.add("heading");

    const specHeading = document.createElement("h3");
    specHeading.textContent = lang === 'es' ? "Especificaciones:" : "Specs:";
    specSection.appendChild(specHeading);

    // Loop through the translated specKeys
    Object.keys(specKeys).forEach(key => {
        const specDetailDiv = document.createElement('div');
        specDetailDiv.classList.add('detail-prop-row');
        specDetailDiv.innerHTML = `
            <div class="detail-prop-key">${specKeys[key]}: </div>
            <div class="detail-prop-value">${data.couplerDetails[0][key] || ''}</div>
        `;
        specSection.appendChild(specDetailDiv);
    });

    detailsContainer.appendChild(specSection);

}