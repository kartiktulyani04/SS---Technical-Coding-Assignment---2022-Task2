let productsData = [];

function importData() {
    const fileInput = document.getElementById('jsonFileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                productsData = JSON.parse(e.target.result);
                displayData();
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        };
        reader.readAsText(file);
    }
}

function displayData() {
    // Sort data by descending popularity
    productsData.sort((a, b) => b.Popularity - a.Popularity);

    // Get the fields to be displayed
    const selectedFields = getSelectedFields();

    // Create table header
    const tableHeader = `<tr>${selectedFields.map(field => `<th>${field}</th>`).join('')}</tr>`;

    // Create table rows
    const tableRows = productsData.map(product => {
        return `<tr>${selectedFields.map(field => `<td>${product[field]}</td>`).join('')}</tr>`;
    }).join('');

    // Display the table
    const productTable = document.getElementById('productTable');
    productTable.innerHTML = tableHeader + tableRows;
}

function getSelectedFields() {
    // Logic to get selected fields from UI goes here
    // You may use checkboxes, a multi-select dropdown, or any other UI element
    // to let the user choose the fields to be displayed.
    return ['Title', 'Price', 'Popularity'];
}
