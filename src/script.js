'use strict';

const catalog = document.querySelector('.product-listing-wrapper'),
    cartPopup = document.querySelector('.cart-popup'),
    orderPopup = document.querySelector('.order-popup'),
    orderTitle = orderPopup.querySelector('.order-popup__name'),
    orderWrap = orderPopup.querySelector('.order-popup__wrapper'),
    orderForm = orderPopup.querySelector('.order-popup__form'),
    orderBtn = orderPopup.querySelector('.order-popup__button'),
    closeOrder = orderPopup.querySelector('.order-popup__close'),
    cartTitle = cartPopup.querySelector('.cart-popup__title');


function render() {
    API.products.forEach(getElement);
}
  
function getElement({id, title, price, img}) {
  const element = document.createElement('div');

  element.classList.add('card');
  element.setAttribute('data-id', id);
  element.innerHTML = getMarkup(title, price, img);

  catalog.append(element);
}

function getMarkup(title, price, img) {
  return (
    `<div class="card__img"><img src=${img} alt=${title} width="200px" height="150px"></div>
      <div class="card__info-wrapper">
          <h3 class="card__name">${title}</h3>
          <p class="card__price">${formatPrice(price)} руб.</p>
      </div>
      <div class="card__button-wrapper">
          <button class="btn btn_pink card__order">Заказать</button>
          <button class="btn card__in-cart">В корзину</button>
      </div>`
  );
}

function renderCart(title, price, img) {
    const element = document.createElement('div');
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
    const element = document.createElement('div');
    element.classList.add('order-popup__info-wrapper');
    element.innerHTML = `
        <img src=${img} alt="${title}" width="150px" height="90px">
        <p class="order-popup__price"><b>${formatPrice(price)} руб.</b></p>
    `;
    orderWrap.prepend(element);
}

function activationButtons() {
    const buttonsOrder = catalog.querySelectorAll('.card__order'),
        buttonsCart = catalog.querySelectorAll('.card__in-cart');

    function listenerButtons(btnArr, popup, renderPopup) {
        btnArr.forEach(button => {
            button.addEventListener('click', () => {
                openPopup(popup);
                searchButtonId(button, renderPopup);
                if (btnArr === buttonsOrder) {
                    if (cartPopup.classList.contains('visible')) {
                        closePopup(cartPopup);
                    }
                }
            });
        });
    }

    listenerButtons(buttonsOrder, orderPopup, renderOrder);
    listenerButtons(buttonsCart, cartPopup, renderCart);
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

function closeOrderPopup() {
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
}

function closeCartPopup() {
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
    if (title.length >= 30) {
        title = title.substring(0, 30);
        title += '...';
    }
    return title;
}

render();
closeOrderPopup();
closeCartPopup();
activationButtons();