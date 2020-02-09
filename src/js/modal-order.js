'use strict';

(function () {
  const tmp = (item) => `<section class="modal-order">
    <div class="modal-order__overlay"></div>
    <div class="modal-order__inner">
      <h2 class="modal-order__title">${item.title}</h2>
      <form class="modal-order__form" action="https://echo.htmlacademy.ru" method="post">
        <div class="modal-order__top">
          <div class="modal-order__left">
            <img class="modal-order__img" src="${item.img}">
            <div class="modal-order__price">${item.price.toLocaleString('ru-RU')} руб.</div>
          </div>
          <div class="modal-order__right modal-order__comment">
            <label class="modal-order__comment-title" for="modal-order__message">Комментарий к заказу:</label>
            <textarea class="modal-order__comment-text" name="comment" id="modal-order__message"></textarea>
          </div>
        </div>
        <div class="modal-order__bottom">
          <div class="modal-order__left">
            <label for="modal-order__phone">Ваш телефон *:</label>
          </div>
          <div class="modal-order__right">
            <input class="modal-order__input" id="modal-order__phone" name="phone">
            <input class="modal-order__submit btn btn-reset" type="submit" value="Отправить">
          </div>
        </div>
      </form>
      <button class="modal-order__close-btn">x</button>
    </div>
  </section>`;


  const removeModalHandler = () => {
    document.querySelector('.modal-order').remove();
  }

  const errorUploadHandler = () => {
    alert('Данные не отправлены');
    removeModalHandler();
  }

  const submitHandler = (evt) => {
    evt.preventDefault();
    var form = document.querySelector('.modal-order__form');
    window.upload(new FormData(form), removeModalHandler, errorUploadHandler);
  }

  window.renderModalOrder = (data) => {
    window.render(tmp(data));
    document.querySelector('.modal-order__overlay').addEventListener('click', removeModalHandler);
    document.querySelector('.modal-order__close-btn').addEventListener('click', removeModalHandler);
    document.querySelector('.modal-order__form').addEventListener('submit', submitHandler);
  }
})();