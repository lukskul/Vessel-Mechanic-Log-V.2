export function couplersPopulate(data) {
    const detailsContainer = document.querySelector('.details');

    if (!data || !Array.isArray(data.couplersDetails)) {
        console.error("Missing or incorrect couplers details. Expecting an array.");
        return;
    }

    // Clear previous content
    detailsContainer.innerHTML = "";

    // Loop through couplersDetails and create dropdowns
    data.couplersDetails.forEach((couplers, index) => {
        const detailsSection = document.createElement('div');
        detailsSection.classList.add('couplers-section');

        // Create a dropdown using the "location" key as the label
        const dropdown = document.createElement('details');
        dropdown.setAttribute('open', ''); // Ensures the dropdown remains open by default

        const summary = document.createElement('summary');
        summary.textContent = couplers.location || "Unknown Location";
        dropdown.appendChild(summary);

        // Add info inside dropdown
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('couplers-info');
        infoDiv.innerHTML = `<strong>Info:</strong> ${couplers.info || '<i>N/A</i>'}`;
        dropdown.appendChild(infoDiv);

        detailsSection.appendChild(dropdown);
        detailsContainer.appendChild(detailsSection);
    });

    // Create Torque Specifications Section
    const torqueSection = document.createElement("div");
    torqueSection.classList.add("heading");

    const torqueHeading = document.createElement("h3");
    torqueHeading.textContent = "Torque Specifications:";
    torqueSection.appendChild(torqueHeading);

    const torqueKeys = ["Coupler Bolt", "Retaining Nut", "Safety Lock"];
    torqueKeys.forEach(key => {
        const torqueDetailDiv = document.createElement('div');
        torqueDetailDiv.classList.add('detail-couplers-row');
        torqueDetailDiv.innerHTML = `
            <div class="detail-couplers-key">${key.replace(/([A-Z])/g, ' $1')}: </div>
            <div class="detail-couplers-value">${data.couplerDetails[0][key] || ''}</div>
        `;
        torqueSection.appendChild(torqueDetailDiv);
    });

    detailsContainer.appendChild(torqueSection);

    // Create Removal Info Section
    const removalSection = document.createElement("div");
    removalSection.classList.add("heading");

    const removalHeading = document.createElement("h3");
    removalHeading.textContent = "Removal Info:";
    removalSection.appendChild(removalHeading);

    data.couplerDetails.forEach((couplers) => {
        if (couplers["Removal Info"]) {
            const removalDetailDiv = document.createElement('div');
            removalDetailDiv.classList.add('detail-couplers-row');
            removalDetailDiv.innerHTML = `<div class="detail-couplers-value">${couplers["Removal Info"]}</div>`;
            removalSection.appendChild(removalDetailDiv);
        }
    });

    detailsContainer.appendChild(removalSection);
}
