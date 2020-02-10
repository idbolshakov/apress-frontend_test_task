'use strict';

(function () {

  const modal = document.querySelector('.modal-order');
  const form = modal.querySelector('.modal-order__form');

  const inputData = (data) => {
    modal.querySelector('.js-order-title').textContent = data.title;
    modal.querySelector('.js-order-price').textContent = data.price.toLocaleString('ru-RU') + ' руб.';
    modal.querySelector('.js-order-img').src = data.img;
    modal.querySelector('.js-order-id').value = data.id;
  }

  const onClickOpen = (evt) => {
    evt.preventDefault();
    const id = evt.target.dataset.id;
    const item = API.products.find((obj) => obj.id == id);
    inputData(item);
    modal.classList.add('js-show-modal');
  }

  const onClickClose = () => {
    modal.classList.remove('js-show-modal');
    form.reset();
  }

  const errorUploadHandler = () => {
    alert('Данные не отправлены');
    onClickClose();
  }

  const submitHandler = (evt) => {
    evt.preventDefault();
    window.upload(new FormData(form), onClickClose, errorUploadHandler);
  }

  modal.querySelector('.modal-order__form').addEventListener('submit', submitHandler);
  modal.querySelector('.modal-order__overlay').addEventListener('click', onClickClose);
  modal.querySelector('.modal-order__close-btn').addEventListener('click', onClickClose);
  document.querySelectorAll('.js-catalog-order-btn').forEach((item) => {
    item.addEventListener('click', onClickOpen);
  });
})();