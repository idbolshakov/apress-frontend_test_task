"use strict";

// получить элемент, имеющий id="myDiv"
var myDiv = document.getElementById("myDiv"); // подпишемся на событие click этого элемента

window.onload = function() {
  // создадим объект XMLHttpRequest
  var xhr = new XMLHttpRequest(); //настраиваем запрос: GET - метод, data.txt - URL-адрес по которому будет посылаться запрос, false - синхронный запрос

  xhr.open('GET', './api/products.js', false); // отправляем данные на сервер с помощью метода send

  xhr.send(); // если статус ответа 200 (OK) то

  if (xhr.status == 200) {
    // выведем в элемент, имеющий id="answer", ответ сервера
    var products = API.products;
    products.forEach(function(product) {

      // Корзина

      var div = main.appendChild(document.createElement('div'));

      div.id = product.id;
      div.classList.add('container');

      // Картинка

      var divImg = div.appendChild(document.createElement('div'));

      divImg.id = product.id;

      var img = divImg.appendChild(document.createElement('img'));

      img.src = product.img;

      divImg.classList.add('product-img');

      // Контент

      var divContent = div.appendChild(document.createElement('div'));

      divContent.classList.add('product-content');
      divContent.id = product.id;

      var contentTitle = divContent.appendChild(document.createElement('div'));

      contentTitle.innerHTML = product.title;
      contentTitle.classList.add('content-title');

      var contentPrice = divContent.appendChild(document.createElement('div'));

      contentPrice.innerHTML = "".concat(product.price.toLocaleString('ru-RU'), " \u0440\u0443\u0431.");
      contentPrice.classList.add('content-price');

      // Кнопки

      var divAction = div.appendChild(document.createElement('div'));

      divAction.classList.add('product-action');

      var btn1 = divAction.appendChild(document.createElement('button'));

      btn1.id = product.id;

      var btn2 = divAction.appendChild(document.createElement('button'));

      btn2.id = product.id;
      btn1.innerHTML = "Заказать";
      btn2.innerHTML = "В корзину";
      btn1.classList.add('on-order');
      btn2.classList.add('on-shoping-list');
    });
  }

  // /Корзина


  var btn1 = document.querySelectorAll(".on-shoping-list");
  var shopingCart = document.querySelector(".shopping-cart");
  var productImg = document.querySelectorAll(".product-img");
  var productContent = document.querySelectorAll(".product-content");

  //Обработчик кнопки "В корзину"

  [].forEach.call(btn1, function(el) {
    el.onclick = function(e) {
      shopingCart.style.display = '';

      var cartInner = shopingCart.appendChild(document.createElement('div'));

      cartInner.classList.add('cart-container');

      var innerImg = cartInner.appendChild(document.createElement('div'));

      innerImg.classList.add('inner-cart');
      innerImg.id = "".concat([el.id - 1], "Cart"); // innerImg = test[el.id - 1].cloneNode(true);

      var cloneImg = productImg[el.id - 1].cloneNode(true);

      innerImg.appendChild(cloneImg);
      cloneImg.classList.add('cart-img');

      var cloneContent = productContent[el.id - 1].cloneNode(true);

      innerImg.appendChild(cloneContent);
      cloneContent.classList.add('cart-Content');

      var itemDelete = innerImg.appendChild(document.createElement('div'));

      itemDelete.classList.add('cart-toggle');
      itemDelete.id = "".concat([el.id - 1], "Toggle");

      var closeCartBtn = document.querySelector(".cart-toggle");
      var cartContainer = document.querySelectorAll(".cart-container");

      // Обработчки кнопки удаления из корзины

      closeCartBtn.onclick = function() {
        shopingCart.style.display = 'none';
        document.querySelector(".cart-container").remove();
      };
    };
  });

  // Обработчик кнопки "Заказ"

  var btn2 = document.querySelectorAll(".on-order");
  var orderList = document.querySelector(".order-list");
  var productImg = document.querySelectorAll(".product-img");
  var productTitle = document.querySelectorAll(".content-title");
  var orderTitle = document.querySelector(".order-title");
  var orderContent = document.querySelector(".order-content");
  var orderPrice = document.querySelectorAll(".content-price");

  [].forEach.call(btn2, function(el) {
    el.onclick = function(e) {
      orderList.style.display = '';

      orderTitle.innerHTML = productTitle[el.id - 1].innerHTML;

      var orderImgBlock = orderContent.innerHTML = "".concat(productImg[el.id - 1].innerHTML, " </br>    ").concat(orderPrice[el.id - 1].innerHTML);
    };
  });
  var closeOrderBtn = document.querySelector(".order-close");

  closeOrderBtn.onclick = function() {
    orderList.style.display = 'none';
  };
};
