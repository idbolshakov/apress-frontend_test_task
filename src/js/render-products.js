import api from './api';

const getProductItem = (product) => {
  const {
    title,
    price,
    id,
    img,
  } = product;

  return `
  <li class="product-item" data-id="${id}">
    <div class="product-item__image-container">
      <img class="product-item__image" src="${img}" alt="изображение товара" width="180" height="140">
    </div>
    <div class="product-item__description-container">
      <h2 class="product-item__title">${title}</h2>
      <span class="product-item__price">${price} руб.</span>
    </div>
    <div class="product-item__buttons-container">
      <button class="button button--red product-item__order-button" type="button">Заказать</button>
      <button class="button button--gray product-item__cart-button" type="button">В корзину</button>
    </div>
  </li>
  `;
};

const renderProducts = () => {
  const { products } = api;
  const productsContainer = document.querySelector('.products-list');
  const productsList = products.map(getProductItem);

  productsContainer.insertAdjacentHTML('afterbegin', productsList.join(''));
};

export default renderProducts;
