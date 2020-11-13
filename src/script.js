'use strict';

const catalog = document.querySelector('.product-listing-wrapper');
const cartPopup = document.querySelector('.cart-popup');
const orderPopup = document.querySelector('.order-popup');
const orderTitle = orderPopup.querySelector('.order-popup__name');
const orderWrap = orderPopup.querySelector('.order-popup__wrapper');
const orderForm = orderPopup.querySelector('.order-popup__form');
const orderBtn = orderPopup.querySelector('.order-popup__button');
const closeOrder = orderPopup.querySelector('.order-popup__close');
const cartTitle = cartPopup.querySelector('.cart-popup__title');


function render() {
    API.products.forEach(({id, title, price, img}) => {
        let element = document.createElement('div');
        element.classList.add('card');
        element.setAttribute('data-id', id);
        element.innerHTML = `
            <div class="card__img"><img src=${img} alt=${title} width="200px" height="150px"></div>
            <div class="card__info-wrapper">
                <h3 class="card__name">${title}</h3>
                <p class="card__price">${formatPrice(price)} руб.</p>
            </div>
            <div class="card__button-wrapper">
                <button class="btn btn_pink card__order">Заказать</button>
                <button class="btn card__in-cart">В корзину</button>
            </div>
        `;
        catalog.append(element);
    });
}

function renderCart(title, price, img) {
    let element = document.createElement('div');
    element.classList.add('cart-popup__product');
    element.innerHTML = `
        <span class="cart-popup__remove" tabindex="0"></span>
        <img src=${img} alt=${title} width="150px" height="90px">
        <div class="cart-popup__info">
            <h3 class="cart-popup__name">${formatTitle(title)}</h3>
            <p class="cart-popup__price">${formatPrice(price)} руб.</p>
        </div>
    `;
    cartPopup.append(element);
}

function renderOrder(title, price, img) {
    orderTitle.textContent = `${title}`;
    let element = document.createElement('div');
    element.classList.add('order-popup__info-wrapper');
    element.innerHTML = `
        <img src=${img} alt="${title}" width="150px" height="90px">
        <p class="order-popup__price"><b>${formatPrice(price)} руб.</b></p>
    `;
    orderWrap.prepend(element);
}

function activationButtons() {
    const buttonsOrder = catalog.querySelectorAll('.card__order');
    const buttonsCart = catalog.querySelectorAll('.card__in-cart');

    buttonsOrder.forEach(button => {
        button.addEventListener('click', () => {
            openPopup(orderPopup);
            searchButtonId(button, renderOrder);
            if (cartPopup.classList.contains('visible')) {
                closePopup(cartPopup);
            }
        });
    });

    buttonsCart.forEach(button => {
        button.addEventListener('click', () => {
            openPopup(cartPopup);
            searchButtonId(button, renderCart);
        });
    });
}

function searchButtonId(button, f) {
    const cardId = Number(button.closest('.card').dataset.id);
    const { title, price, img } = API.products.find(item => item.id === cardId);
    f(title, price, img);
}

function openPopup(popup) {
    popup.classList.add('visible');
}

function closePopup(popup) {
    popup.classList.remove('visible');
}

function cleanOrder() {
    let orderInfo = orderWrap.querySelector('.order-popup__info-wrapper');
    closePopup(orderPopup);
    orderForm.reset();
    orderInfo.remove();
}

function cleanCart(evt) {
    const target = evt.target;
    if (target.classList.contains('cart-popup__remove')) {
        target.parentNode.remove();
    }
}

function closePopups() {
    closeOrder.addEventListener('click', () => {
        cleanOrder();
    });

    closeOrder.addEventListener('keydown', (evt) => {
        if (evt.code === 'Enter') {
            cleanOrder();
        }
    });

    orderPopup.addEventListener('click', (evt) => {
        if (evt.target.closest('.order-popup__container')) {
            return;
        } else {
            cleanOrder();
        }
    });

    orderBtn.addEventListener('click', () => {
        orderForm.reset();
    });

    orderBtn.addEventListener('keydown', (evt) => {
        if (evt.code === 'Enter') {
            orderForm.reset();
        }
    });

    cartTitle.addEventListener('click', () => {
        closePopup(cartPopup);
    });

    cartPopup.addEventListener('click', (evt) => {
        cleanCart(evt);
    });
    
    cartPopup.addEventListener('keydown', (evt) => {
        if (evt.code === 'Enter') {
            cleanCart(evt);
        }
    });
}

function formatPrice(num) {
    return num.toLocaleString('ru-RU');
}

function formatTitle(title) {
    title = title.substring(0, 30);
    title += '...';
    return title;
}

render();
closePopups();
activationButtons();