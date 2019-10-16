import api from './api';
import { getOrder } from './utils';

const getCartModal = (data) => {
  const {
    title,
    price,
    img,
  } = data;

  return `
    <section class="cart">
      <h2 class="visually-hidden">Выбранный товар добавлен в корзину</h2>
      <h3 class="cart__title">Вы добавили в корзину:</h3>
      <div class="cart__body-wrapper">
        <img class="cart__item-image" src="${img}" width="140" height="100" alt="Добавленный товар">
        <div class="cart__description-container">
          <h4 class="cart__item-title">${title}</h4>
          <span class="cart__item-price">${price.toLocaleString('ru-RU')}руб.</span>
        </div>
        <button class="cart__delete-button" type="button" aria-label="удалить товар">x</button>
        <a class="button button--red cart__button" href="#">Перейти в корзину</a>
      </div>
    </section>
  `;
};

const removeModal = () => {
  const cartModal = document.querySelector('.cart');
  const closeModalButton = document.querySelector('.cart__delete-button');
  cartModal.remove();
  closeModalButton.removeEventListener('click', removeModal);
};

const removeModalByEsc = (evt) => {
  if (evt.keyCode === 27) {
    removeModal();
    document.removeEventListener('keydown', removeModalByEsc);
  }
};

const renderModal = (order) => {
  const page = document.querySelector('body');
  const modal = getCartModal(order);
  page.insertAdjacentHTML('afterbegin', modal);
  const closeModalButton = document.querySelector('.cart__delete-button');

  closeModalButton.addEventListener('click', removeModal);
  document.addEventListener('keydown', removeModalByEsc);
};

const addToCart = (evt) => {
  evt.preventDefault();
  const { products } = api;

  const modal = document.querySelector('.cart');
  if (modal) {
    modal.remove();
  }

  const currentItem = evt.target.closest('.product-item');
  const itemId = currentItem.dataset.id;
  const order = getOrder(itemId, products);
  renderModal(order);
};

const showCart = () => {
  const cartButtons = document.querySelectorAll('.product-item__cart-button');
  cartButtons.forEach(button => button.addEventListener('click', addToCart));
};

export default showCart;
