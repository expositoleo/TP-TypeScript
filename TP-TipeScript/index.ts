type Rating = {
    count: number;
    rate: number;
};

type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Rating;
    title: string;
};

fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((products: Product[]) => {
        console.log('Fetched JSON data:', products);

        const tableBody = document.querySelector('#tableBody') as HTMLTableSectionElement;
        let tableHTML = '';

        products.forEach((product) => {
            tableHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.description}</td>
                    <td>$${product.price.toFixed(2)}</td>
                </tr>
            `;
        });

        tableBody.innerHTML = tableHTML;

        (document.querySelector('#spinnerContainer') as HTMLElement).style.display = 'none';
        (document.querySelector('#tableContainer') as HTMLElement).style.display = 'block';
    });