
//Variables iniciales
let shoppingCartArray = [];
let total = 0;
let productContainer = document.querySelector('.shop-items')

//Peticion de productos al servidor
let res = await fetch('https://fakestoreapi.com/products/');
let data = await res.json();

//Limitamos a 4 productos en la API
let productsArray = data.slice(1,7);
console.log(productsArray);

//Imprimir productos en pantalla
productsArray.forEach(product => {
    productContainer.innerHTML += `
    <div class="shop-item">
        <span class="shop-item-title">
            ${
                product.title.length > 18
                    ? product.title.substr(0,18)+'...'
                    : product.title
            }
        </span>
        <img class="shop-item-image" src="${product.image}">
        <div class="shop-item-details">
            <span class="shop-item-price">$${product.price}</span>
            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
        </div>
    </div>`
});