// Cart storage
const cart = [];
let total = 0;

// Add to Cart function
function addToCart(productName, price) {
    // Add item to cart array
    cart.push({ name: productName, price: parseFloat(price) });
    total += parseFloat(price);

    // Update cart count
    document.getElementById("cart-count").innerText = cart.length;

    // Update cart items
    const cartList = document.getElementById("cart-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = `${productName} - $${price}`;
    cartList.appendChild(listItem);

    // Update total
    document.getElementById("cart-total").innerText = `Total: $${total.toFixed(2)}`;
}

// Show/Hide Cart
document.getElementById("cart-link").addEventListener("click", () => {
    const cartItems = document.getElementById("cart-items");
    cartItems.style.display = cartItems.style.display === "none" ? "block" : "none";
});

// Add event listeners to all "Add to Cart" buttons
const buttons = document.querySelectorAll(".add-to-cart");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.getAttribute("data-product");
        const price = button.getAttribute("data-price");
        addToCart(productName, price);
    });
});
