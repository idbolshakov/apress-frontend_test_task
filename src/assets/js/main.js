"use strict";

window.onload = function() {

  var products = API.products;
  products.forEach(function(product) {

    // Создаем контейнер для корзины

    var divContainer = main.appendChild(document.createElement('div'));

    divContainer.id = product.id;
    divContainer.classList.add('container');

    // Создаем контейнер для картинки

    var divImg = divContainer.appendChild(document.createElement('div'));
    var img = divImg.appendChild(document.createElement('img'));

    divImg.id = product.id;
    img.src = product.img;
    divImg.classList.add('product-img');

    // Закидываем контент в контейнер

    var divContent = divContainer.appendChild(document.createElement('div'));
    var contentTitle = divContent.appendChild(document.createElement('div'));
    var contentPrice = divContent.appendChild(document.createElement('div'));

    divContent.classList.add('product-content');
    divContent.id = product.id;

    contentTitle.innerHTML = product.title;
    contentTitle.classList.add('content-title');

    contentPrice.innerHTML = "".concat(product.price.toLocaleString('ru-RU'), " \u0440\u0443\u0431.");
    contentPrice.classList.add('content-price');

    // Закидываем кнопки в контейнер

    var divAction = divContainer.appendChild(document.createElement('div'));
    var wrapperBtnOnShopingList = divAction.appendChild(document.createElement('div'));
    var btnOnShopingList = wrapperBtnOnShopingList.appendChild(document.createElement('button'));
    var wrapperBtnOnCart = divAction.appendChild(document.createElement('div'));
    var btnOnCart = wrapperBtnOnCart.appendChild(document.createElement('button'));

    divAction.classList.add('product-action');
    wrapperBtnOnShopingList.classList.add('wrapper-BtnOnShopingList');
    btnOnShopingList.id = product.id;
    wrapperBtnOnCart.classList.add('wrapper-BtnOnCart');
    btnOnCart.id = product.id;

    btnOnShopingList.innerHTML = "Заказать";
    btnOnCart.innerHTML = "В корзину";

    btnOnShopingList.classList.add('on-order');
    btnOnCart.classList.add('on-shoping-list');


    var btnOnShopingList = document.querySelectorAll(".on-shoping-list");
    var shopingCart = document.querySelector(".shopping-cart");
    var productImg = document.querySelectorAll(".product-img");
    var productContent = document.querySelectorAll(".product-content");

    // Обработчик отправки в корзину

    wrapperBtnOnCart.addEventListener('click', function(e) {
      if (!e.target.classList.contains('on-shoping-list')) {
        return;
      };
      shopingCart.style.display = '';

      var cartInner = shopingCart.appendChild(document.createElement('div'));
      var innerImg = cartInner.appendChild(document.createElement('div'));
      var id = e.path[3].id;
      var cloneImg = productImg[id - 1].cloneNode(true);
      var cloneContent = productContent[id - 1].cloneNode(true);
      var itemDelete = innerImg.appendChild(document.createElement('div'));


      cartInner.classList.add('cart-container');
      innerImg.classList.add('inner-cart');
      innerImg.id = "".concat([e.path[3].id], "Cart");

      innerImg.appendChild(cloneImg);
      cloneImg.classList.add('cart-img');

      innerImg.appendChild(cloneContent);
      cloneContent.classList.add('cart-Content');

      itemDelete.classList.add('cart-toggle');
      itemDelete.id = "".concat([id - 1], "Toggle");

      // Обработчик закрытия корзины
      var closeCartBtn = document.querySelector(".cart-toggle");
      closeCartBtn.onclick = function() {
        shopingCart.style.display = 'none';
        document.querySelector(".cart-container").remove();
      };
    });

    // Обработчик кнопки "Заказ"

    var btnOnCart = document.querySelectorAll(".on-order");
    var orderList = document.querySelector(".order-list");
    var productImg = document.querySelectorAll(".product-img");
    var productTitle = document.querySelectorAll(".content-title");
    var orderTitle = document.querySelector(".order-title");
    var orderContent = document.querySelector(".order-content");
    var orderPrice = document.querySelectorAll(".content-price");

    // Обработчик отправки в заказ

    wrapperBtnOnShopingList.addEventListener('click', function(e) {
      if (!e.target.classList.contains('on-order')) {
        return;
      };
      orderList.style.display = '';
      var id = e.path[3].id;
      var orderImgBlock = orderContent.innerHTML = "".concat(productImg[id - 1].innerHTML, " </br>    ").concat(orderPrice[id - 1].innerHTML);
      orderTitle.innerHTML = productTitle[id - 1].innerHTML;

      var closeOrderBtn = document.querySelector(".order-close");
      closeOrderBtn.onclick = function() {
        orderList.style.display = 'none';
      };
    });
  });
};
