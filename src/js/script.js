// Каталог товаров
var products = document.querySelector('.products');
var product = document.querySelector('.product');

// PopUp Заказать
var order = document.querySelector('.order');
var buttonOrderClose = document.querySelector('.order-dialogue__close-button');
var orderDialogue = document.querySelector('order-dialogue');
var orderContent = document.getElementById("orderContent");
var orderInfo = document.getElementById("orderInfo");

// PopUp В корзине 
var addCart = document.querySelector('.add-cart');
var buttonAddCartClose = document.querySelector('.add-cart-content__button-close');
var addCartContent = document.getElementById('addCartContent');
var addCartContentInfo = document.getElementById('addCartContentInfo');

loadingProducts(); // Заполняем каталог товаров

function loadingProducts() {

  for (i = 0; i < API.products.length; i++) {

    // Создаем структуру для товаров
    products.insertAdjacentHTML('beforeend',
      '<div class="product-images"> </div> <div class="product-text"></div>');

    // Добавляем кнопки
    var buttonsWrap = document.getElementById('buttonsWrap');

    buttonsWrap.insertAdjacentHTML('beforeend',
      '<button class="button product-buttons__order" onclick="loadingOrder(' + i + ')"> Заказать </button>');

    buttonsWrap.insertAdjacentHTML('beforeend',
      '<button class="button product-buttons__add-cart" onclick="loadingAddCart(' + i + ')"> В корзину </button>');

  } // for

  API.products.forEach(function (productElement) {

    // Добавляем картинки товаров
    var productImages = document.querySelector('.product-images');

    productImages.innerHTML = `
      <img src="${productElement.image}" alt="Товар" class="product-images__img">`;

    // Добавляем заголовки и цены 
    var productText = document.querySelector('.product-text');

    productText.innerHTML = `
      <h3 class="product-text__title">${productElement.title}</h3>
      <h2 class="product-text__price">${String(productElement.price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')} руб.</h2> `;

    products.insertAdjacentHTML('beforeend',
      '<div class="product"></div>');

    products.insertBefore(productImages, product);
    products.insertBefore(productText, product);

  });

} // loadingProducts

// PopUp для кнопки Заказать

function loadingOrder(id) {

  order.classList.add("order__active");

  orderContent.insertAdjacentHTML('afterbegin',
    '<h3 class="order-title" id="orderTitle">' + API.products[id].title + '</h3>');

  orderInfo.insertAdjacentHTML('beforeend',
    '<img src="' + API.products[id].image + '" id="orderInfoImg" alt="Картинка товара" class="order-info__img">');

  document.getElementById("orderInfo").insertAdjacentHTML('beforeend',
    '<h2 class="order-info__price" id="orderInfoPrice">' + String(API.products[id].price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ') + ' руб.</h2>');

} // loadingOrder(id)

buttonOrderClose.addEventListener("click", function () {

  order.classList.remove("order__active");
  document.getElementById('orderTitle').remove();
  document.getElementById('orderInfoImg').remove();
  document.getElementById('orderInfoPrice').remove();

});

// PopUp для кнопки В корзине 

function loadingAddCart(id) {

  addCart.classList.add("add-cart__active");

  addCartContent.insertAdjacentHTML('afterbegin',
    '<img src="' + API.products[id].image + '"  id="addCartImage" alt="Картинка товара" class="add-cart__img">');

  addCartContentInfo.insertAdjacentHTML('beforeend',
    '<h4 class="add-cart__title" id="addCartTitle">' + API.products[id].title + '</h4>');

  addCartContentInfo.insertAdjacentHTML('beforeend',
    '<span class="add-cart__price" id="addCartPrice">' + String(API.products[id].price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ') + ' руб.</span>');

} // loadingAddCart(id)

buttonAddCartClose.addEventListener("click", function () {

  addCart.classList.remove("add-cart__active");
  document.getElementById('addCartImage').remove();
  document.getElementById('addCartTitle').remove();
  document.getElementById('addCartPrice').remove();

});