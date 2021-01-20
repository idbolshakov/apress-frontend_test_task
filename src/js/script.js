import { Popup } from './classes/Popup.js';
import { splitPrice, getProduct } from './helpers.js';

const popupOrder = new Popup('popup-order');
const popupCart = new Popup('popup-cart');

const products = API.products.slice();
const productListing = document.querySelector('.product-listing-wrapper');

const renderProductList = (products, template, callback, root) => {
  const html = products.map(template).join('');
  root.insertAdjacentHTML('beforeend', html);
  callback();
};

const callback = () => {
  let t;

  document.addEventListener('click', evt => {
    if (evt.target.closest('.product__order')) {
      const product = getProduct('product', products, evt.target);

      if (!product) return;
    
      const popup = document.querySelector('#popup-order');
      popup.querySelector('.popup-order__img img').src = product.img;
      popup.querySelector('.popup-order__title').textContent = product.title;
      popup.querySelector('.popup-order__price').textContent = splitPrice(product.price);
    
      popupOrder.open();
    }
    if (evt.target.closest('.product__cart')) {
      const product = getProduct('product', products, evt.target);

      if (!product) return;
    
      const popup = document.querySelector('#popup-cart');
      popup.querySelector('.popup-cart-item__img img').src = product.img;
      popup.querySelector('.popup-cart-item__title').textContent = product.title;
      popup.querySelector('.popup-cart-item__price').textContent = splitPrice(product.price);
    
      clearTimeout(t);
      setTimeout(() => popupCart.open(), 20);
      t = setTimeout(() => popupCart.close(), 2000);
    }
  });
};

const templateProduct = ({id, title, price, img}) => {
  return (`
    <article class="product" data-id="${id}">
      <div class="product__img">
        <img src="${img}" alt="${title}">
      </div>
      <div class="product__info">
        <h2 class="product__title">${title}</h2>
        <b class="product__price ruble">${splitPrice(price)}</b>
      </div>
      <footer class="product__footer">
        <button class="product__order btn btn_primary">Заказать</button>
        <button class="product__cart btn">В корзину</button>
      </footer>
    </article>
  `);
};

renderProductList(products, templateProduct, callback, productListing);
