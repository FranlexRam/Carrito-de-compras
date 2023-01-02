
//Variables iniciales
let shoppingCartArray = [];
let total = 0;
let productContainer = document.querySelector('.shop-items');
let totalElement = document.querySelector('.cart-total-title');

//Peticion de productos al servidor
let res = await fetch('https://fakestoreapi.com/products/');
let data = await res.json();

//Limitamos a 4 productos en la API
let productsArray = data.slice(1,7);
// console.log(productsArray);

//Imprimir productos en pantalla
productsArray.forEach(product => {
    productContainer.innerHTML += `
    <div class="shop-item" id='${product.id}'>
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

//Funcion agregar al boton ADD TO CART
let addBtns = document.querySelectorAll('.shop-item-button');
addBtns = [...addBtns]; //addBtns es inicialmente una nodeList y se transforma a un arreglo usando [...addBtns] Esto se hace como buena practica ya que, si se quiere en un futuro usar algun metodo como slice, solo funciona en arreglos y no en nodeLists.
//Como buena practica, SIEMPRE transformar las nodeLists en arrays.

let cartContainer = document.querySelector('.cart-items');

addBtns.forEach(btn => {
    btn.addEventListener('click', event =>{
    // console.log('Hiciste click');


        //AGREGAR PRODUCTOS AL CARRITO

        
        //Buscar el ID del producto
        let actualID = parseInt(event.target.parentNode.parentNode.id);
        console.log(actualID);

        //Con el ID encontrar el objeto actual
        let actualProduct = productsArray.find(item => item.id == actualID);

        if (actualProduct.quantity === undefined) {
            actualProduct.quantity = 1;            
        }

        
        console.log(actualProduct.id);

        //preguntar si el producto que estoy agregando ya existe


        let existe = false;
        shoppingCartArray.forEach (libro => {
            if (actualID == libro.id) {
                existe = true;
            }
        });

        if (existe) {
            actualProduct.quantity++;
        } else {
            shoppingCartArray.push(actualProduct);            
        }
        
        
        console.log(shoppingCartArray);





        //Agregar el producto al arreglo del carro
        cartContainer.innerHTML = '';
        cartContainer.innerHTML += `
        <div class="cart-row">
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${actualProduct.image}" height="100">
                <span class="cart-item-title">${actualProduct.title}</span>
            </div>
            <span class="cart-price cart-column">$${actualProduct.price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" min="1" type="number" value="${actualProduct.quantity}">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>
        </div>`

        //Actualizar el valor del TOTAL
        getTotal();
    });
});

function getTotal(){
    let sumTotal
    let total = shoppingCartArray.reduce((sum, item) =>{
        sumTotal = sum + item.quantity * item.price;
        return sumTotal;
    } , 0)
    totalElement.innerText = `$${total}`
}


