document.addEventListener('DOMContentLoaded', function(){
    loadProducts();
    addCloseClick();

    const popupBuy = document.getElementById("popupBuy");
    const popupCart = document.getElementById("popupCart");
    const cover= document.getElementById("cover");
    cover.addEventListener('click', hiddenPopup);
});

function loadProducts() {
    const fragment = document.createDocumentFragment();

    API.products.forEach( (item) => {
        const product = document.createElement('div');
        product.className = 'product';
        product.innerHTML = inputProductTemplate(item);
        fragment.appendChild(product);
    });

    const buyButtons = fragment.querySelectorAll('.buyButton');
    [].forEach.call(buyButtons, (button) => {
        button.addEventListener('click', (event) => {
            clickOnBuy(event);
        })
    });

    const inCartButtons = fragment.querySelectorAll('.inCartButton');
    [].forEach.call(inCartButtons, (button) => {
        button.addEventListener('click', (event) => {
            clickOnCart(event);
        })
    });
    
    document.getElementById("productList").appendChild(fragment);
}


function clickOnBuy(event) {
    const div = createElement('container');
    const item = API.products.find( (element) => element.id === +event.target.id );
    div.innerHTML = inputBuyTemplate(item);
    popupBuy.innerHTML = '';
    popupBuy.appendChild(div);
    popupBuy.hidden = false;
    cover.hidden = false;
    addCloseClick();
}

function clickOnCart(event) {
    const div = createElement('cart');
    const item = API.products.find( (element) => element.id === +event.target.id );
    div.innerHTML = inputCartTemplate(item);
    popupCart.innerHTML = '';
    popupCart.appendChild(div);
    popupCart.hidden = false;
    cover.hidden = false;
    addCloseClick();
}

function addCloseClick() {
    const closeClick = document.querySelectorAll(".closeClick");
    [].forEach.call(closeClick, (button) => {
        button.addEventListener('click', hiddenPopup) });
}

function hiddenPopup() {
    popupCart.hidden = true;
    popupBuy.hidden = true;
    cover.hidden = true;
}

function createElement(str) {
    const div = document.createElement('div');
    div.className = str;
    return div;
}


