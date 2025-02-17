export function propsPopulate(data) {
    const propsHtmlContainer = document.querySelector('.props-html');
    let currentVesselName = localStorage.getItem("selectedBoat") || "";

    // Update the heading dynamically
    const heading = propsHtmlContainer.querySelector('h2');
    const description = propsHtmlContainer.querySelector('p');
    heading.textContent = `Propeller Information for ${currentVesselName}`;
    description.textContent = `This section provides details about the propellers of ${currentVesselName}.`;

    // Get the details container where you will display propeller details dynamically
    const detailsContainer = propsHtmlContainer.querySelector('.details');
    detailsContainer.innerHTML = ''; // Clear existing content

    if (!data || !data.propDetails) {
        console.error("Missing or incorrect prop details.");
        return;
    }

    const propDetails = data.propDetails;
    console.log(data.propDetails); 

    // Loop through propDetails and create HTML elements for each
    for (const key in propDetails) {
        if (propDetails.hasOwnProperty(key)) {
            const detailDiv = document.createElement('div');
            detailDiv.classList.add('detail-row');
            detailDiv.innerHTML = `
                <div class="detail-key">${key.replace(/([A-Z])/g, ' $1')}: </div>
                <div class="detail-value">${propDetails[key] || '<i>N/A</i>'}</div>
            `;
            detailsContainer.appendChild(detailDiv);
        }
    }
}

