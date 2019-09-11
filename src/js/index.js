'use strict'


function ProductModals(types, img, title, price) {
    //Точка входа
    const main = document.querySelector('.product-listing-wrapper')
    //Создаём модальное окно
    const modal = document.createElement('div')
    types === 'order' ? modal.className += 'modal' : modal.className += 'modal-basket'

    //html шаблоны модальных окон
    const Modal =
        "<div class='container modal__position'>"+
            "<div class='modal_wrap'>"+
                "<div class='modal_close'>"+
                    "<svg xmlns='http://www.w3.org/2000/svg' width='12.414' height='12.414' viewBox='0 0 12.414 12.414'>"+
                    "<g id='cancell' transform='translate(-931.793 -269.793)'>"+
                        "<line id='Line_1' data-name='Line 1' x2='11' y2='11' transform='translate(932.5 270.5)' fill='none' stroke='#b7b7b7' stroke-linecap='round' stroke-width='1'/>"+
                        "<line id='Line_2' data-name='Line 2' x1='11' y2='11' transform='translate(932.5 270.5)' fill='none' stroke='#b7b7b7' stroke-linecap='round' stroke-width='1'/>"+
                    "</g>"+
                    "</svg>"+
                "</div>"+
                "<div class='row'>"+
                "<div class='col'>"+
                    "<div class='modal_header'>"+title+"</div>"+
                "</div>"+
                "</div>"+
                "<form>"+
                "<div class='row'>"+
                    "<div class='col-3'>"+
                        "<img class='modal_image' src='"+img+"' alt='"+title+"'>"+
                    "<div class='modal_price'>"+price+"руб.</div>"+
                    "</div>"+
                    "<div class='col-9'>"+
                    "<div class='modal_comment'>"+
                        "<div class='modal_comment-label'>Комментарий к заказу:</div>"+
                        "<textarea name='textarea' class='modal_comment-input' /></textarea>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
                "<div class='row modal__contacts'>"+
                    "<div class='col-3'>"+
                    "<div class='modal_phone-desc'>Ваш телефон*:</div>"+
                    "</div>"+
                    "<div class='col-9'>"+
                    "<input name='phone' type='text' class='modal_phone-input' />"+
                    "</div>"+
                "</div>"+
                "<div class='row model__send'>"+
                    "<div class='col-3'></div>"+
                    "<div class='col-9'>"+
                    "<button class='modal_submit'>Отправить</button>"+
                    "</div>"+
                "</div>"+
                "</form>"+
            "</div>"+
        "</div>"

    const ModalBasket =
        "<div class='modal-basket_header'>"+
        "<h3 class='modal-basket_header-h3'>"+
            "Вы добавили в корзину:"+
        "</h3>"+
        "</div>"+
        "<div class='modal-basket_body'>"+
        "<div class='modal-basket_close'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='12.414' height='12.414' viewBox='0 0 12.414 12.414'>"+
            "<g id='cancell' transform='translate(-931.793 -269.793)'>"+
                "<line id='Line_1' data-name='Line 1' x2='11' y2='11' transform='translate(932.5 270.5)' fill='none'"+
                "stroke='#D60D0D' stroke-linecap='round' stroke-width='1' />"+
                "<line id='Line_2' data-name='Line 2' x1='11' y2='11' transform='translate(932.5 270.5)' fill='none'"+
                "stroke='#D60D0D' stroke-linecap='round' stroke-width='1' />"+
            "</g>"+
            "</svg>"+
        "</div>"+
            "<img class='modal-basket_image' src='"+img+"' alt='"+title+"' />"+
        "<div class='modal-basket_body__wrap'>"+
            "<div class='modal-basket_title'>"+title+"</div>"+
            "<div class='modal-basket_price'>"+price+" руб.</div>"+
        "</div>"+
        "</div>"+
        "<div class='modal-basket_footer'>"+
        "<button class='modal-basket_button'>Перейти в корзину</button>"+
        "</div>"

    //Добавление контента
    types === 'order' ? modal.innerHTML = Modal : modal.innerHTML = ModalBasket
    //Рендеринг модального окна
    main.appendChild(modal)

    //закрыть окно по клику вне области
    modal.addEventListener('click', function(e) {
        if(e.target === modal) {
            modal.parentNode.removeChild(modal)
        }
    })

    //Удаление первого модального окна при закрытии
    function HandleClick(e) {
        e.preventDefault()
        modal.parentNode.removeChild(modal)
    }

    const ButtonClose = types === 'order' ? modal.querySelector('.modal_close') :
        modal.querySelector('.modal-basket_close')
    const ButtonSubmit = types === 'order' ? modal.querySelector('.modal_submit') : modal.querySelector('.modal-basket_button')

    //закрыть окно по клику на крестик
    ButtonClose.onclick = HandleClick
    //закрыть окно по клику на submit
    ButtonSubmit.onclick = HandleClick
}

//функция листинга товаров
function ProductListing(img, title, price) {
    //создаём секцию
    const row = document.createElement('section')
    row.className += 'row product product__position'

    //html шаблон секции
    const product =
            "<div class='col-3'>"+
                "<img class='product_image' src='"+img+"' alt='"+title+"'>"+
            "</div>"+
            "<div class='col-7'>"+
                "<h3 class='product_header'>"+title+"</h3>"+
                "<div class='product_price'>"+price+" руб.</div>"+
            "</div>"+
            "<div class='col-2 product_button'>"+
                "<button class='product_button__order'>Заказать</button>"+
                "<button class='product_button__basket'>В корзину</button>"+
            "</div>"
    //добавление контента в row
    row.innerHTML = product

    function handleClick(types) {
        ProductModals(types, img, title, price)
    }

    //прослушивание событий клика по кнопе ордер 
    row.querySelector('.product_button__order').onclick = function () { handleClick('order')}

    //прослушивание событий клика по кнопе корзины
    row.querySelector('.product_button__basket').onclick = function () { handleClick('basket')}

    return row
}

function Start(products) {
    //Точка входа
    const main = document.querySelector('.product-listing-wrapper')
    //Создание контейнера для контента
    const container = document.createElement('div')
    container.classList.add('container')
    const template =
        "<section class='row'>"+
            "<div class='col'>"+
                "<h1 class='header_h1'>Список товаров</h1>"+
            "</div>"+
        "</section>"
    //добавление контента в контейнер
    container.innerHTML = template
    //добавление контейнера
    main.appendChild(container)

    // Листинг товаров из API
    for (let i = 0; i < products.length; i++) {
        container.appendChild(ProductListing(products[i].img, products[i].title, products[i].price))
    }
}

function ready () {
    Start(API.products)
}

document.readyState === 'complete' ? Core(API) : document.addEventListener('DOMContentLoaded', ready)
