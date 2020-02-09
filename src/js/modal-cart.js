'use strict';

(function () {
  const listTmp = (data) => data.map((item) => 
    `<li class="modal-cart__item">
        <img class="modal-cart__img" src="${item.img}">
        <div class="modal-cart__caption">
          <h3 class="modal-cart__heading">${item.title}</h3>
          <div class="modal-cart__price">${item.price.toLocaleString('ru-RU')} руб.</div>
          <button class="modal-cart__delete-btn btn-reset" data-id="${item.id}">X</button>
        </div>
      </li>`
    );


  const tmp = (data) => `<section class="modal-cart">
    <h2 class="modal-cart__title">Вы добавили в корзину:</h2>
    <div class="modal-cart__inner">
      <ul class="modal-cart__list">
        ${listTmp(data).join('')}
      </ul>
      <a class="modal-cart__link btn" href="#">Перейти в корзину</a>
    </div>
  </section>`;

  const deleteCartItemHandler = () => {
    alert('work');
  }


  const initModalCart = (data) => {
    window.render(tmp(data));
  }

  const updateModalCartList = (data) => {
    document.querySelector('.modal-cart__list').innerHTML = listTmp(data).join('');
  }


  let isRedered = false;
  window.renderModalCart = () => {
    const cartData = window.getCartData();
    if (isRedered) {
      updateModalCartList(cartData);
    } else {
      initModalCart(cartData);
      isRedered = true;
    }
    document.querySelectorAll('.modal-cart__delete-btn').forEach((item) => item.addEventListener('click', deleteCartItemHandler));
  }
})();