/*список товаров*/
let products = [
              {id_order: 'order_0', id_cart: 'cart_0', img: 'img/1.jpg', title: 'Угловой диван', price: '33600'},
              {id_order: 'order_1', id_cart: 'cart_1', img: 'img/2.jpg', title: 'Пуф', price: '7000'},
              {id_order: 'order_2', id_cart: 'cart_2', img: 'img/3.jpg', title: 'Модульный диван', price: '35000'},
              {id_order: 'order_3', id_cart: 'cart_3', img: 'img/4.jpg', title: 'Диван', price: '25000'}
          ];
   
/*формируем в цикле список блоков с товарами*/   
for (var i = 0; i < products.length; i++) {
    /*создаем все элементы*/
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
    /*создаем стуктуру блока*/
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
    /*добавляем классы ко всем элементам*/
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

/*при нажаи на кнопку В корзиу любого из блоков,*/
document.querySelector('.cart').onclick = function Cart() {
    /*берем id блока и по нему находим его в массиве, выводим всю информацию в выскакивающее окно Добавленние в корзину*/
    var c = this.id.replace('cart_',''); //берется id_cart и очищается до цифры, т.е. номера элемента в массиве
    document.getElementById('to-cart-hidden').style.display = "block";
    document.getElementById('in-cart-product-img').src = products[c].img;
    document.getElementById('in-cart-product-title').textContent = products[c].title;
    document.getElementById('in-cart-price').textContent = products[c].price;
};
/*при нажаи на кнопку Заказать любого из блоков,*/
document.querySelector('.order').onclick = function Order() {
    /*берем id блока и по нему находим его в массиве, выводим всю информацию в выскакивающее окно Оформление заказа*/
    var o = this.id.replace('order_','');//берется id_order и очищается до цифры, т.е. номера элемента в массиве
    document.getElementById('to-order-container-hidden').style.display = "block";
    document.getElementById('order-product-img').src = products[o].img;
    document.getElementById('order-product-title').textContent = products[o].title;
    document.getElementById('order-price').textContent = products[o].price;
};
/*функции для закрытия выскакивающих окон*/
function CartClose(el){document.getElementById(el).style.display = "none";};
function OrderClose(el){document.getElementById(el).style.display = "none";}; 
