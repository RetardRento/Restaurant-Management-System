// Menu items object with their names and prices
const menuItems = {
  chowMein: { name: 'Chow-Mein', price: 250 },
  chineseStirFriedRice: { name: 'Chinese Stir Fried Rice', price: 300 },
  biriyani: { name: 'Biriyani', price: 650 },
  // Add more menu items here if needed
};

// Function to toggle quantity input based on checkbox state
function toggleQuantity(itemName) {
  const checkbox = document.querySelector(`input[name="${itemName}"]`);
  const quantityInput = document.querySelector(`input[name="${itemName}Quantity"]`);
  quantityInput.disabled = !checkbox.checked;
  if (!checkbox.checked) {
    quantityInput.value = 0;
    calculateTotal();
  }
}

// Function to calculate the total amount
function calculateTotal() {
  let totalAmount = 0;

  for (const itemName in menuItems) {
    const itemPrice = menuItems[itemName].price;
    const itemQuantity = parseInt(document.querySelector(`input[name="${itemName}Quantity"]`).value);
    totalAmount += itemPrice * itemQuantity;
  }

  document.getElementById('totalAmount').textContent = `${totalAmount} Rs`;

  // Store total amount and quantities in local storage
  const quantities = {};
  for (const itemName in menuItems) {
    const itemQuantity = parseInt(document.querySelector(`input[name="${itemName}Quantity"]`).value);
    quantities[itemName] = itemQuantity;
  }
  localStorage.setItem('totalAmount', totalAmount);
  localStorage.setItem('quantities', JSON.stringify(quantities));
}

// Add event listeners to checkboxes and quantity inputs
document.querySelector('input[name="chowMein"]').onclick = function () {
  toggleQuantity('chowMein');
  calculateTotal();
};

document.querySelector('input[name="chineseStirFriedRice"]').onclick = function () {
  toggleQuantity('chineseStirFriedRice');
  calculateTotal();
};

document.querySelector('input[name="biriyani"]').onclick = function () {
  toggleQuantity('biriyani');
  calculateTotal();
};

document.querySelector('input[name="chowMeinQuantity"]').onchange = function () {
  calculateTotal();
};

document.querySelector('input[name="chineseStirFriedRiceQuantity"]').onchange = function () {
  calculateTotal();
};

document.querySelector('input[name="biriyaniQuantity"]').onchange = function () {
  calculateTotal();
};

// Function to submit the order to the server
function submitOrder() {
  const itemName = document.querySelector('input[name="itemName"]:checked').value;
  const quantity = parseInt(document.querySelector('input[name="quantity"]').value);

  // Create the data object to send to the server
  const data = { itemName, quantity };

  // Make a POST request to the server to submit the order
  fetch('http://localhost:4000/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Order submitted successfully!');
      } else {
        alert('Error submitting order. Please try again later.');
      }
    })
    .catch((error) => {
      console.error('Error submitting order:', error);
      alert('Error submitting order. Please try again later.');
    });
}
