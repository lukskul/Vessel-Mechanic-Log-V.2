export function infoPopulate(data) {
    const infoContainer = document.querySelector('.info-html');

    // Check language preference from local storage
    const lang = localStorage.getItem('language') || 'en';

    if (!data || !data.shipDetails) {
        console.error("Missing or incorrect ship details.");
        return;
    }

    // Clear previous content
    infoContainer.innerHTML = "";

    // Define translations for ship details
    const shipKeys = {
        "type": lang === "es" ? "Tipo" : "Type",
        "manufacturer": lang === "es" ? "Fabricante" : "Manufacturer",
        "imoNumber": lang === "es" ? "Número IMO" : "IMO Number",
        "mmsiNumber": lang === "es" ? "Número MMSI" : "MMSI Number",
        "callSign": lang === "es" ? "Señal de llamada" : "Call Sign",
        "flag": lang === "es" ? "Bandera" : "Flag",
        "yearBuilt": lang === "es" ? "Año de construcción" : "Year Built",
        "owner": lang === "es" ? "Propietario" : "Owner",
        "homePort": lang === "es" ? "Puerto base" : "Home Port",
        "length": lang === "es" ? "Eslora" : "Length",
        "beam": lang === "es" ? "Manga" : "Beam",
        "draft": lang === "es" ? "Calado" : "Draft",
        "grossTonnage": lang === "es" ? "Tonelaje bruto" : "Gross Tonnage",
        "deadweightTonnage": lang === "es" ? "Tonelaje de peso muerto" : "Deadweight Tonnage",
        "engineType": lang === "es" ? "Tipo de motor" : "Engine Type",
        "enginePower": lang === "es" ? "Potencia del motor" : "Engine Power",
        "maxSpeed": lang === "es" ? "Velocidad máxima" : "Max Speed"
    };

    // Create a section for ship details
    const shipSection = document.createElement("div");
    shipSection.classList.add("ship-details");

    Object.keys(shipKeys).forEach(key => {
        const detailDiv = document.createElement('div');
        detailDiv.classList.add('detail-row');
        detailDiv.innerHTML = `
            <div class="detail-key">${shipKeys[key]}:</div>
            <div class="detail-value">${data.shipDetails[key] || ''}</div>
        `;
        shipSection.appendChild(detailDiv);
    });

    infoContainer.appendChild(shipSection);
}

