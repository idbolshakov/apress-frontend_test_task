'use strict';

(function () {
  const listTmp = API.products.map((item) => `<li class="catalog__item">
      <img class="catalog__img" src="${item.img}">
      <div class="catalog__caption">
        <h3 class="catalog__heading">
          ${item.title}
        </h3>
        <div class="catalog__price">${item.price.toLocaleString('ru-RU')} руб.</div>
      </div>
      <div class="catalog__btns">
        <a href="#" class="catalog__btn btn js-catalog-order-btn" data-id="${item.id}">Заказать</a>
        <a href="#" class="catalog__btn btn btn--grey js-catalog-add-to-cart-btn" data-id="${item.id}">В корзину</a>
      </div>
    </li>`
  );

  const catalogTmp = `<section class="catalog">
    <ul class="catalog__list">
      ${listTmp.join('')}
    </ul>
  </section>`;


  //Отрисовка каталога
  document.querySelector('.product-listing-wrapper').innerHTML = catalogTmp.trim();


  //Событие для копки "Заказать"
  const onClickOrderBtn = (evt) => {
    evt.preventDefault();
    const id = evt.target.dataset.id;
    const item = API.products.find((obj) => obj.id == id);
    window.renderModalOrder(item);
  }

  document.querySelectorAll('.js-catalog-order-btn').forEach((item) => {
    item.addEventListener('click', onClickOrderBtn);
  });

  
  //Событие для копки "В корзину"
  const onClickAddToCartBtn = (evt) => {
    evt.preventDefault();
    const id = evt.target.dataset.id;
    const item = API.products.find((obj) => obj.id == id);
    window.addToCart(item);
    window.renderModalCart();
  }

  document.querySelectorAll('.js-catalog-add-to-cart-btn').forEach((item) => {
    item.addEventListener('click', onClickAddToCartBtn);
  });
})();