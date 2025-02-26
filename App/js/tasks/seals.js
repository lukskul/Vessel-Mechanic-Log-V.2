export function sealsPopulate(data) {
    const detailsContainer = document.querySelector('.details');

    // Check if data is valid
    if (!data || !Array.isArray(data.sealsDetails)) {
        console.error("Missing or incorrect details. Expecting an array.");
        return;
    }

    // Clear previous content
    detailsContainer.innerHTML = "";

    // Translation setup
    const language = localStorage.getItem('language') || 'en';
    const translations = {
        en: {
            manufacturer: 'Manufacturer',
            model_number: 'Model Number',
            seal_type: 'Seal Type',
            installation_date: 'Installation Date',
            recommended_replacement_interval: 'Recommended Replacement Interval',
            "packing size": "Packing Size",
            "packing count": "Packing Count",
            compression: "Compression",
            "set screws": "Set Screws",
            bolt_size: "Bolt Size",
            torque_value: "Torque Value",
            notes: "Notes"
        },
        es: {
            manufacturer: 'Fabricante',
            model_number: 'Número de modelo',
            seal_type: 'Tipo de sello',
            installation_date: 'Fecha de instalación',
            recommended_replacement_interval: 'Intervalo de reemplazo recomendado',
            "packing size": "Tamaño de empaque",
            "packing count": "Cantidad de empaques",
            compression: "Compresión",
            "set screws": "Tornillos de fijación",
            bolt_size: "Tamaño del perno",
            torque_value: "Valor de torque",
            notes: "Notas"
        }
    };

    // Helper function to create sections
    function createSealSection(title, sealData) {
        const objectDiv = document.createElement('div');
        objectDiv.classList.add('container');

        const headingDiv = document.createElement('div');
        headingDiv.classList.add('heading');
        objectDiv.appendChild(headingDiv);

        const objectTitle = document.createElement('h3');
        objectTitle.textContent = title;
        headingDiv.appendChild(objectTitle);

        const specsDiv = document.createElement('div');
        specsDiv.classList.add('html-container');

        let itemsFound = false;

        if (sealData) {
            Object.keys(sealData).forEach(key => {
                const value = sealData[key];
                const translatedKey = translations[language][key] || key;

                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    // If it's a nested object like "Service Specs"
                    Object.keys(value).forEach(subKey => {
                        const subValue = value[subKey];
                        const translatedSubKey = translations[language][subKey] || subKey;

                        if (subValue) {
                            const itemDiv = document.createElement('div');
                            itemDiv.classList.add('dropdown-item');
                            itemDiv.textContent = `${translatedSubKey}: ${subValue}`;
                            specsDiv.appendChild(itemDiv);
                            itemsFound = true;
                        }
                    });
                } else if (value) {
                    // Normal key-value pairs
                    const itemDiv = document.createElement('div');
                    itemDiv.classList.add('dropdown-item');
                    itemDiv.textContent = `${translatedKey}: ${value}`;
                    specsDiv.appendChild(itemDiv);
                    itemsFound = true;
                }
            });
        }

        if (!itemsFound) {
            const noItemDiv = document.createElement('div');
            noItemDiv.classList.add('dropdown-item');
            noItemDiv.textContent = language === 'es' ? 'No hay información disponible' : 'No Information Available';
            specsDiv.appendChild(noItemDiv);
        }

        objectDiv.appendChild(specsDiv);
        detailsContainer.appendChild(objectDiv);
    }

    // Loop through sealsDetails and create sections for rudder_seals and shaft_seals
    data.sealsDetails.forEach(detail => {
        createSealSection(language === 'es' ? 'Sellos del Timón' : 'Rudder Seals', detail.rudder_seals);
        createSealSection(language === 'es' ? 'Sellos del Eje' : 'Shaft Seals', detail.shaft_seals);
    });
}
