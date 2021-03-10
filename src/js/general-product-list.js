"use strict"
const PRODUCT_ITEM_CLASS = '.product-list__item';
const productSection = document.querySelector('.products');

const onClickButtons = (evt) => {
    const target = evt.target;
    if (target.classList.contains('product-list__item-button--order')) {
        renderPopupOrder(getProductById(target, PRODUCT_ITEM_CLASS));
    } else if (target.classList.contains('product-list__item-button--basket')) {
        renderPopupBasket(getProductById(target ,PRODUCT_ITEM_CLASS));
    }
};

const renderProductList = () => {
    const list = document.createElement('ul');
    list.classList.add('product-list');
    API.products.forEach((element) => {
        const item = document.createElement('li');
        item.classList.add('product-list__item');
        item.id = element.id;
        item.innerHTML =
               `<img src=${element.img} alt="${element.title}" class="product-list__item-illustration" width="200" height="200">
                <div class="product-list__item-description">
                  <a href="#" class="product-list__item-description-title">${element.title}</a>
                  <span class="product-list__item-description-price">${getPrice(element.price)} руб.</span>
                </div>
                <div class="product-list__item-buttons">
                  <button class="product-list__item-button product-list__item-button--order" type="button">Заказать</button>
                  <button class="product-list__item-button product-list__item-button--basket" type="button">В корзину</button>
                </div>`;
        list.appendChild(item);
    });
    productSection.appendChild(list);
    list.addEventListener('click', onClickButtons);
};

renderProductList();
