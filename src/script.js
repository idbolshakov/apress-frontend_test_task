document.addEventListener('DOMContentLoaded', function(){
    loadProducts();
});

function loadProducts() {
    API.products.forEach( (item) => {
        const div = createElement('product');
        div.innerHTML = inputProductTemplate(item);
        getElement("productList").appendChild(div);
    })
}

function clickOnBuy(id) {
    const popup = getElement("popupBuy");
    const div = createElement('container');
    const item = API.products.find( (element) => element.id === id );
    div.innerHTML = inputBuyTemplate(item);
    popup.innerHTML = '';
    popup.appendChild(div);
    popup.hidden = false;
    getElement("cover").hidden = false;
}

function clickOnCart(id) {
    const popup = getElement("popupCart");
    const div = createElement('cart');
    const item = API.products.find( (element) => element.id === id );
    div.innerHTML = inputCartTemplate(item);
    popup.innerHTML = '';
    popup.appendChild(div);
    popup.hidden = false;
    getElement("cover").hidden = false;
}

function hiddenPopup() {
    getElement("popupCart").hidden = true;
    getElement("popupBuy").hidden = true;
    getElement("cover").hidden = true;
}

function getElement(str) {
    return document.getElementById(str);
}

function createElement(str) {
    const div = document.createElement('div');
    div.className = str;
    return div;
}

function log(str) {
    console.log(str);
}

