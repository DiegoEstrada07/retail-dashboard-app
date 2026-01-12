const params = new URLSearchParams(window.location.search);
const from = params.get("from");

const imagen = document.getElementById("imagen");
const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");
const boton = document.getElementById("boton");
const price = document.getElementById("price");

//new & seasonal
if (from === "pistachio-latte") {
    imagen.src = "../asset/main/new&seasonal.webp";
    texto1.textContent = "Chocolate Pistachio Latte";
    texto2.textContent = "$4.49 • 310 Cals";
    boton.textContent = "Add — $4.49";
} else if (from === "chocolate-pistachio") {
    imagen.src = "../asset/products/season/pistachio-cappuccino.webp";
    texto1.textContent = "Chocolate Pistachio Cappuccino";
    texto2.textContent = "$4.29 • 200 Cals";
    boton.textContent = "Add — $4.29";
} else if (from === "pistachio-capp") {
    imagen.src = "../asset/products/season/pistachio-capp.webp";
    texto1.textContent = "Chocolate Pistachio Iced Capp";
    texto2.textContent = "$4.69 • 520 Cals";
    boton.textContent = "Add — $4.69";
} else if (from === "pistachio-latte1") {
    imagen.src = "../asset/products/season/pistachio-latte.webp";
    texto1.textContent = "Chocolate Pistachio Protein Iced Latte";
    texto2.textContent = "$5.19 • 230 Cals";
    boton.textContent = "Add — $5.19";
} else if (from === "pistachio-capp") {
    imagen.src = "../asset/products/season/pistachio-capp.webp";
    texto1.textContent = "Chocolate Pistachio Iced Capp";
    texto2.textContent = "$4.69 • 520 Cals";
    boton.textContent = "Add — $4.69";
} 
//hot drinks
else if (from === "brewed-coffee") {
    imagen.src = "../asset/products/hot-drinks/brewed-coffee.webp";
    texto1.textContent = "Brewed Coffee";
    texto2.textContent = "$1.92 • 4 Cals";
    boton.textContent = "Add — $1.92";
} else if (from === "espresso-drink") {
    imagen.src = "../asset/products/hot-drinks/espresso-drink.webp";
    texto1.textContent = "Espresso";
    texto2.textContent = "$1.79 • 3 Cals";
    boton.textContent = "Add — $1.79";
} else if (from === "tea") {
    imagen.src = "../asset/products/hot-drinks/tea.webp";
    texto1.textContent = "Steeped Tea";
    texto2.textContent = "$2.19 • 0 Cals";
    boton.textContent = "Add — $2.19";
} else if (from === "hot-chocolate") {
    imagen.src = "../asset/products/hot-drinks/hot-chocolate.webp";
    texto1.textContent = "Hot Cocolate";
    texto2.textContent = "$2.89 • 280 Cals";
    boton.textContent = "Add — $2.89";
}
//cold-drinks
else if (from === "iced-coffee") {
    imagen.src = "../asset/products/cold-drinks/iced-coffee.webp";
    texto1.textContent = "Original Iced Coffee";
    texto2.textContent = "$2.79 • 150 Cals";
    boton.textContent = "Add — $2.79";
} else if (from === "iced-capp") {
    imagen.src = "../asset/products/cold-drinks/iced-capp.webp";
    texto1.textContent = "Oreo® Mocha Iced Capp";
    texto2.textContent = "$4.69 • 550 Cals";
    boton.textContent = "Add — $4.69";
} else if (from === "cold-brew") {
    imagen.src = "../asset/products/cold-drinks/cold-brew.webp";
    texto1.textContent = "Black Cold Brew";
    texto2.textContent = "$2.99 • 0 Cals";
    boton.textContent = "Add — $2.99";
} else if (from === "iced-latte") {
    imagen.src = "../asset/products/cold-drinks/iced-latte.webp";
    texto1.textContent = "Original Iced Latte";
    texto2.textContent = "$3.79 • 200 Cals";
    boton.textContent = "Add — $3.79";
}
//lunch & dinner
else if (from === "hashbrown") {
    imagen.src = "../asset/products/lunch-dinner/hashbrown.webp";
    texto1.textContent = "Hashbrown";
    texto2.textContent = "$2.19 • 120 Cals";
    boton.textContent = "Add — $2.19";
} else if (from === "garlic-bread") {
    imagen.src = "../asset/products/lunch-dinner/garlic-bread.webp";
    texto1.textContent = "Garlic Bread";
    texto2.textContent = "$3.49 • 380 Cals";
    boton.textContent = "Add — $3.49";
} else if (from === "omelette-bites") {
    imagen.src = "../asset/products/lunch-dinner/omelette-bites.webp";
    texto1.textContent = "Omelette Bites";
    texto2.textContent = "$3.99";
    boton.textContent = "Add — $3.99";
} else if (from === "salt-wedges") {
    imagen.src = "../asset/products/lunch-dinner/salt-wedges.webp";
    texto1.textContent = "Sea Salt Wedges";
    texto2.textContent = "$2.99 • 170 Cals";
    boton.textContent = "Add — $2.99";
} else {
    imagen.src = "../asset/main/new&seasonal.webp";
    texto1.textContent = "Entrada desconocida";
    texto2.textContent = "No se detectó el enlace";
    boton.textContent = "Volver";
}