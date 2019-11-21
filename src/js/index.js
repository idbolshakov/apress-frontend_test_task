'use strict';
document.addEventListener("DOMContentLoaded", function () {
  (function () {
    const goodsPlace = document.querySelector('.product-listing-wrapper'),
      cartPopupRender = document.querySelector('.cart-popup-render'),
      cartPopup = document.querySelector('.cart-popup'),
      cartItemsId = [];
    
    /* ie11 polyfills */
    if (navigator.userAgent.indexOf('MSIE') !== -1
      || navigator.appVersion.indexOf('Trident/') > -1) {
      /* includes polyfill */
      if (!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', {
          value: function (searchElement, fromIndex) {
            if (this == null) {
              throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            var len = o.length >>> 0;
            if (len === 0) {
              return false;
            }
            var n = fromIndex | 0;
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            
            function sameValueZero(x, y) {
              return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
            }
            
            while (k < len) {
              if (sameValueZero(o[k], searchElement)) {
                return true;
              }
              k++;
            }
            return false;
          }
        });
      }
      
      /* find polyfill */
      if (!Array.prototype.find) {
        Array.prototype.find = function (predicate) {
          if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
          }
          if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
          }
          var list = Object(this);
          var length = list.length >>> 0;
          var thisArg = arguments[1];
          var value;
          
          for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
              return value;
            }
          }
          return undefined;
        };
      }
      
      /* remove polyfill */
      if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function () {
          if (this.parentNode) {
            this.parentNode.removeChild(this);
          }
        };
      }
    }
    
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
      API.products.forEach(function (el) {
        goodsPlace.insertAdjacentHTML('beforeEnd',
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
      addToCart();
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
     * Adding listeners to add items in cart
     */
    function addToCart() {
      const buttons = nodeToArray(document.querySelectorAll('.product-buttons__cart'));
      let currentId;
      buttons.forEach(function (el) {
        currentId = el.parentNode.parentNode.getAttribute('data-id');
        el.addEventListener('click', function () {
          if (!cartItemsId.includes(currentId)) {
            cartItemsId.push(currentId);
          }
          cartAddItem(findProductById(currentId));
        });
      });
    }
    
    /**
     * Adding items to cart
     * @param {number} currentItem - getting current item by id with findProductById(id) method
     */
    function cartAddItem(currentItem) {
      cartPopup.classList.add('opened');
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
      const cartPopupDeleteItem = nodeToArray(document.querySelectorAll('.cart-popup-item-info__delete'));
      let currentId;
      cartPopupDeleteItem.forEach(function (el) {
        const deleteItem = function (e) {
          currentId = e.target.parentNode.parentNode.getAttribute('data-id');
          cartItemsId.forEach(function (el, index) {
            if (parseFloat(el) === parseFloat(currentId)) {
              cartItemsId.splice(index, 1);
            }
          });
          e.target.parentNode.parentNode.remove();
          if (document.querySelectorAll('.cart-popup-item').length < 1) {
            cartPopup.classList.remove('opened');
          }
        };
        el.removeEventListener('click', deleteItem);
        el.addEventListener('click', deleteItem, {once: true});
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
    function orderPopupClose() {
      const orderPopupClose = document.querySelector('.order-popup-close');
      const orderPopup = document.querySelector('.order-popup');
      
      orderPopupClose.addEventListener('click', function () {
        orderPopup.classList.remove('opened');
      });
    }
    
    productsShow();
    
  }());
});
