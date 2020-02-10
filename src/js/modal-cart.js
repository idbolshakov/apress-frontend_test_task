'use strict';

(function () {
  const modal = document.querySelector('.js-modal-cart');
  const list = modal.querySelector('.js-cart-list');

  const tmp = (data) => data.map((item) => `<li class="modal-cart__item">
      <img class="modal-cart__img" src="${item.img}">
      <div class="modal-cart__caption">
        <h3 class="modal-cart__heading">${item.title}</h3>
        <div class="modal-cart__price">${item.price.toLocaleString('ru-RU')} руб.</div>
      </div>
      <button class="modal-cart__delete-btn js-cart-delete btn-reset-style" data-id="${item.id}">&#215;</button>
    </li>`
  ).join('').trim();

  const updateList = () => {
    const data = window.getCartData(); // Получаем данные из Local Storage
    list.innerHTML = tmp(data); // Заменяем елементы позиций внутри карзины
    document.querySelectorAll('.js-cart-delete').forEach((item) => {
      item.addEventListener('click', onClickDelete);
    });
  }

  const onClickOpen = (evt) => {
    evt.preventDefault();
    const id = evt.target.dataset.id;
    const data = window.getCartData();
    let hasElem = false; //Элемента нет в корзине
    if (data) {
      hasElem = data.some((obj) => obj.id == id);
    }
    //Если элемент есть в корзине, то добавляем его
    if (!hasElem) {
      const item = API.products.find((obj) => obj.id == id);
      window.addToCart(item);
    }
    updateList(); //Обновляем спислок элементов в корзине
    modal.classList.add('js-show-modal');
  }

  const onClickCart = (evt) => {
    evt.preventDefault();
    modal.classList.toggle('js-show-modal');
  }

  const onClickClose = () => {
    modal.classList.remove('js-show-modal');
  }

  const onClickDelete = (evt) => {
    evt.preventDefault();
    const id = evt.target.dataset.id;
    window.deleteFromCart(id);
    updateList(); //Обновляем спислок элементов в корзине
  }

  updateList();
  modal.querySelector('.js-cart-link').addEventListener('click', onClickClose);
  document.querySelector('.js-cat-cart').addEventListener('click', onClickCart);
  document.querySelectorAll('.js-catalog-cart-btn').forEach((item) => {
    item.addEventListener('click', onClickOpen);
  });
})();