export function rudderPopulate(data) {
    const propsHtmlContainer = document.querySelector('.rudder-html');
    const detailsContainer = document.querySelector('.details'); 

    // Check language preference from local storage
    const lang = localStorage.getItem('language') || 'en';

    if (!data || !Array.isArray(data.propDetails)) {
        console.error("Missing or incorrect rudder details. Expecting an array.");
        return;
    }

    // Clear previous content
    detailsContainer.innerHTML = "";

    // Loop through rudderDetails and create dropdowns
    data.rudderDetails.forEach((rudder, index) => {
        const detailsSection = document.createElement('div');
        detailsSection.classList.add('dropdown-section');

        // Create a dropdown using the "direction" key as the label
        const dropdown = document.createElement('details');
        const summary = document.createElement('summary');
        dropdown.setAttribute('close', '');
        summary.textContent = rudder.position || (lang === 'es' ? "Dirección desconocida" : "N/A");
        dropdown.appendChild(summary);

        // Add serial number inside dropdown
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('section-info');
        infoDiv.innerHTML = `<strong>${lang === 'es' ? "Info" : "Info."}</strong> ${rudder.info || '<i>N/A</i>'}`;
        dropdown.appendChild(serialDiv);

        detailsSection.appendChild(dropdown);
        detailsContainer.appendChild(detailsSection);
    });

    // Create Rudder Assembly Section
    const rudderAssembly = document.createElement("div");
    rudderAssembly.classList.add("heading");

    const tillerArm = document.createElement("h3"); 
    tillerArm.textContent = lang === 'es' ? "Caña Del Timón:" : "Tiller Arm:";
    tillerArm.appendChild(nutHeading);

    const tillerArmKeys = [
        { key: "pinchBolts", label: lang === "es" ? "Tornillos De Pellizco" : "Pinch Bolts" },
        { key: "nutRestraint", label: lang === "es" ? "Restricción de la Tuerca" : "Nut Restraint" },
        { key: "setScrews", label: lang === "es" ? "Tornillos Prisioneros" : "Set Screws" }
    ];
    tillerArmKeys.forEach(({key, label}) => {
        const rudderDetailDiv = document.createElement('div');
        rudderDetailDiv.classList.add('detail-b-row');
        rudderDetailDiv.innerHTML = `
            <div class="detail-b-key">${label}: </div>
            <div class="detail-b-value">${data.rudderDetails[0][key] || ''}</div>
        `;
        rudderSection.appendChild(rudderDetailDiv);
    });

    detailsContainer.appendChild(rudderSection);

}


