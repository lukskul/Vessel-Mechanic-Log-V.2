export function propsPopulate(data) {
    const propsHtmlContainer = document.querySelector('.props-html');
    const detailsContainer = document.querySelector('.details'); 

    if (!data || !Array.isArray(data.propDetails)) {
        console.error("Missing or incorrect prop details. Expecting an array.");
        return;
    }

    // Clear previous content
    detailsContainer.innerHTML = "";

    if (data.propDetails.length === 1) {
        // If only one prop, show details directly
        const prop = data.propDetails[0];
        for (const key in prop) {
            if (prop.hasOwnProperty(key)) {
                const detailDiv = document.createElement('div');
                detailDiv.classList.add('detail-row');
                detailDiv.innerHTML = `
                    <div class="detail-key">${key.replace(/([A-Z])/g, ' $1')}: </div>
                    <div class="detail-value">${prop[key] || '<i>N/A</i>'}</div>
                `;
                detailsContainer.appendChild(detailDiv);
            }
        }
    } else {
        // If multiple props, create dropdowns
        data.propDetails.forEach((prop, index) => {
            const detailsSection = document.createElement('div');
            detailsSection.classList.add('prop-section');

            // Create a dropdown
            const dropdown = document.createElement('details');
            const summary = document.createElement('summary');
            summary.textContent = `Prop ${index + 1} (${prop.direction || "Unknown Direction"})`;
            dropdown.appendChild(summary);

            for (const key in prop) {
                if (prop.hasOwnProperty(key)) {
                    const detailDiv = document.createElement('div');
                    detailDiv.classList.add('detail-row');
                    detailDiv.innerHTML = `
                        <div class="detail-key">${key.replace(/([A-Z])/g, ' $1')}: </div>
                        <div class="detail-value">${prop[key] || '<i>N/A</i>'}</div>
                    `;
                    dropdown.appendChild(detailDiv);
                }
            }

            detailsSection.appendChild(dropdown);
            detailsContainer.appendChild(detailsSection);
        });
    }
}
