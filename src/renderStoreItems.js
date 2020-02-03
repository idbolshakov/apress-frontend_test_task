const list = API.products.map((item) => {
  return `<li class="catalog__item" data-id="${item.id}">
    <img class="catalog__img" src="${item.img}">
    <div class="catalog__caption">
      <h3 class="catalog__heading">
        ${item.title}
      </h3>
      <div class="catalog__price">${item.price.toLocaleString('ru-RU')} руб.</div>
    </div>
    <div class="catalog__btns">
      <a href="#" class="catalog__btn btn">Заказать</a>
      <a href="#" class="catalog__btn btn btn--grey">В корзину</a>
    </div>
  </li>`;
});


document.querySelector('.catalog__list').innerHTML = list.join('');