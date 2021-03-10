"use strict"
const body = document.querySelector('body');
const mainBlockHtml = body.querySelector('.product-listing-wrapper');
let sectionPopupOrder;

const renderPopupOrder = (element) => {
    sectionPopupOrder = document.createElement('section');
    sectionPopupOrder.classList.add('product-order-popup');
    sectionPopupOrder.innerHTML =
        `<form action="#" class="order-window">
          <h2 class="product-order-popup__title">${element.title}</h2>
          <div class="order-window__container">
              <div class="order-window__details">
                <img src="${element.img}" alt="${element.title}" class="order-window__details-illustration" width="165">
                <span class="order-window__details-price">${getPrice(element.price)} руб.</span>
              </div>
              <div class="order-window__comment">
                <label for="comment-text" class="order-window__comment-label">Комментарии к заказу:</label>
                <textarea name="comment" id="comment-text" rows="8" class="order-window__comment-text" aria-label="Поле ввода комментария"></textarea>
              </div>
          </div>
          <div class="order-window__contacts">
            <label for="tel" class="order-window__contacts-label">Ваш телефон <sup>*</sup>:</label>
            <input id="tel" type="tel" class="order-window__contacts-input" aria-label="поле ввода телефона">
          </div>
          <div class="order-window__buttons">
            <button class="order-window__buttons-submit" type="submit">Отправить</button>
            <button class="order-window__buttons-close" type="button" aria-label="Закрыть окно"></button>
          </div>
        </form>`;
    mainBlockHtml.appendChild(sectionPopupOrder);
    body.classList.add('modal-open');
    sectionPopupOrder.addEventListener('click',onClickOrderButtons);
    document.addEventListener('keydown', onModalOrderEscKeydown);
};

const onClickOrderButtons = (evt) => {
    const target = evt.target;
    switch (target.className) {
        case 'order-window__buttons-close':
            closeModalOrder();
            break;
        case 'order-window__buttons-submit':
            evt.preventDefault();
            alert('Форма ушла');
            closeModalOrder();
            break;
        case 'product-order-popup':
            closeModalOrder();
            break;
    }
};

const closeModalOrder = () => {
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onModalOrderEscKeydown);
    sectionPopupOrder.remove();
}

const onModalOrderEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
        closeModalOrder();
    }
}
