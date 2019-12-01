let products = [{
        id_order: 'order_0',
        id_cart: 'cart_0',
        "id": 1,
        "title": "Выкатной детский диван Зайка",
        "price": 11740,
        "img": "assets/images/1.jpg"
    },

    {
        id_order: 'order_1',
        id_cart: 'cart_1',

        "id": 2,
        "title": "Диван Банжо",
        "price": 62839,
        "img": "assets/images/2.jpg"
    },

    {
        id_order: 'order_2',
        id_cart: 'cart_2',

        "id": 3,
        "title": "Гостиная классика Panamar Classic",
        "price": 267593,
        "img": "assets/images/3.jpg"
    },

    {
        id_order: 'order_3',
        id_cart: 'cart_3',

        "id": 4,
        "title": "Chairman Диван Релакс Terra 101",
        "price": 31950,
        "img": "assets/images/4.jpg"
    },

    {
        id_order: 'order_4',
        id_cart: 'cart_4',
        "id": 5,
        "title": "Диван матрас прямой Верн Sleepformer",
        "price": 52450,
        "img": "assets/images/5.jpg"
    },

    {
        id_order: 'order_5',
        id_cart: 'cart_5',
        "id": 6,
        "title": "2 кресла и стол чайный - комплект «Виктория» (Эдем)",
        "price": 62350,
        "img": "assets/images/6.jpg"
    },

    {
        id_order: 'order_6',
        id_cart: 'cart_6',
        "id": 7,
        "title": "Современный стильный угловой диван Flex с декоративной столешницей",
        "price": 483000,
        "img": "assets/images/7.jpg"
    },

    {
        id_order: 'order_7',
        id_cart: 'cart_7',
        "id": 8,
        "title": "Белый диван Deco - Colleccion Alexandra",
        "price": 606400,
        "img": "assets/images/8.jpg"
    },

    {
        id_order: 'order_8',
        id_cart: 'cart_8',
        "id": 9,
        "title": "Белый диван в гостиную с цветной обивкой",
        "price": 394899,
        "img": "assets/images/9.jpg"
    },

    {
        id_order: 'order_9',
        id_cart: 'cart_9',
        "id": 10,
        "title": "Двухместный бархатный диван",
        "price": 13240,
        "img": "assets/images/10.jpg"
    },
];


/*список блоков с товарами в цикле*/
for (var i = 0; i < products.length; i++) {
    /*создаем офферы*/
    var d1 = document.createElement('div');
    var d2_1 = document.createElement('div');
    var d2_2 = document.createElement('div');
    var d2_3 = document.createElement('div');
    var d3_1_img = document.createElement('img');
    var d3_2 = document.createElement('div');
    var d3_3 = document.createElement('div');
    var d3_4 = document.createElement('div');
    var d3_5 = document.createElement('div');
    var d4_1_span = document.createElement('span');
    var d4_1_2span = document.createElement('span');
    var d4_2_button = document.createElement('button');
    var d4_3_button = document.createElement('button');
    /*наполняем их содержанием*/
    d3_1_img.src = products[i].img;
    d3_2.textContent = products[i].title;
    d4_1_span.textContent = products[i].price;
    d4_1_2span.textContent = ' руб.';
    d4_2_button.textContent = 'Заказать';
    d4_2_button.id = products[i].id_order;
    d4_3_button.textContent = 'В корзину';
    d4_3_button.id = products[i].id_cart;
    /*Стуктура блока*/
    d1.appendChild(d2_1);
    d1.appendChild(d2_2);
    d1.appendChild(d2_3);
    d2_1.appendChild(d3_1_img);
    d2_2.appendChild(d3_2);
    d2_2.appendChild(d3_3);
    d2_3.appendChild(d3_4);
    d2_3.appendChild(d3_5);
    d3_3.appendChild(d4_1_span);
    d3_3.appendChild(d4_1_2span);
    d3_4.appendChild(d4_2_button);
    d3_5.appendChild(d4_3_button);
    /*добавляем классы*/
    d1.classList.add('product-block');
    d2_1.classList.add('product-img');
    d2_2.classList.add('product-desc');
    d2_3.classList.add('button-container');
    d3_2.classList.add('product-title');
    d3_3.classList.add('product-price');
    d4_1_span.classList.add('price');
    d4_2_button.classList.add('order');
    d4_3_button.classList.add('cart');
    /*выводим блоки с товарами на станицу*/
    document.getElementById('product-block-container').appendChild(d1);
}

/*при нажаи на кнопку В корзиу*/
document.querySelector('#cart_0').onclick = function Cart() {
    /*находим блок по его id, выводим всю информацию в выскакивающее окно Добавленние в корзину*/
    var c = this.id.replace('cart_', ''); //берется id_cart и очищается до цифры, т.е. номера элемента в массиве
    document.getElementById('to-cart-hidden').style.display = "block";
    document.getElementById('in-cart-product-img').src = products[c].img;
    document.getElementById('in-cart-product-title').textContent = products[c].title;
    document.getElementById('in-cart-price').textContent = products[c].price;
};
document.querySelector('#cart_1').onclick = function Cart() {
    var c = this.id.replace('cart_', '');
    document.getElementById('to-cart-hidden').style.display = "block";
    document.getElementById('in-cart-product-img').src = products[c].img;
    document.getElementById('in-cart-product-title').textContent = products[c].title;
    document.getElementById('in-cart-price').textContent = products[c].price;
};
document.querySelector('#cart_2').onclick = function Cart() {
    var c = this.id.replace('cart_', '');
    document.getElementById('to-cart-hidden').style.display = "block";
    document.getElementById('in-cart-product-img').src = products[c].img;
    document.getElementById('in-cart-product-title').textContent = products[c].title;
    document.getElementById('in-cart-price').textContent = products[c].price;
};
document.querySelector('#cart_3').onclick = function Cart() {
    var c = this.id.replace('cart_', '');
    document.getElementById('to-cart-hidden').style.display = "block";
    document.getElementById('in-cart-product-img').src = products[c].img;
    document.getElementById('in-cart-product-title').textContent = products[c].title;
    document.getElementById('in-cart-price').textContent = products[c].price;
};
document.querySelector('#cart_4').onclick = function Cart() {
    var c = this.id.replace('cart_', '');
    document.getElementById('to-cart-hidden').style.display = "block";
    document.getElementById('in-cart-product-img').src = products[c].img;
    document.getElementById('in-cart-product-title').textContent = products[c].title;
    document.getElementById('in-cart-price').textContent = products[c].price;
};
document.querySelector('#cart_5').onclick = function Cart() {
    var c = this.id.replace('cart_', '');
    document.getElementById('to-cart-hidden').style.display = "block";
    document.getElementById('in-cart-product-img').src = products[c].img;
    document.getElementById('in-cart-product-title').textContent = products[c].title;
    document.getElementById('in-cart-price').textContent = products[c].price;
};
document.querySelector('#cart_6').onclick = function Cart() {
    var c = this.id.replace('cart_', '');
    document.getElementById('to-cart-hidden').style.display = "block";
    document.getElementById('in-cart-product-img').src = products[c].img;
    document.getElementById('in-cart-product-title').textContent = products[c].title;
    document.getElementById('in-cart-price').textContent = products[c].price;
};
document.querySelector('#cart_7').onclick = function Cart() {
    var c = this.id.replace('cart_', '');
    document.getElementById('to-cart-hidden').style.display = "block";
    document.getElementById('in-cart-product-img').src = products[c].img;
    document.getElementById('in-cart-product-title').textContent = products[c].title;
    document.getElementById('in-cart-price').textContent = products[c].price;
};
document.querySelector('#cart_8').onclick = function Cart() {
    var c = this.id.replace('cart_', '');
    document.getElementById('to-cart-hidden').style.display = "block";
    document.getElementById('in-cart-product-img').src = products[c].img;
    document.getElementById('in-cart-product-title').textContent = products[c].title;
    document.getElementById('in-cart-price').textContent = products[c].price;
};
document.querySelector('#cart_9').onclick = function Cart() {
    var c = this.id.replace('cart_', '');
    document.getElementById('to-cart-hidden').style.display = "block";
    document.getElementById('in-cart-product-img').src = products[c].img;
    document.getElementById('in-cart-product-title').textContent = products[c].title;
    document.getElementById('in-cart-price').textContent = products[c].price;
};


/*при нажаи на кнопку Заказать*/
document.querySelector('#order_0').onclick = function Order() {
    /*находим блок по id, выводим всю информацию в выскакивающее окно Оформление заказа*/
    var o = this.id.replace('order_', ''); //берется id_order и очищается до номера элемента в массиве
    document.getElementById('to-order-container-hidden').style.display = "block";
    document.getElementById('order-product-img').src = products[o].img;
    document.getElementById('order-product-title').textContent = products[o].title;
    document.getElementById('order-price').textContent = products[o].price;
};
document.querySelector('#order_1').onclick = function Order() {
    var o = this.id.replace('order_', '');
    document.getElementById('to-order-container-hidden').style.display = "block";
    document.getElementById('order-product-img').src = products[o].img;
    document.getElementById('order-product-title').textContent = products[o].title;
    document.getElementById('order-price').textContent = products[o].price;
};
document.querySelector('#order_2').onclick = function Order() {
    var o = this.id.replace('order_', '');
    document.getElementById('to-order-container-hidden').style.display = "block";
    document.getElementById('order-product-img').src = products[o].img;
    document.getElementById('order-product-title').textContent = products[o].title;
    document.getElementById('order-price').textContent = products[o].price;
};
document.querySelector('#order_3').onclick = function Order() {
    var o = this.id.replace('order_', '');
    document.getElementById('to-order-container-hidden').style.display = "block";
    document.getElementById('order-product-img').src = products[o].img;
    document.getElementById('order-product-title').textContent = products[o].title;
    document.getElementById('order-price').textContent = products[o].price;
};
document.querySelector('#order_4').onclick = function Order() {
    var o = this.id.replace('order_', '');
    document.getElementById('to-order-container-hidden').style.display = "block";
    document.getElementById('order-product-img').src = products[o].img;
    document.getElementById('order-product-title').textContent = products[o].title;
    document.getElementById('order-price').textContent = products[o].price;
};
document.querySelector('#order_5').onclick = function Order() {
    var o = this.id.replace('order_', '');
    document.getElementById('to-order-container-hidden').style.display = "block";
    document.getElementById('order-product-img').src = products[o].img;
    document.getElementById('order-product-title').textContent = products[o].title;
    document.getElementById('order-price').textContent = products[o].price;
};
document.querySelector('#order_6').onclick = function Order() {
    var o = this.id.replace('order_', '');
    document.getElementById('to-order-container-hidden').style.display = "block";
    document.getElementById('order-product-img').src = products[o].img;
    document.getElementById('order-product-title').textContent = products[o].title;
    document.getElementById('order-price').textContent = products[o].price;
};
document.querySelector('#order_7').onclick = function Order() {
    var o = this.id.replace('order_', '');
    document.getElementById('to-order-container-hidden').style.display = "block";
    document.getElementById('order-product-img').src = products[o].img;
    document.getElementById('order-product-title').textContent = products[o].title;
    document.getElementById('order-price').textContent = products[o].price;
};
document.querySelector('#order_8').onclick = function Order() {
    var o = this.id.replace('order_', '');
    document.getElementById('to-order-container-hidden').style.display = "block";
    document.getElementById('order-product-img').src = products[o].img;
    document.getElementById('order-product-title').textContent = products[o].title;
    document.getElementById('order-price').textContent = products[o].price;
};
document.querySelector('#order_9').onclick = function Order() {
    var o = this.id.replace('order_', '');
    document.getElementById('to-order-container-hidden').style.display = "block";
    document.getElementById('order-product-img').src = products[o].img;
    document.getElementById('order-product-title').textContent = products[o].title;
    document.getElementById('order-price').textContent = products[o].price;
};
/*закрытие выскакивающих окон*/
function CartClose(el) { document.getElementById(el).style.display = "none"; };

function OrderClose(el) { document.getElementById(el).style.display = "none"; };