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

let wrap = document.querySelector('.product-listing-wrapper');

for (let i = 0; i < API.products.length; i++) {
  let cart = document.createElement('div');
  let imgBlock = document.createElement('div');
  let textBlock = document.createElement('div');
  let buttonBlock = document.createElement('div');
  let img = document.createElement('img');
  let title = document.createElement('p');
  let price = document.createElement('p');
  let buttonOrder = document.createElement('div');
  let buttonBasket = document.createElement('div');

  cart.className = 'cart';
  imgBlock.className = 'image';
  textBlock.className = 'price';
  buttonBlock.className = 'buttons';
  buttonOrder.className = 'button-order';
  buttonBasket.className = 'button-basket';

  img.src = API.products[i].img;
  title.innerHTML = API.products[i].title;
  price.innerHTML = API.products[i].price + ' руб.';
  buttonOrder.innerHTML = '<p>Заказать</p>';
  buttonBasket.innerHTML = '<p>В корзину</p>';

  imgBlock.append(img);
  textBlock.append(title);
  textBlock.append(price);
  buttonBlock.append(buttonOrder);
  buttonBlock.append(buttonBasket);

  cart.append(imgBlock);
  cart.append(textBlock);
  cart.append(buttonBlock);

  wrap.append(cart);
}