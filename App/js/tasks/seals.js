export function sealsPopulate(data) {
    const detailsContainer = document.querySelector('.details');

    // Check if data is valid
    if (!data || !Array.isArray(data.sealsDetails)) {
        console.error("Missing or incorrect details. Expecting an array.");
        return;
    }

    // Clear previous content
    detailsContainer.innerHTML = "";

    // Check if there are seals details in the data
    if (data.sealsDetails.length === 0) {
        console.warn("No seals details available.");
        return;
    }

    // Create Rudder Seal 
    const rudderDiv = document.createElement('div');
    rudderDiv.classList.add( 'container'); 

    const titleDiv = document.createElement( 'div' ); 
    titleDiv.classList.add( 'heading'); 

    const rudderTitle = document.createElement('h3');
    rudderTitle.textContent = 'Rudder Seal';
    rudderDiv.appendChild(rudderTitle);

    const rudderSpecs = document.createElement('div');
    rudderSpecs.classList.add('html-container');
    
    // Populate Rudder Seals
    let rudderSealsFound = false; // Flag to check if any seal types exist
    data.sealsDetails.forEach(detail => {
        if (detail.rudder_seals && detail.rudder_seals.seal_type) {
            const sealType = detail.rudder_seals.seal_type;
            const rudderItem = document.createElement('div');
            rudderItem.classList.add('dropdown-item');
            rudderItem.textContent = sealType; // Display seal_type in the dropdown item
            rudderSpecs.appendChild(rudderItem);
            rudderSealsFound = true; // If we find a seal, we set the flag
        }
    });

    // If no Rudder seals are found, show a fallback message
    if (!rudderSealsFound) {
        const noSealItem = document.createElement('div');
        noSealItem.classList.add('dropdown-item');
        noSealItem.textContent = 'No Rudder Seal Information Available';
        rudderSpecs.appendChild(noSealItem); // Append to rudderSpecs, not rudderDiv
    }

    // Append rudderSpecs (not rudderDiv) to the container
    rudderDiv.appendChild(rudderSpecs);
    detailsContainer.appendChild(rudderDiv);


/*************Shaft Seal   */


    // Create Shaft Seal Dropdown (template for Shaft Seal)
    const shaftDiv = document.createElement('div');
    shaftDiv.classList.add( 'container'); 

    const titleDiv2 = document.createElement( 'div' ); 
    titleDiv2.classList.add( 'heading');

    const shaftTitle = document.createElement('h3');
    shaftTitle.textContent = 'Shaft Seal';
    shaftDiv.appendChild(shaftTitle);

    const shaftSpecs = document.createElement('div');
    shaftSpecs.classList.add('html-container');
    
    // Populate Shaft Seals
    let shaftSealsFound = false; // Flag to check if any seal types exist
    data.sealsDetails.forEach(detail => {
        if (detail.shaft_seals && detail.shaft_seals.seal_type) {
            const sealType = detail.shaft_seals.seal_type;
            const shaftItem = document.createElement('div');
            shaftItem.classList.add('dropdown-item');
            shaftItem.textContent = sealType; // Display seal_type in the dropdown item
            shaftSpecs.appendChild(shaftItem);
            shaftSealsFound = true; // If we find a seal, we set the flag
        }
    });

    // If no Shaft seals are found, show a fallback message
    if (!shaftSealsFound) {
        const noSealItem = document.createElement('div');
        noSealItem.classList.add('dropdown-item');
        noSealItem.textContent = 'No Shaft Seal Information Available';
        shaftSpecs.appendChild(noSealItem); // Append to shaftSpecs, not shaftDiv
    }

    // Append shaftSpecs (not shaftDiv) to the container
    shaftDiv.appendChild(shaftSpecs);
    detailsContainer.appendChild(shaftDiv);
}