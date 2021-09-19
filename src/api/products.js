var API = {
  products: [
    {
      "id": 1, 
      "title": "Выкатной детский диван Зайка производитель фабрика Blanes", 
      "price": 11740,
      "img": "assets/images/1.jpg"
    },

    {
      "id": 2, 
      "title": "Диван Банжо", 
      "price": 62839,
      "img": "assets/images/2.jpg"
    },
    
    {
      "id": 3, 
      "title": "Гостиная классика Panamar Classic", 
      "price": 267593,
      "img": "assets/images/3.jpg"
    },

    {
      "id": 4, 
      "title": "Chairman Диван Релакс Terra 101", 
      "price": 31950,
      "img": "assets/images/4.jpg"
    },

    {
      "id": 5, 
      "title": "Диван матрас прямой Верн Sleepformer", 
      "price": 52450,
      "img": "assets/images/5.jpg"
    },

    {
      "id": 6, 
      "title": "2 кресла и стол чайный - комплект «Виктория» (Эдем)", 
      "price": 62350,
      "img": "assets/images/6.jpg"
    },
    
    {
      "id": 7, 
      "title": "Современный стильный угловой диван Flex с декоративной столешницей", 
      "price": 483000,
      "img": "assets/images/7.jpg"
    },

    {
      "id": 8, 
      "title": "Белый диван Deco - Colleccion Alexandra", 
      "price": 606400,
      "img": "assets/images/8.jpg"
    }, 
    
    {
      "id": 9, 
      "title": "Белый диван в гостиную с цветной обивкой", 
      "price": 394899,
      "img": "assets/images/9.jpg"
    },

    {
      "id": 10, 
      "title": "Двухместный бархатный диван", 
      "price": 13240,
      "img": "assets/images/10.jpg"
    },           
  ]
};
/*   Отрисовка товаров  */

let products = API.products,
productsContainer = document.querySelector('.products__container');

products.forEach(function(item){

  productsContainer.insertAdjacentHTML("afterbegin", `
  <div class="products__item product-item" id="${item.id}">
    <div class="product-item__img-wrapper">
        <img src="${item.img}" alt="" loading="lazy"ц>
    </div>
    <div class="product-item__info">
        <div  class="product-item__name">${item.title}</div>
        <div class="product-item__price">
          <span class="product-item__price-value">${item.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}</span>
          <span class="product-item__price-currency">руб.</span> 
        </div>
    </div>
    <div class="product-item__actions">
        <button class="product-item__order-button button button_cerise">Заказать</button>
        <button class="product-item__cart-button button button_gray">В корзину</button>
    </div>
</div>
  `);

});

/*   Попап  */

if (typeof popUp === 'undefined') {
  var popUp = []
}
popUp = document.querySelectorAll('.pop-up');

function popOpen(popupType,customId, itemId) {

  if(popupType == "toOrder" ){

  let siteBody = document.querySelector('body');
  siteBody.classList.add('stop-scroll');
  }

  for (let i = 0; i < popUp.length; i++) {
      if (popUp[i].id == customId) {

          popUp[i].classList.add('pop-up_active');

          if(popupType == "toOrder" ){

            let popapContn =popUp[i].querySelector(".pop-up__content");
            let product = products.find(item => item.id == itemId);

            popapContn.querySelector(".pop-up__product-name").innerHTML = product.title;
            popapContn.querySelector(".pop-up__product-img").setAttribute("src",product.img);
            popapContn.querySelector(".pop-up__product-price-value").innerHTML = product.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

          } else if(popupType == "toCart" ){

            let cartList =popUp[i].querySelector(".cart-pop-up__list");
            let product = products.find(item => item.id == itemId);
            cartList.insertAdjacentHTML("afterBegin", `
            <li class="cart-pop-up__item cart-item">
              <img src="${product.img}" alt="" class="cart-item__img">
              <div class="cart-item__text-cont">
                  <div class="cart-item__name">${ product.title}</div>
                  <div class="cart-item__prise">
                      <span class="cart-item__prise-value">${product.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}</span>
                      <span class="cart-item__prise-currency">руб.</span>
                  </div>
              </div>
              <button class="cart-pop-up__remove-button">
                <svg class="svg">
                    <use xlink:href="#close"></use>
                </svg>
              </button>
          </li>`);
          }
     
      }
  }

}

function popClose(e) {
  let siteBody = document.querySelector('body');
  siteBody.classList.remove('stop-scroll');
  if(e.target.closest(".pop-up")){
    e.target.closest(".pop-up").classList.remove('pop-up_active');
  }

}

/*   Переход к попапу с заказом  */

let orderButtons = document.getElementsByClassName("product-item__order-button");

Array.prototype.forEach.call(orderButtons, function(item) {
  item.addEventListener("click", function(){
    popOpen("toOrder","js-customer-pop-form_order", item.closest(".product-item").getAttribute("id"))

    
  })
});
/*   Добавление товара в корзину  */

let cartButtons = document.getElementsByClassName("product-item__cart-button");

Array.prototype.forEach.call(cartButtons, function(item) {
  item.addEventListener("click", function(){
    popOpen("toCart", "js-customer-pop-form_cart", item.closest(".product-item").getAttribute("id"))
  });

});

/*   Удаление  товара из корзины  */

let cartPopUp = document.querySelector(".pop-up_cart");
cartPopUp.addEventListener("click", function(e){
  if (e.target.closest(".cart-pop-up__remove-button")){
   let cart =  e.target.closest(".cart-item");
    cart.parentNode.removeChild(cart);
  }

  /*   Если в корзине не осталось товаров - скрыть корзину  */

  if (document.querySelectorAll(".cart-pop-up__list li").length <1){

    document.querySelector(".pop-up_cart").classList.remove('pop-up_active');

  }

})
