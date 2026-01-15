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

            //localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(name + " has been added to your cart");
}
 function displayCart() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let cartDiv = document.getElementById('cart');
            let total = 0;

            if (cart.length === 0) {
                cartDiv.innerHTML = "<p>Your cart is empty</p>";
            } else {
                cartDiv.innerHTML = '';
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


//changin pages
const params = new URLSearchParams(window.location.search);
const from = params.get("from");

const imagen = document.getElementById("imagen");
const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");
const boton = document.getElementById("boton");
const price = document.getElementById("price");

if (from === "g-tshirt") {
    imagen.src = "../asset/products/cloths/green-tshirt.png";
    texto1.textContent = "Athletic Works Men's Slim Fit T-Shirt";
    texto2.textContent = "$10.00";
} else if (from === "g-shorts") {
    imagen.src = "../asset/products/cloths/green-shorts.png";
    texto1.textContent = "Athletic Works Men's Mesh Short";
    texto2.textContent = "$10.00";
} 
else if (from === "b-tshirt") {
    imagen.src = "../asset/products/cloths/blue-tshirt.png";
    texto1.textContent = "Athletic Works Women's T-Shirt";
    texto2.textContent = "$14.00";
} else if (from === "nest") {
    imagen.src = "../asset/products/electronics/google-nest.png";
    texto1.textContent = "Google Nest Battery Doorbell";
    texto2.textContent = "$196.38";
} else if (from === "samgung") {
    imagen.src = "../asset/products/electronics/samsung-frame.png";
    texto1.textContent = "Samsung The Frame 85 QLED 4K TV";
    texto2.textContent = "$4,798.00";
} else if (from === "apple") {
    imagen.src = "../asset/products/electronics/apple-watch.png";
    texto1.textContent = "Apple Watch Series 11 GPS 42mm Rose Gold Aluminium Case";
    texto2.textContent = "$549.00";
} else if (from === "g-pillow") {
    imagen.src = "../asset/products/home/grey-pillow.png";
    texto1.textContent = "Bouclair Sage Taha Decorative Pillow 19x19 in (48x48 cm)";
    texto2.textContent = "$9.99";
} else if (from === "towel") {
    imagen.src = "../asset/products/home/bath-towels.png";
    texto1.textContent = "Canadian Linen Hotel White Bath Towels Set 27 x54  inches 700 GSM Soft Absorbent Quick Dry Ring Spun Cotton Bath Towels for Bathroom Motel Gym Spa Shower Salon& Spa, Pool";
    texto2.textContent = "$49.97";
} else if (from === "linen-pillows") {
    imagen.src = "../asset/products/home/linen-pillows.png";
    texto1.textContent = "Canadian Linen Microfiber Pillow Cases, 20 x30 Queen, 2 pack, Soft Breathable Brushed Microfiber Pillow Cases Set of 2, Bedding Pillow Covers, White";
    texto2.textContent = "$18.39";
} else if (from === "lego") {
    imagen.src = "../asset/products/lunar-new-year/lego.png";
    texto1.textContent = "LEGO Spring Festival Galloping Horse Canvas Kids Building Toy - Year of the Horse Toy for Girls & Boys, Ages 10+ - Buildable Chinese New Year Decoration - Gift Idea for Birthdays & Families - 80119";
    texto2.textContent = "$139.86";
} else if (from === "jewerly") {
    imagen.src = "../asset/products/lunar-new-year/jewerly.png";
    texto1.textContent = "Silvertone July Ruby Red Birthstone Teardrop Necklace";
    texto2.textContent = "$29.99";
} else if (from === "horse") {
    imagen.src = "../asset/products/lunar-new-year/chinise-horse.png";
    texto1.textContent = "Chinese New Year Horse Design Honeycomb Paper Centerpiece, Color: Multi-Color, Size: 10 , 1 Count, Brand: Way To Celebrate , Decoration";
    texto2.textContent = "$2.98";
} else if (from === "ivory") {
    imagen.src = "../asset/products/personal-care/ivory.png";
    texto1.textContent = "Ivory Bar Soap Original Scent, 10 x 90 g Bars";
    texto2.textContent = "$6.73";
} else if (from === "irish") {
    imagen.src = "../asset/products/personal-care/irish-spring.png";
    texto1.textContent = "Irish Spring Original Clean Deodorant Bar Soap for Men, 104.7 g, 6 Pack, 6 Pack";
    texto2.textContent = "$6.78";
} else if (from === "nivea") {
    imagen.src = "../asset/products/personal-care/nivea-men.png";
    texto1.textContent = "NIVEA Men Cool Kick 24H Fresh Effect Shower Gel for Men | 3-in-1 Body, Face, and Hair Wash | Refreshing Menthol Shower Gel | Dermatologically tested, 500 mL";
    texto2.textContent = "$4.98";
}
else {
    imagen.src = "";
    texto1.textContent = "Unknow";
    texto2.textContent = "undetected";
}

//Ratings

let selectedRating = 0;
const stars = document.querySelectorAll("#stars span");
const statusText = document.getElementById("status");

stars.forEach(star => {
    star.addEventListener("click", () => {
        selectedRating = star.getAttribute("data-value");

        stars.forEach(s => s.classList.remove("active"));
        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add("active");
        }
    });
});

document.getElementById("submitRating").addEventListener("click", () => {
    const comment = document.getElementById("comment").value;

    if (selectedRating === 0) {
        statusText.textContent = "Please select a rating.";
        return;
    }

    const ratingData = {
        productId: "product_123",
        rating: Number(selectedRating),
        comment: comment,
        date: new Date().toISOString()
    };

    fetch("http://localhost:3000/api/ratings", {
        method: "POST",
        headers: {
            "Content-Type": "products/json"
        },
        body: JSON.stringify(ratingData)
    })
    .then(response => response.json())
    .then(data => {
        statusText.textContent = "Thank you for your rating!";
        console.log(data);
    })
    .catch(error => {
        statusText.textContent = "Error sending the rating.";
        console.error(error);
    });
});