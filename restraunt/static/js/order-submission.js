// Menu items object with their names and prices
const menuItems = {
    chowMein: { name: 'Chow-Mein', price: 250 },
    chineseStirFriedRice: { name: 'Chinese Stir Fried Rice', price: 300 },
    biriyani: { name: 'Biriyani', price: 650 },
    // Add more menu items here if needed
  };
  
  // Function to show total amount and quantities on order-submission.html
  function showOrderSummary() {
    // Retrieve total amount and quantities from local storage
    const totalAmount = localStorage.getItem('totalAmount');
    const quantities = JSON.parse(localStorage.getItem('quantities'));
  
    // Display total amount on order-submission.html
    const totalAmountElement = document.getElementById('totalAmount');
    totalAmountElement.textContent = `${totalAmount || 0} Rs`;
  
    const orderTableBody = document.getElementById('order-table-body');
    orderTableBody.innerHTML = ''; // Clear previous items
  
    for (const itemName in menuItems) {
      const itemQuantity = quantities?.[itemName] || 0; // Handle null case
      const itemPrice = menuItems[itemName].price;
      const totalItemPrice = itemPrice * itemQuantity;
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${menuItems[itemName].name}</td>
        <td>${itemQuantity}</td>
        <td>${itemPrice} Rs</td>
        <td>${totalItemPrice} Rs</td>
      `;
      orderTableBody.appendChild(row);
    }
  }
  
  // Call the showOrderSummary function when the order-submission.html page loads
  window.addEventListener('DOMContentLoaded', showOrderSummary);
  

  // Function to submit personal details to the server
function submitPersonalDetails() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;

  // Create the data object to send to the server
  const data = { name, email, phone, address };

  // Make a POST request to the server to submit personal details
  fetch('http://localhost:4000/personal/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Personal details submitted successfully!');
      } else {
        alert('Error submitting personal details. Please try again later.');
      }
    })
    .catch((error) => {
      console.error('Error submitting personal details:', error);
      alert('Error submitting personal details. Please try again later.');
    });
}
