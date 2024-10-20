// app.js

// Fetch data from JSON file and initialize
fetch('data.json')
    .then(response => response.json())
    .then(products => {
        displayProducts(products);
        handleCategoryFilter(products);
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to display products
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';  // Clear the product list before rendering

    products.forEach(product => {
        // Create product card
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <span>$${product.price}</span>
        `;

        productList.appendChild(productItem);
    });
}

// Function to handle category filtering
function handleCategoryFilter(products) {
    const categoryFilter = document.getElementById('category-filter');

    categoryFilter.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;

        if (selectedCategory === 'all') {
            displayProducts(products);  // Show all products if 'all' is selected
        } else {
            const filteredProducts = products.filter(product => product.category === selectedCategory);
            displayProducts(filteredProducts);
        }
    });
}
