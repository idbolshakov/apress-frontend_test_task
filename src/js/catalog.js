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
        <a href="#" class="catalog__btn btn btn--grey js-catalog-cart-btn" data-id="${item.id}">В корзину</a>
      </div>
    </li>`
  ).join('').trim();

  //Отрисовка элементов каталога
  document.querySelector('.catalog__list').innerHTML = listTmp;
})();