// fetch('https://api.escuelajs.co/api/v1/products')
// .then(res => res.json())
// .then(data => console.log(data));

//Variables iniciales
let shoppingCartArray = [];
let total = 0;
let productContainer = document.querySelector('.shop-items');

//Peticion de productos al servidor
let res = await fetch('https://api.escuelajs.co/api/v1/products');
let data = await res.json();

//Limitacion de 4 productos de la API
let productsArray = data.slice(1,5);
console.log(productsArray);

//Imprimir productos en pantalla
productsArray.forEach(product => {
    productContainer.innerHTML += `
    <div class="shop-item">
        <span class="shop-item-title">T-Shirt</span>
        <img class="shop-item-image" src="./Images/shirt.jpg">
        <div class="shop-item-details">
            <span class="shop-item-price">$19.99</span>
            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
        </div>
    </div>

    <div class="shop-item">
        <span class="shop-item-title">Coffee Cup</span>
        <img class="shop-item-image" src="./Images/coffee.jpg">
        <div class="shop-item-details">
            <span class="shop-item-price">$6.99</span>
            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
        </div>
    </div>
    ` 
});