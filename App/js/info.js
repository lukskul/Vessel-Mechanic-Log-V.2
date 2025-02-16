
export function infoPopulate(data) {
    const infoHtmlContainer = document.querySelector('.info-html');
    let currentVesselName = localStorage.getItem("selectedBoat") || "";

    // Update the heading dynamically
    const heading = infoHtmlContainer.querySelector('h2');
    const description = infoHtmlContainer.querySelector('p');
    heading.textContent = `Information about ${currentVesselName}`;
    description.textContent = `This section provides general information about ${currentVesselName}.`;

    // Get the details container where you will display ship details dynamically
    const detailsContainer = document.querySelector('.details');
    detailsContainer.innerHTML = ''; // Clear existing content

    // Loop through ship details and create HTML elements for each
    for (const key in data.shipDetails) {
        if (data.shipDetails.hasOwnProperty(key)) {
            const detailDiv = document.createElement('div');
            detailDiv.classList.add('detail-row');
            detailDiv.innerHTML = `
                <div class="detail-key">${key.replace(/([A-Z])/g, ' $1')}: </div>
                <div class="detail-value">${data.shipDetails[key] || '<i>N/A</i>'}</div>
            `;
            detailsContainer.appendChild(detailDiv);
        }
    }
}
