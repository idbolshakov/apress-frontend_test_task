//Шаблон элементов каталога
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

//Шаблон каталога
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
  const item = API.products.find((obj) => obj.id == evt.target.dataset.id);
  console.log(item);
}

//Событие для копки "В корзину"
const onClickAddToCartBtn = (evt) => {
  evt.preventDefault();
  const id = evt.target.dataset.id;
  const item = API.products.find((obj) => obj.id == id);
  addToCart(item);
}

//Назначаем обработчик клика на кнопки "Заказать"
document.querySelectorAll('.js-catalog-order-btn').forEach((item) => {
  item.addEventListener('click', onClickOrderBtn);
});

//Назначаем обработчик клика на кнопки "В корзину"
document.querySelectorAll('.js-catalog-add-to-cart-btn').forEach((item) => {
  item.addEventListener('click', onClickAddToCartBtn);
});

// Получаем данные из LocalStorage
const getCartData = () => JSON.parse(localStorage.getItem('cart'));

// Записываем данные в LocalStorage
const setCartData = (obj) => {
  localStorage.setItem('cart', JSON.stringify(obj));
}

// Добавляем данные в LocalStorage
const addToCart = (obj) => {
  let cartData;
  if (getCartData()) {
    cartData = getCartData();
  } else {
    cartData = [];
  }
  cartData.push(obj);
  setCartData(cartData);
}

// Удаляем данные из LocalStorage
const deleteFromCart = (obj) => {}