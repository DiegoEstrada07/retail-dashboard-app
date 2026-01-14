async function fetchData() {
const response = await fetch('http://localhost:3000/api/data');
const data = await response.json();
createChart(data);
}

function createChart(data) {
    const labels = data.map(item => item.label);
    const values = data.map(item => item.value);
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Stock Data',
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
    fetchData();

//cart
 function addToCart(image, name, price) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            // Check if the product already exists in the cart
            let existingProduct = cart.find(item => item.name === name);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({
                    image: image,
                    name: name,
                    price: price,
                    quantity: 1
                });
            }

            // Save the cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(name + " has been added to your cart");
}
 function displayCart() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let cartDiv = document.getElementById('cart');
            let total = 0;

            // If the cart is empty
            if (cart.length === 0) {
                cartDiv.innerHTML = "<p>Your cart is empty</p>";
            } else {
                cartDiv.innerHTML = ''; // Clear previous content
                cart.forEach(item => {
                    let itemDiv = document.createElement('div');
                    itemDiv.classList.add('cart-item');
                    
                    itemDiv.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <p>${item.name}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Price: $${item.price}</p>
                        <p>Total: $${item.price * item.quantity}</p>
                    `;
                    
                    cartDiv.appendChild(itemDiv);

                    total += item.price * item.quantity;
                });

                // Display the total
                document.getElementById('total').textContent = "Total: $" + total;
            }
        }

        // Call the function to display the cart when the page loads
        window.onload = displayCart;

        // Function to display the cart
        function displayCart() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let cartDiv = document.getElementById('cart');
            let total = 0;

            // If the cart is empty
            if (cart.length === 0) {
                cartDiv.innerHTML = "<p>Your cart is empty</p>";
            } else {
                cartDiv.innerHTML = ''; // Clear previous content
                cart.forEach((item, index) => {
                    let itemDiv = document.createElement('div');
                    itemDiv.classList.add('cart-item');
                    
                    itemDiv.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <p>${item.name}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Price: $${item.price}</p>
                        <p>Total: $${item.price * item.quantity}</p>
                        <button class="btn-remove" onclick="removeFromCart(${index})">Remove</button>
                    `;
                    
                    cartDiv.appendChild(itemDiv);

                    total += item.price * item.quantity;
                });

                // Display the total
                document.getElementById('total').textContent = "Total: $" + total;
            }
        }

        // Function to remove a product from the cart
        function removeFromCart(index) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            // Remove the product from the cart by its index
            cart.splice(index, 1);
            
            // Save the updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Refresh the cart display
            displayCart();
        }

        // Call the function to display the cart when the page loads
        window.onload = displayCart;