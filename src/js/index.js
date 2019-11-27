'use strict';
document.addEventListener("DOMContentLoaded", function () {
    const goodsPlace = document.querySelector('.product-listing-wrapper'),
      cartPopupRender = document.querySelector('.cart-popup-render'),
      cartPopup = document.querySelector('.cart-popup');
    
    /**
     * transforming node to array.
     * @param {object} node - nodes
     * @return {array} array - array of nodes
     */
    function nodeToArray(node) {
      return Array.prototype.slice.call(node);
    }
    
    /**
     * Showing goods with data received in getData method.
     */
    function productsShow() {
      let productsList = '';
      API.products.forEach(function (el) {
        productsList +=
          '<div class="product" data-id="' + el.id + '">' +
          '  <div class="product-image">' +
          '    <img src="' + el.img + '" alt="">' +
          '  </div>' +
          '  <div class="product-info">' +
          '    <div class="product-info__name">' + el.title + '</div>' +
          '    <div class="product-info__price">' + el.price.toLocaleString('ru-RU') + ' руб.</div>' +
          '  </div>' +
          '  <div class="product-buttons">' +
          '    <button class="btn btn--primary product-buttons__order">Заказать</button>' +
          '    <button class="btn btn--secondary product-buttons__cart">В корзину</button>' +
          '  </div>' +
          '</div>';
      });
      goodsPlace.insertAdjacentHTML('beforeEnd', productsList);
      productBtnsListener();
      order();
    }
    
    /**
     * Finding any product by his ID.
     * @param {number} id - id of the product you want to find
     * @return {number} id - id of the product you found
     */
    function findProductById(id) {
      return API.products.find(function (value) {
        return value.id === parseFloat(id);
      });
    }
    
    /**
     * Adding listeners to products buttons
     */
    function productBtnsListener() {
      let currentId;
      
      goodsPlace.addEventListener('click', function (e) {
        if (e.target.classList.contains('product-buttons__cart')) {
          currentId = e.target.parentNode.parentNode.getAttribute('data-id');
          cartAddItem(findProductById(currentId));
        }
      })
    }
    
    /**
     * Adding items to cart
     * @param {number} currentItem - getting current item by id with findProductById(id) method
     */
    function cartAddItem(currentItem) {
      cartPopup.classList.add('cart-popup--opened');
      cartPopupRender.insertAdjacentHTML('beforeEnd',
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
      removeFromCart();
    }
    
    /**
     * Removing from cart
     */
    function removeFromCart() {
      cartPopupRender.addEventListener('click', function(e) {
        if (e.target.classList.contains('cart-popup-item-info__delete')) {
          e.target.parentNode.parentNode.remove();
          if (document.querySelectorAll('.cart-popup-item').length < 1) {
            cartPopup.classList.remove('cart-popup--opened');
          }
        }
      });
    }
    
    /**
     * Listeners for order buttons
     */
    function order() {
      const orderBtns = nodeToArray(document.querySelectorAll('.product-buttons__order'));
      let currentId;
      orderBtns.forEach(function (el) {
        el.addEventListener('click', function () {
          currentId = el.parentNode.parentNode.getAttribute('data-id');
          orderPopupOpen(currentId);
        });
      });
      orderPopupClose();
    }
    
    /**
     * order popup opened based on id of item clicked
     * @param {number} id - id of current item
     */
    function orderPopupOpen(id) {
      const orderPopup = document.querySelector('.order-popup');
      const orderPopupRender = document.querySelector('.order-popup-render');
      const currentProduct = findProductById(id);
      
      orderPopup.classList.add('order-popup--opened');
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
    function orderPopupClose() {
      const orderPopupClose = document.querySelector('.order-popup-close');
      const orderPopup = document.querySelector('.order-popup');
      
      orderPopupClose.addEventListener('click', function () {
        orderPopup.classList.remove('order-popup--opened');
      });
    }
    
    productsShow();
    
});
