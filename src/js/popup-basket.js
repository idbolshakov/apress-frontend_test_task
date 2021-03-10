"use strict"
const PRODUCT_IN_BASKET_CLASS = '.product-basket-popup__item';
let orders = [];
let section = document.querySelector('.product-basket-popup');

const renderPopupBasket = (order) => {
    if (!section) {
        section = document.createElement('section');
        section.classList.add('product-basket-popup');
        section.innerHTML =
            `<h2 class="visually-hidden">Корзина</h2>
             <h3 class="product-basket-popup__title">Вы добавили в корзину:</h3>
             <ul class="product-basket-popup__list"></ul>
             <a href="#" class="product-basket-popup__link">Перейти в корзину</a>`;
        mainBlockHtml.appendChild(section);
        section.addEventListener('click', (evt) => {
            const target = evt.target;
            if (target.classList.contains('product-basket-popup__item-button')) {
                orders = orders.filter(element => element !== getProductById(target, PRODUCT_IN_BASKET_CLASS));
                target.closest(PRODUCT_IN_BASKET_CLASS).remove();
            }
            if (list.children.length === 0) {
                section.remove();
                section = '';
            }
        });
    }
    const list = section.querySelector('.product-basket-popup__list');
    if (list.children.length > 0 ) {
        list.innerHTML = '';
    }
    orders.push(order);
    orders.forEach((element) => {
        const item = document.createElement('li');
        item.classList.add('product-basket-popup__item');
        item.id = element.id;
        item.innerHTML =
            `<img src="${element.img}" alt="${element.title}" class="product-basket-popup__item-illustration" width="150" height="100%">
             <div class="product-basket-popup__item-description">
                <p class="product-basket-popup__item-name">${element.title}</p>
                <span class="product-basket-popup__item-price">${getPrice(element.price)} руб.</span>
             </div>
             <button class="product-basket-popup__item-button" type="button" aria-label="Удалить товар из корзины"></button>`;
        list.appendChild(item);
    });
};
