export function propsPopulate(data) {
    const propsHtmlContainer = document.querySelector('.props-html');
    const detailsContainer = document.querySelector('.details'); 

    if (!data || !Array.isArray(data.propDetails)) {
        console.error("Missing or incorrect prop details. Expecting an array.");
        return;
    }

    // Clear previous content
    detailsContainer.innerHTML = "";

    // Loop through propDetails and create dropdowns
    data.propDetails.forEach((prop, index) => {
        const detailsSection = document.createElement('div');
        detailsSection.classList.add('prop-section');


        // Create a dropdown using the "direction" key as the label
        const dropdown = document.createElement('details');
        const summary = document.createElement('summary');
        dropdown.setAttribute('open', '');
        summary.textContent = prop.direction || "Unknown Direction";
        dropdown.appendChild(summary);

        // Add serial number inside dropdown
        const serialDiv = document.createElement('div');
        serialDiv.classList.add('prop-info');
        serialDiv.innerHTML = `<strong>Searial Num.</strong> ${prop.serialNumber || '<i>N/A</i>'}`;
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
    nutHeading.textContent = "Nut:";
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
    specsHeading.textContent = "Specs:";
    specsSection.appendChild(specsHeading);

    const specsKeys = ["diameter x pitch", "markings", "Bore", "Material"];
    specsKeys.forEach(key => {
        const specDetailDiv = document.createElement('div');
        specDetailDiv.classList.add('detail-prop-row');
        specDetailDiv.innerHTML = `
            <div class="detail-prop-key">${key.replace(/([A-Z])/g, ' $1')}: </div>
            <div class="detail-prop-value">${data.propDetails[0][key] || ''}</div>
        `;
        specsSection.appendChild(specDetailDiv);
    });

    detailsContainer.appendChild(specsSection);
}
