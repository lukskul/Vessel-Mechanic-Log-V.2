// Populates a dropdown with seal data
function populateDropdown(sealData, dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (!dropdown) return;

    const option = document.createElement('option');
    option.value = sealData.model_number;
    option.textContent = `${sealData.manufacturer} - ${sealData.model_number}`;
    dropdown.appendChild(option);
}
