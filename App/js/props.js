export function propsPopulate(data) {
    const propsHtmlContainer = document.querySelector('.props-html');
    const detailsContainer = document.querySelector('.details'); 

    if (!data || !Array.isArray(data.propDetails)) {
        console.error("Missing or incorrect prop details. Expecting an array.");
        return;
    }

    // Clear previous content
    detailsContainer.innerHTML = "";

    // Keys for "Prop Info" section
    const propInfoKeys = ["direction", "diameter x pitch", "serialNumber", "markings", "Bore"];

    if (data.propDetails.length === 1) {
        // If only one prop, show details directly
        const prop = data.propDetails[0];

        // Create "Prop Info" section
        const propInfoSection = document.createElement("div");
        propInfoSection.classList.add("detail-section");

        const propInfoHeading = document.createElement("h3");
        propInfoHeading.textContent = "Prop Info";
        propInfoSection.appendChild(propInfoHeading);

        const propInfoList = document.createElement("ul");

        for (const key of propInfoKeys) {
            if (prop.hasOwnProperty(key)) {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<strong>${key.replace(/([A-Z])/g, ' $1')}:</strong> ${prop[key] || '<i>N/A</i>'}`;
                propInfoList.appendChild(listItem);
            }
        }

        propInfoSection.appendChild(propInfoList);
        detailsContainer.appendChild(propInfoSection);

        // Create remaining details section
        const otherDetailsSection = document.createElement("div");
        otherDetailsSection.classList.add("detail-section");

        const otherDetailsHeading = document.createElement("h3");
        otherDetailsHeading.textContent = "Prop Removal";
        otherDetailsSection.appendChild(otherDetailsHeading);

        for (const key in prop) {
            if (prop.hasOwnProperty(key) && !propInfoKeys.includes(key)) {
                const detailDiv = document.createElement('div');
                detailDiv.classList.add('detail-row');
                detailDiv.innerHTML = `
                    <div class="detail-key">${key.replace(/([A-Z])/g, ' $1')}: </div>
                    <div class="detail-value">${prop[key] || '<i>N/A</i>'}</div>
                `;
                otherDetailsSection.appendChild(detailDiv);
            }
        }

        detailsContainer.appendChild(otherDetailsSection);

    } else {
        // If multiple props, create dropdowns
        data.propDetails.forEach((prop, index) => {
            const detailsSection = document.createElement('div');
            detailsSection.classList.add('prop-section');

            // Create a dropdown
            const dropdown = document.createElement('details');
            dropdown.setAttribute('open', ''); // Set dropdown to open initially
            const summary = document.createElement('summary');
            summary.textContent = prop.direction || "Unknown Direction";
            dropdown.appendChild(summary);

            // Add "Prop Info" section inside dropdown
            const propInfoHeading = document.createElement("h3");
            propInfoHeading.textContent = "Specs:";
            dropdown.appendChild(propInfoHeading);

            for (const key of propInfoKeys) {
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

            // Add "Other Prop Details" section inside dropdown
            const otherDetailsHeading = document.createElement("h3");
            otherDetailsHeading.textContent = "Nut:";
            dropdown.appendChild(otherDetailsHeading);

            for (const key in prop) {
                if (prop.hasOwnProperty(key) && !propInfoKeys.includes(key)) {
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

