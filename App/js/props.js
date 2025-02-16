export function propsPopulate(data) {
    const container = document.getElementById("props-container");

    if (!data || !data.propDetails) {
        console.error("Missing or incorrect prop details.");
        return;
    }

    const propDetails = data.propDetails;

    // Loop through the propDetails object and create an HTML list
    const list = document.createElement("ul");
    
    for (const [key, value] of Object.entries(propDetails)) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
        list.appendChild(listItem);
    }

    container.innerHTML = ""; // Clear previous content
    container.appendChild(list); // Append the new list of prop details
}
