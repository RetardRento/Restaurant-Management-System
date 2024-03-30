// cart.js

// Define an empty array to store cart items
let cartItems = [];

// Define an array of menu items with pre-defined id, name, and price
const menuItems = [
  { id: "1", name: "Chow-Mein", price: 250 },
  { id: "2", name: "Chinese Stir Fried rice", price: 300 },
  { id: "3", name: "Margarita", price: 699 },
  { id: "4", name: "Biriyani", price: 650 },
  // Add more menu items here
];

// Function to add items to the cart
function addToCart(itemId) {
  const selectedItem = menuItems.find(item => item.id === itemId);

  if (selectedItem) {
    const existingItem = cartItems.find(item => item.id === itemId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({
        id: selectedItem.id,
        name: selectedItem.name,
        price: selectedItem.price,
        quantity: 1,
      });
    }

    // Update the cart display in the cart.html page
    updateCartDisplay();
  }
}

// Function to update the cart display in the cart.html page
function updateCartDisplay() {
  // Get the cart container element from the cart.html page
  const cartContainer = document.querySelector(".cart-items");

  // Clear the cart container before updating it
  cartContainer.innerHTML = "";

  // Loop through each item in the cartItems array
  cartItems.forEach(item => {
    // Create a new element for the item and display its details
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `${item.name} - Rs ${item.price} x ${item.quantity}`;
    cartContainer.appendChild(itemElement);
  });
}

// Add event listeners to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
addToCartButtons.forEach(button => {
  button.addEventListener("click", function () {
    const itemId = this.getAttribute("data-item-id");
    addToCart(itemId);
  });
});
