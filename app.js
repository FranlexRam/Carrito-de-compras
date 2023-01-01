// fetch('https://api.escuelajs.co/api/v1/products')
// .then(res => res.json())
// .then(data => console.log(data));

//Variables iniciales
let shoppingCartArray = [];
let total = 0;
let productContainer = document.querySelector('.shop-items');

//Peticion de productos al servidor
let res = await fetch('https://fakestoreapi.com/products/1');
let data = await res.json();

console.log('https://fakestoreapi.com/products/1');

//Limitacion de 4 productos de la API
let productsArray = data.slice(1,1);
console.log(productsArray);

//Imprimir productos en pantalla
productsArray.forEach(product => {
    productContainer.innerHTML += `
    <div class="shop-item">
        <span class="shop-item-title">${product.title}</span>
        <img class="shop-item-image" src="${product.images}">
        <div class="shop-item-details">
            <span class="shop-item-price">$${product.price}</span>
            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
        </div>
    </div>` 
});

let addBtns = document.querySelectorAll('.shop-item-button');

// addBtns = [...addBtns]; //Convirtiendo el nodeList en un arreglo usando [...nombreNodeList]

// console.log(addBtns);