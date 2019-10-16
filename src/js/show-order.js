import api from './api';
import { getOrder } from './utils';

const getOrderModal = (data) => {
  const {
    title,
    price,
    img,
  } = data;

  return `
    <section class="order">
      <h2 class="visually-hidden">Секция заказа товара</h2>
      <form>
        <ul class="order__items">
          <li class="order__item">
            ${title}
          </li>
        </ul>
        <div class="order__middle-container">
          <div class="order__first-column">
            <ul class="order__images">
              <li class="order__image">
                <img src="${img}" width="160" height="120" alt="Заказанный товар">
              </li>
            </ul>
            <span class="order__price">
              ${price.toLocaleString('ru-RU')}руб.
            </span>
          </div>
          <div class="order__second-column">
            <label class="order__comment-label" for="order-comment">Комментарий к заказу:</label>
            <textarea class="order__comment" name="order-comment" id="order-comment"></textarea>
          </div>
        </div>
        <div class="order__bottom-container">
          <label class="order__phone-label" for="order-phone">
            Ваш телефон *:
          </label>
          <input class="order__phone-input" type="text" id="order-phone" required>
          <button class="button button--red order__button" type="submit">Отправить</button>
        </div>
      </form>
      <button class="order__close-button" aria-label="закрыть модальное окно">x</button>
    </section>
  `;
};


const removeModal = () => {
  const orderModal = document.querySelector('.order');
  const closeModalButton = orderModal.querySelector('.order__close-button');
  orderModal.remove();
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
  const orderModal = getOrderModal(order);
  page.insertAdjacentHTML('afterbegin', orderModal);

  const closeModalButton = document.querySelector('.order__close-button');

  closeModalButton.addEventListener('click', removeModal);
  document.addEventListener('keydown', removeModalByEsc);
};

const addOrder = (evt) => {
  evt.preventDefault();
  const { products } = api;

  const modal = document.querySelector('.order');
  if (modal) {
    modal.remove();
  }

  const selectedProduct = evt.target.closest('.product-item');
  const { id } = selectedProduct.dataset;
  const order = getOrder(id, products);
  renderModal(order);
};

const showOrder = () => {
  const buttons = document.querySelectorAll('.product-item__order-button');
  buttons.forEach(button => button.addEventListener('click', addOrder));
};

export default showOrder;
