const createProduct = ({
  id,
  title,
  price,
  img
}) => {
  return `
      <li class="product" data-id="${id}">
        <img src="${img}" alt="${title} - Фото" class="product__img">
        <div class="product__content">
          <h2 class="product__title">${title}</h2>
          <span class="product__price">${price} руб.</span>
        </div>
        <div class="product__btn-group">
          <button type="button" class="btn btn-add">Заказать</button>
          <button type="button" class="btn btn-cart">В корзину</button>
        </div>
      </li>
    `;
};

const createOrder = ({
  id,
  title,
  price,
  img
}) => {
  document.body.classList.add('no-scroll');
  document.body.insertAdjacentHTML('beforeend', `
    <div class="order-popup">
      <form action="#" class="order-popup__wrapper">
        <h2 class="order-popup__title">
          ${title}
        </h2>
        <div class="order-popup__info">
          <img src="${img}" alt="${title} - Фото" class="order-popup__img">
          <span class="order-popup__price">${price} руб.</span>
        </div>
        <fieldset class="order-popup__comment">
          <label for="comment" class="order-popup__comment-label">Комментарий<br>
            к заказу:</label>
          <textarea name="comment" id="comment" class="order-popup__comment-textarea"></textarea>
        </fieldset>
        <label for="phone" class="order-popup__phone-label">Ваш телефон:</label>
        <input id="phone" name="phone" type="text" class="order-popup__phone-input">
        <button type="submit" class="btn order-popup__submit">Отправить</button>
      </form>
      <button type="button" class="btn btn-close order-popup__btn-close">&times;</button>
    </div>
  `);
};

const createCart = ({
  id,
  title,
  price,
  img
}) => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="cart">
      <div class="cart__notice">
        Вы добавили в корзину:
      </div>
      <div class="cart__content">
        <img src="${img}" alt="${title} - Фото" class="cart__product-img">
        <div class="cart__product-info">
          <h2 class="cart__product-title">
            ${title}
          </h2>
          <span class="cart__product-price">${price} руб.</span>
        </div>
        <button type="button" class="btn btn-close">&times;</button>
      </div>
      <button type="button" class="btn cart__btn">Перейти в корзину</button>
    </div>
  `);
};

const updateCart = ({
  id,
  title,
  price,
  img
}) => {
  const titleElem = document.querySelector('.cart__product-title'),
    priceElem = document.querySelector('.cart__product-price'),
    imgElem = document.querySelector('.cart__product-img');
  titleElem.textContent = title;
  priceElem.textContent = price + ' руб.';
  imgElem.src = img;
  imgElem.alt = title + ' - Фото';
};

const createProducts = () => {
  const products = [];
  API.products.forEach(item => {
    products.push(createProduct(item));
  });
  return products;
};

const createList = () => {
  const products = createProducts();
  const listing = document.querySelector('.product-listing-wrapper');
  const list = document.createElement('ul');

  list.classList.add('products-list');

  products.forEach(item => {
    list.insertAdjacentHTML('beforeend', item);
  });

  listing.append(list);
};

const getProduct = (elem) => {
  const id = elem.dataset.id;
  return API.products.find(item => item.id === +id);
};

const switchBtnAction = event => {
  const target = event.target;

  if (target.closest('.btn-add')) {
    const product = getProduct(target.closest('li'));
    createOrder(product);
  }
  if (target.closest('.btn-cart')) {
    const product = getProduct(target.closest('li'));
    if (document.querySelector('.cart')) updateCart(product)
    else createCart(product);
  }
  if (target.closest('.btn-close')) {
    const closeElem = target.closest('.cart') || target.closest('.order-popup');
    document.body.classList.remove('no-scroll');
    closeElem.remove();
  }
};

createList();

document.body.addEventListener('click', switchBtnAction);
