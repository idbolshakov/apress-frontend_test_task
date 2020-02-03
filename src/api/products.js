document.addEventListener("DOMContentLoaded", () => {
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

  const wrap = document.querySelector('.product-listing-wrapper');

  API.products.forEach(function (item) {
    const cart = document.createElement('div');
    cart.className = 'cart';
    cart.innerHTML = `<div class="image"><img src="${item.img}"></div><div class="price"><p>${item.title}</p><p>${item.price}руб.</p></div><div class="buttons"><button class="button-order"><p>Заказать</p></button><button class="button-basket"><p>В корзину</p></button></div>`;
    wrap.append(cart);
  });

  const orderButtons = document.querySelectorAll('.button-order');
  const buttonBasket = document.querySelectorAll('.button-basket');
  const closePopup = document.querySelector('.close-popup');
  const overlay = document.querySelector('.overlay');
  const carts = document.querySelectorAll('.cart');
  const popupSmall = document.querySelector('.small-popup');

  for (let i = 0; i < orderButtons.length; i++) {
    orderButtons[i].addEventListener('click', () => {
      overlay.style.display = 'block';
      document.querySelector('.product-listing-wrapper').style.filter = 'blur(5px)';
      document.querySelector('#popup-title').innerHTML = carts[i].childNodes[1].firstChild.textContent;
      document.querySelector('#popup-image').src = carts[i].childNodes[0].firstChild.src;
      document.querySelector('#popup-price').innerHTML = carts[i].childNodes[1].lastChild.textContent;
    });
  }

  for (let i = 0; i < orderButtons.length; i++) {
    buttonBasket[i].addEventListener('click', () => {
      popupSmall.style.display = 'block';
      document.querySelector('#small-popup-title').innerHTML = carts[i].childNodes[1].firstChild.textContent;
      document.querySelector('#small-popup-image').src = carts[i].childNodes[0].firstChild.src;
      document.querySelector('#small-popup-price').innerHTML = carts[i].childNodes[1].lastChild.textContent;
    });
  }

  closePopup.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.querySelector('.product-listing-wrapper').style.filter = 'none';
  });

  document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
      overlay.style.display = 'none';
      popupSmall.style.display = 'none';
      document.querySelector('.product-listing-wrapper').style.filter = 'none';
    }
  });
});