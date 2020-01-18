function main()
{
    document.getElementById("modal-basket").style.display = "none";                 //убрать модальное окно корзины
    document.getElementById("modal-buy").style.display = "none";                 //убрать модальное окно офрмления покупки
    /*вычислить кол-во товаров в API*/
    let length_obj = 0;
    for (let s in API.products) {
        length_obj++;
    }

    /*Создание доп плиток для товаров*/
    for (let i = 0; i < length_obj - 1; i++) {
        let product_item = document.getElementsByClassName("product-item")[0];      //выбираем элемент в переменую который будем копировать
        let product_item_new = product_item.cloneNode(true);                            //копируем выбраный элемент в переменую
        document.getElementById("main").appendChild(product_item_new);             //добавляем копию после предудущего product_item
    }

    /*Добавление информации в товары и добавления атрибута data-id  кнопки, это нужно для корзины и оформления заказа*/
    for (let i = 0; i < length_obj; i++) {
        let product_item = document.getElementsByClassName("product-item")[i];
        product_item.getElementsByClassName("product-title")[0].innerHTML = API.products[i].title;
        product_item.getElementsByClassName("product-image")[0].src = API.products[i].img;
        product_item.getElementsByClassName("price-number")[0].innerHTML = API.products[i].price.toLocaleString('ru');

        product_item.getElementsByClassName("btn-checkout buy")[0].setAttribute('data-id', API.products[i].id);
        product_item.getElementsByClassName("btn-checkout add-basket")[0].setAttribute('data-id', API.products[i].id);
    }
}
window.onload = main;

//добавления информации о товаре в корзино по его data-id
function add_basket(elem) {
    if (document.getElementById("modal-basket").style.display == "") {
        setTimeout(() => document.getElementById("modal-basket").style.display = "none", 10000);
    } else {
        document.getElementById("modal-basket").style.display = "";
    }
    let product_id = elem.getAttribute('data-id') - 1;
    document.getElementsByClassName("image-basket")[0].src = API.products[product_id].img;
    document.getElementsByClassName("details-basket")[0].getElementsByClassName("product-title")[0].innerHTML = API.products[product_id].title;
    document.getElementsByClassName("details-basket")[0].getElementsByClassName("price-number")[0].innerHTML = API.products[product_id].price.toLocaleString('ru');;
}

function buy(elem) {
    document.getElementById("modal-buy").style.display = "";
    let product_id = elem.getAttribute('data-id') - 1;
    document.getElementsByClassName("image-buy")[0].src = API.products[product_id].img;
    document.getElementsByClassName("buy-product-title")[0].innerHTML = API.products[product_id].title;
    document.getElementsByClassName("img-price")[0].getElementsByClassName("price-number")[0].innerHTML = API.products[product_id].price.toLocaleString('ru');;
}

function close_buy() {
    document.getElementById("modal-buy").style.display = "none";
}









/*function buy() {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=300,left=100,top=100`;

    open('./popup/buy.html', 'buy', params);
}*/