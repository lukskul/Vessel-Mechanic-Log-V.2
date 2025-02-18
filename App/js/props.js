export function propsPopulate(data) {
    const propsHtmlContainer = document.querySelector('.props-html');
    const details = document.querySelector('.details');

    if (!propsHtmlContainer || !details) {
        console.error("Missing container elements. Ensure '.props-html' and '.details' exist.");
        return;
    }

    if (!data || !Array.isArray(data.propDetails)) {
        console.error("Missing or incorrect prop details. Expected an array.");
        return;
    }

    propsHtmlContainer.innerHTML = ''; // Clear previous content
    details.innerHTML = ''; // Clear previous details

    const propCount = data.propDetails.length;

    // If only one prop, display details directly
    if (propCount === 1) {
        displayPropDetails(data.propDetails[0]);
        return;
    }

    // Create dropdown for selecting propellers if there are multiple props
    const selectDropdown = document.createElement('select');
    selectDropdown.classList.add('prop-selector');

    data.propDetails.forEach((prop, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = prop.direction || `Propeller ${index + 1}`; // Dropdown title is "direction"
        selectDropdown.appendChild(option);
    });

    propsHtmlContainer.appendChild(selectDropdown);

    // Function to display details of selected propeller
    function displayPropDetails(prop) {
        details.innerHTML = ''; // Clear previous details

        for (const key in prop) {
            if (prop.hasOwnProperty(key)) {
                const detailDiv = document.createElement('div');
                detailDiv.classList.add('detail-row');
                detailDiv.innerHTML = `
                    <div class="detail-key">${key.replace(/([A-Z])/g, ' $1')}: </div>
                    <div class="detail-value">${prop[key] || '<i>N/A</i>'}</div>
                `;
                details.appendChild(detailDiv);
            }
        }
    }

    // Show details for the first propeller by default
    displayPropDetails(data.propDetails[0]);

    // Update details when dropdown changes
    selectDropdown.addEventListener('change', (event) => {
        displayPropDetails(data.propDetails[event.target.value]);
    });
}
