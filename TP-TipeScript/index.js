fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (products) {
    console.log('Fetched JSON data:', products);
    var tableBody = document.querySelector('#tableBody');
    var tableHTML = '';
    products.forEach(function (product) {
        tableHTML += "\n                <tr>\n                    <td>".concat(product.id, "</td>\n                    <td>").concat(product.title, "</td>\n                    <td>").concat(product.description, "</td>\n                    <td>$").concat(product.price.toFixed(2), "</td>\n                </tr>\n            ");
    });
    tableBody.innerHTML = tableHTML;
    console.log('Generated HTML table:', tableBody.innerHTML);
    document.querySelector('#spinnerContainer').style.display = 'none';
    document.querySelector('#tableContainer').style.display = 'block';
});
