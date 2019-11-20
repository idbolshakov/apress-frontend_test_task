'use strict';

import 'whatwg-fetch';

if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}
/**
 * products listing api.
 * @class
 */
class Api {
  /**
   * api constructor.
   * @constructor
   */
  constructor() {
    this.products = {};
    this.goodsPlace = document.querySelector('.product-listing-wrapper');
    this.cartPopupRender = document.querySelector('.cart-popup-render');
    this.cartPopup = document.querySelector('.cart-popup');
    this.cartItemsId = [];
  }
  /**
   * get data for products list.
   * @param {string} url - take url where the data comes from
   */
  async getData(url) {
    const response = await window.fetch(url);

    if (response.ok) {
      this.products = await response.json();
    } else {
      console.log('Ошибка HTTP: ' + response.status);
    }
  }
  /**
   * Showing goods with data received in getData method.
   */
  showGoods() {
    this.getData('products.json').then(() => {
      this.products.forEach((el) => {
        this.goodsPlace.insertAdjacentHTML('beforeEnd',
            '<div class="product" data-id="' + el.id + '">' +
          '  <div class="product-image">' +
          '    <img src="' + el.img + '" alt="">' +
          '  </div>' +
          '  <div class="product-info">' +
          '    <div class="product-info__name">' + el.title + '</div>' +
          '    <div class="product-info__price">' + el.price.toLocaleString('ru-RU') + ' руб.</div>' +
          '  </div>' +
          '  <div class="product-buttons">' +
          '    <a href="javascript:" class="btn btn--primary product-buttons__order">Заказать</a>' +
          '    <a href="javascript:" class="btn btn--secondary product-buttons__cart">В корзину</a>' +
          '  </div>' +
          '</div>'
        );
      });
      this.addToCart();
      this.order();
    });
  }
  /**
   * Finding any product by his ID.
   * @param {number} id - id of the product you want to find
   * @return {number} id - id of the product you found
   */
  findProductById(id) {
    return this.products.find((value) => {
      return value.id === parseFloat(id);
    });
  }
  /**
   * Adding listeners to add items in cart
   */
  addToCart() {
    const buttons = [...document.querySelectorAll('.product-buttons__cart')];

    buttons.forEach((el) => {
      const currentAttr = el.parentNode.parentNode.getAttribute('data-id');
      el.addEventListener('click', () => {
        if (!this.cartItemsId.includes(currentAttr)) {
          this.cartItemsId.push(currentAttr);
        }
        this.cartAddItem(this.findProductById(currentAttr));
      });
    });
  }
  /**
   * Adding items to cart
   * @param {number} currentItem - getting current item by id with findProductById(id) method
   */
  cartAddItem(currentItem) {
    this.cartPopup.classList.add('opened');

    this.cartPopupRender.insertAdjacentHTML('beforeEnd',
        '<div class="cart-popup-item" data-id="' + currentItem.id + '">' +
      '  <div class="cart-popup-item__image">' +
      '    <img src="' + currentItem.img + '" alt="">' +
      '  </div>' +
      '  <div class="cart-popup-item-info">' +
      '    <div class="cart-popup-item-info__delete">' +
      '    </div>' +
      '    <div class="cart-popup-item-info__name">' + currentItem.title + '</div>' +
      '    <div class="cart-popup-item-info__price">' + currentItem.price.toLocaleString('ru-RU') + ' руб.</div>' +
      '  </div>' +
      '</div>');

    this.removeFromCart();
  }
  /**
   * Removing from cart
   */
  removeFromCart() {
    const cartPopupDeleteItem = [...document.querySelectorAll('.cart-popup-item-info__delete')];

    cartPopupDeleteItem.forEach((el) => {
      const deleteItem = (e) => {
        const currentId = e.target.parentNode.parentNode.getAttribute('data-id');

        this.cartItemsId.forEach((el, index) => {
          if (parseFloat(el) === parseFloat(currentId)) {
            this.cartItemsId.splice(index, 1);
          }
        });

        e.target.parentNode.parentNode.remove();

        if (document.querySelectorAll('.cart-popup-item').length < 1) {
          this.cartPopup.classList.remove('opened');
        }
      };
      el.removeEventListener('click', deleteItem);
      el.addEventListener('click', deleteItem, {once: true});
    });
  }
  /**
   * Listeners for order buttons
   */
  order() {
    const orderBtns = [...document.querySelectorAll('.product-buttons__order')];

    orderBtns.forEach((el) => {
      el.addEventListener('click', () => {
        const currentId = el.parentNode.parentNode.getAttribute('data-id');
        this.orderPopupOpen(currentId);
      });
    });

    this.orderPopupClose();
  }

  /**
   * order popup opened based on id of item clicked
   * @param {number} id - id of current item
   */
  orderPopupOpen(id) {
    const orderPopup = document.querySelector('.order-popup');
    const orderPopupRender = document.querySelector('.order-popup-render');
    const currentProduct = this.findProductById(id);

    orderPopup.classList.add('opened');
    orderPopupRender.innerHTML = '';

    orderPopupRender.insertAdjacentHTML('beforeEnd',
        '<div class="order-popup__name">' + currentProduct.title + '</div>' +
      '  <div class="order-popup-inner">' +
      '    <div class="order-popup-inner--left">' +
      '      <div class="order-popup-product">' +
      '        <div class="order-popup-product__image">' +
      '          <img src="' + currentProduct.img + ' " alt="">' +
      '        </div>' +
      '        <div class="order-popup-product__price">' + currentProduct.price.toLocaleString('ru-RU') + ' руб.</div>' +
      '      </div>' +
      '    </div>' +
      '    <div class="order-popup-inner--right">' +
      '      <fieldset class="order-popup-product__comment">' +
      '        <label for="orderPopup-comment">Комментарий<br> к заказу:</label>' +
      '        <textarea name="orderPopup-comment" id="orderPopup-comment"></textarea>' +
      '      </fieldset>' +
      '    </div>' +
      '  </div>');
  }
  /**
   * Listeners for closing order popup
   */
  orderPopupClose() {
    const orderPopupClose = document.querySelector('.order-popup-close');
    const orderPopup = document.querySelector('.order-popup');

    orderPopupClose.addEventListener('click', () => {
      orderPopup.classList.remove('opened');
    });
  }
}

window.API = new Api;

window.API.showGoods();
