export function zincsPopulate(data) {

  const container = document.getElementById("html-container");
  container.innerHTML = "";

  const title = document.createElement("h1");
  title.className = "text-2xl font-semibold mb-4";
  title.textContent = data.title || "Zinc Collection Task";
  container.appendChild(title);

  if (data.description) {
    const desc = document.createElement("p");
    desc.className = "mb-4 text-gray-700";
    desc.textContent = data.description;
    container.appendChild(desc);
  }

  data.locations.forEach((loc) => {
    const section = document.createElement("div");
    section.className = "mb-6 p-4 border rounded-xl bg-gray-50";

    const header = document.createElement("h2");
    header.className = "text-xl font-medium mb-2";
    header.textContent = loc.name;
    section.appendChild(header);

    const toggle = document.createElement("button");
    toggle.className = "w-full flex justify-between items-center p-3 bg-white rounded-lg shadow";
    toggle.innerHTML = `<span>${loc.name} Zincs</span><span>+</span>`;

    const details = document.createElement("div");
    details.className = "hidden mt-3 space-y-4";

    toggle.addEventListener("click", () => {
      const isHidden = details.classList.contains("hidden");
      details.classList.toggle("hidden");
      toggle.querySelector("span:last-child").textContent = isHidden ? "−" : "+";
    });

    section.appendChild(toggle);
    section.appendChild(details);

    loc.zincs.forEach((zinc) => {
      const zincBox = document.createElement("div");
      zincBox.className = "p-4 bg-white rounded-xl shadow space-y-3";

      const header = document.createElement("div");
      header.className = "flex justify-between";
      header.innerHTML = `
        <div>
          <div class="font-semibold">${zinc.type}</div>
          <div class="text-sm text-gray-600">Size: ${zinc.size}</div>
          <div class="text-sm text-gray-600">Material: ${zinc.material}</div>
          <div class="text-sm text-gray-600">Qty: ${zinc.quantity}</div>
        </div>
        <div class="text-right text-sm text-gray-500">${zinc.partNumber || ""}</div>
      `;

      zincBox.appendChild(header);

      // Placement
      if (zinc.placement) {
        const placement = document.createElement("div");
        placement.className = "text-sm text-gray-700";
        placement.textContent = `Placement: ${zinc.placement}`;
        zincBox.appendChild(placement);
      }

      // Photo before
      if (zinc.photoBefore) {
        const imgBefore = document.createElement("img");
        imgBefore.src = zinc.photoBefore;
        imgBefore.className = "w-full rounded-lg";
        zincBox.appendChild(imgBefore);
      }

      // Mechanic Notes
      const notesBox = document.createElement("textarea");
      notesBox.placeholder = "Mechanic notes...";
      notesBox.className = "w-full p-2 border rounded-lg bg-gray-100";
      notesBox.value = zinc.mechanicNotes || "";
      zincBox.appendChild(notesBox);

      // Buttons
      const buttonRow = document.createElement("div");
      buttonRow.className = "flex gap-2";
      buttonRow.innerHTML = `
        <button class="flex-1 p-2 bg-green-600 text-white rounded-lg">Removed</button>
        <button class="flex-1 p-2 bg-yellow-500 text-white rounded-lg">Needs Replacement</button>
        <button class="flex-1 p-2 bg-blue-600 text-white rounded-lg">Reinstall</button>
      `;

      zincBox.appendChild(buttonRow);
      details.appendChild(zincBox);
    });

    container.appendChild(section);
  });
}