// JavaScript code for shopping cart functionality
const addToCartButton = document.getElementById('add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const viewCartButton = document.getElementById('view-cart');
const cartTotal = document.getElementById('cart-total');

let cart = [];

addToCartButton.addEventListener('click', () => {
    // Add product to the cart
    cart.push({ name: "Product Name", price: 99.99 });
    
    // Update the cart display
    renderCart();
});

viewCartButton.addEventListener('click', () => {
    // Show the cart and its contents
    // You can implement a modal or a separate page for the cart.
});

function renderCart() {
    // Clear previous items
    cartItemsList.innerHTML = '';
    
    // Calculate and display the total price
    let total = 0;
    
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
        total += item.price;
    });
    
    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}
