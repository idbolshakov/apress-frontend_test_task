const makeElement = function (tagName, className, text) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};
const createCard = function (product) {
    const productCard = makeElement('div', 'product-card');
    const imgContainer = makeElement('div', 'img-container');
    productCard.appendChild(imgContainer);
    const picture = makeElement('img', 'product-image');
    picture.src = product.img;
    picture.alt = product.title;
    imgContainer.appendChild(picture);
    const textContainer = makeElement('div', 'text-container', product.title);
    productCard.appendChild(textContainer);
    const productCost = makeElement('div', 'product-cost', ('From number:', product.price.toLocaleString('ru-RU')) + ' руб.');
    textContainer.appendChild(productCost);
    const buttonContainer = makeElement('div', 'button-container');
    productCard.appendChild(buttonContainer);
    const buttonToOrder = makeElement('button', 'button-order', 'Заказать');
    buttonContainer.appendChild(buttonToOrder);
    buttonToOrder.onclick = () => {
        document.querySelector('.popup-price').innerHTML = ('From number:', product.price.toLocaleString('ru-RU')) + ' руб.';
        document.querySelector('.popup-title').innerHTML = product.title;
        document.querySelector('.popup-image').src = product.img;
        document.querySelector('.b-popup').style.display = 'inline';
        document.querySelector('.a-popup').style.display = 'none';
        document.querySelector('.header-basket').style.display = "none";
        document.querySelector('.popup-comment-input').value = '';
        document.querySelector('.popup-input-tel').value = '';
    };
    const buttonToBasket = makeElement('button', 'button-basket', 'В корзину');
    buttonContainer.appendChild(buttonToBasket);
    buttonToBasket.onclick = () => {
        document.querySelector('.a-popup-price').innerHTML = ('From number:', product.price.toLocaleString('ru-RU')) + ' руб.';
        document.querySelector('.a-popup-title').innerHTML = product.title;
        document.querySelector('.a-popup-image').src = product.img;
        document.querySelector('.a-popup').style.display = 'inline';
        document.querySelector('.header-basket').style.display = 'inline';
    };
    return productCard
}
let cardList = document.querySelector('.product-listing-wrapper');
for (i = 0; i < API.products.length; i++) {
    let product = createCard(API.products[i]);
    cardList.appendChild(product);
}
