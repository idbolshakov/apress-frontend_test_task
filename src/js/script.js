document.body.onload = function () {

    // Прелоадер
    setTimeout(function () {

        const preloader = document.getElementById('preloader');

        if (!preloader.classList.contains('showDoc')) {
            preloader.classList.add('showDoc');
        }

    }, 500);


    // Запросы на сервер для получения товаров
    const titles = document.querySelectorAll('.product-listing-card__descr'),
        prices = document.querySelectorAll('.product-listing-card__price'),
        images = document.querySelectorAll('.popap-card-img');

    // Получаю данные с сервера
    fetch('./api/products.js')
        .then(function (response) {
            // Проверяю на ошибку - ответил ли сервер
            if (response.status !== 200) {
                throw new Error('status network not 200');
            } // получаю данные 
            return (response.text());
        })
        // Достаю их в переменную
        .then((data) => {
            const _PRODUCTS = API.products;

            // Перебираю все карточки товара, для замены содержимого
            for (let i = 0; i < titles.length; i++) {
                titles[i].textContent = _PRODUCTS[i].title; // Описание товара
                prices[i].textContent = '';

                // Получил все цены
                let price = _PRODUCTS[i].price;
                // Разбил числа на массив чисел
                let arr = String(price).split('');
                // Развернул его
                arr = arr.reverse();
                // Создал пустой массив для последующей записи
                let newArr = [];

                // Перебрал массив и постав пробел после каждого 3 знака
                for (let i = 0; i < arr.length; i++) {
                    if (i === 3) {
                        newArr.push(`${arr[i]} `);
                        continue;
                    } // Запушил в новый массив
                    newArr.push(arr[i]);
                }
                // Развернул обратно
                newArr = newArr.reverse();
                // Записал на страницу
                for (let key in newArr) {
                    prices[i].textContent += newArr[key];
                }
                // Добавил рубли в цене
                prices[i].textContent += ' руб.';
                // prices[i].textContent = `${_PRODUCTS[i].price} руб`; // Цена
                images[i].src = _PRODUCTS[i].img; // Картинка
            }
        }) // В случае ошибки выведет ее в консоль
        .catch((error) => console.log(error));

};


let btnsBuy = document.querySelectorAll('.btn_buy'), // Все кнопки заказать на странице
    btnsBasket = document.querySelectorAll('.btn_basket'), // Все кнопки в корзину на странице
    btnCloseBuy = document.querySelector('.popap-close-buy-form'), // Кнопка закрыть окно
    modalBuy = document.querySelector('.popap-buy-ovarlay'), // Затемнение за окном
    modalTitle = document.querySelector('.popap-buy__title'), // Описание
    modalPrice = document.querySelector('.popap-buy__price'), // Цена
    modalImg = document.querySelector('.popap-buy-img'), // Картинка
    basketCounter = document.querySelector('.popap-basket-counter'), // Картинка
    btnInBasket = document.querySelector('.btn_basket-big'), // Кнопка в корзину 
    popapInfo = document.querySelector('.popap-info'); // Товар успешно добавлен - модалка


// Показать модальное окно - Ваш заказ
const showModalBuy = function () {
    // Нашел родителя кнопки, и потом всю карточку
    let block = this.parentNode.parentNode;
    // Внутри карточки нашел нужные данные  
    title = block.querySelector('.product-listing-card__descr');
    price = block.querySelector('.product-listing-card__price');
    img = block.querySelector('.popap-card-img');
    // Заменил содержимое перед выховом окна
    modalTitle.textContent = title.textContent;
    modalPrice.textContent = price.textContent;
    modalImg.src = img.src;
    // Вызвал окно
    modalBuy.classList.add('modal-active');
    document.body.style.overflow = 'hidden';

};

// Счетчик товаров в корзине
let count = 0;

// Закинуть товар в корзину
const toBasket = function () {

    // Нашел родителя кнопки, и потом всю карточку
    let block = this.parentNode.parentNode;
    // Внутри карточки нашел нужные данные  
    title = block.querySelector('.product-listing-card__descr');
    price = block.querySelector('.product-listing-card__price');
    img = block.querySelector('.popap-card-img');

    // Создал карточку - присвоил классы
    // Основной блок
    const wrapperCardsBasket = document.querySelector('.popap-basket__products'); // Блок с карточками - обертка для всех

    let cardBlock = document.createElement('div');
    cardBlock.classList.add('popap-basket-card');
    // Картинка обертка
    let imgWrap = document.createElement('div');
    imgWrap.classList.add('popap-basket-card__img');
    // Сама картинка
    let basketImg = document.createElement('img');
    basketImg.classList.add('popap-basket-card-img');
    // Описание карточки блок
    let descrBlock = document.createElement('div');
    descrBlock.classList.add('popap-basket-card__descr');
    // Само описание текс
    let basketTitle = document.createElement('div');
    basketTitle.classList.add('popap-basket-card__title');
    // Цена
    let basketPrice = document.createElement('span');
    basketPrice.classList.add('popap-basket-card__price');
    // Кнопка закрыть
    let btnClose = document.createElement('span');
    btnClose.classList.add('popap-close-basket');
    btnClose.innerHTML = '&#10006;';

    // Добавил к карточке обортку с картинкой
    cardBlock.append(imgWrap);
    // Сама картинка внутри обертки
    imgWrap.append(basketImg);
    // Блок с описанием
    cardBlock.append(descrBlock);
    // Внутри само описание
    descrBlock.append(basketTitle);
    // Цена
    descrBlock.append(basketPrice);
    // Кнопка закрыть
    cardBlock.append(btnClose);

    // Заменил содержимое перед показом окна
    basketTitle.textContent = title.textContent;
    basketPrice.textContent = price.textContent;
    basketImg.src = img.src;

    // Добавил карточку на страницу
    wrapperCardsBasket.append(cardBlock);

    // Показал кнопку - перейти корзину и поменял цвет счетчика
    if (count < 1) {
        btnInBasket.style.display = 'block';
        basketCounter.classList.add('count-active');
    }
    // Добавил счетчик
    count++;

    // Обновил счетчик на странице
    basketCounter.textContent = count;
    // Добавил на кнопку функцию удаления карточки 
    btnClose.addEventListener('click', deleteCardBasket);

    // Показываю уведомление, что товар успешно добавлен
    popapInfo.style.display = 'flex';
    // Скрываю уведомление через 2 секунды
    setTimeout(function () {
        popapInfo.style.display = 'none';
    }, 2000);

};

// Удалить карточку товара из корзины
const deleteCardBasket = function () {
    // Нашел всю карточку 
    let card = this.parentNode;
    // Удалил ее
    card.remove();
    // Убавил счетчик
    count--;
    // Обновил счетчик на странице
    basketCounter.textContent = count;

    if (count < 1) {
        btnInBasket.style.display = 'none';
        basketCounter.classList.remove('count-active');
    }
};

// Закрыл окно на кнопку Закрыть 
const hideModalBuy = function () {
    modalBuy.classList.remove('modal-active');
    document.body.style.overflow = '';
    // Очистил содержимое полей
    modalTitle.textContent = '';
    modalPrice.textContent = '';
    modalImg.src = '';
};

// Кнопка закрытия 
btnCloseBuy.addEventListener('click', hideModalBuy);
// Все кнопки Заказать
btnsBuy.forEach(item => {
    item.addEventListener('click', showModalBuy);
});
// Все кнопки В корзину
btnsBasket.forEach(item => {
    item.addEventListener('click', toBasket);
});