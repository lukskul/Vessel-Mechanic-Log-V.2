export function zincsPopulate(data) {
    const container = document.getElementById("html-container");
    container.innerHTML = "";

    const lang = localStorage.getItem("language") || "en";

    // Title
    const title = document.createElement("h1");
    title.className = "text-2xl font-semibold mb-4";
    title.textContent = data.title || (lang === "es" ? "Zincs" : "Zincs");
    container.appendChild(title);

    // Description
    if (data.description) {
        const desc = document.createElement("p");
        desc.className = "mb-4 text-gray-700";
        desc.textContent = data.description;
        container.appendChild(desc);
    }

    // Loop Locations
    data.locations.forEach((loc, index) => {
        const section = document.createElement("div");
        section.classList.add("dropdown-section", `zinc-object-${index + 1}`, "mb-6");

        const dropdown = document.createElement("details");
        const summary = document.createElement("summary");

        summary.classList.add("drop-down-image-prop");
        summary.textContent = loc.name;
        dropdown.appendChild(summary);

        // Zincs List Container
        const contentWrapper = document.createElement("div");
        contentWrapper.classList.add("section-info", "mt-3");

        loc.zincs.forEach((zinc) => {
            const zincBox = document.createElement("div");
            zincBox.className = "p-4 bg-white rounded-xl shadow space-y-3 mb-4";

            // Header
            const header = document.createElement("div");
            header.className = "flex justify-between";
            header.innerHTML = `
                <div>
                    <div class="font-semibold">${zinc.type}</div>
                    <div class="text-sm text-gray-600">${lang === "es" ? "Tamaño" : "Size"}: ${zinc.size}</div>
                    <div class="text-sm text-gray-600">${lang === "es" ? "Material" : "Material"}: ${zinc.material}</div>
                    <div class="text-sm text-gray-600">${lang === "es" ? "Cantidad" : "Qty"}: ${zinc.quantity}</div>
                </div>
                <div class="text-right text-sm text-gray-500">${zinc.partNumber ?? ""}</div>
            `;
            zincBox.appendChild(header);

            // Placement
            if (zinc.placement) {
                const placement = document.createElement("div");
                placement.className = "text-sm text-gray-700";
                placement.textContent =
                    (lang === "es" ? "Ubicación: " : "Placement: ") + zinc.placement;
                zincBox.appendChild(placement);
            }

            // Photo Before
            if (zinc.photoBefore) {
                const imgBefore = document.createElement("img");
                imgBefore.src = zinc.photoBefore;
                imgBefore.className = "w-full rounded-lg";
                zincBox.appendChild(imgBefore);
            }

            // Notes
            const notesBox = document.createElement("textarea");
            notesBox.placeholder = lang === "es" ? "Notas del mecánico..." : "Mechanic notes...";
            notesBox.className = "w-full p-2 border rounded-lg bg-gray-100";
            notesBox.value = zinc.mechanicNotes || "";
            zincBox.appendChild(notesBox);

            contentWrapper.appendChild(zincBox);
        });

        dropdown.appendChild(contentWrapper);
        section.appendChild(dropdown);
        container.appendChild(section);
    });
}
