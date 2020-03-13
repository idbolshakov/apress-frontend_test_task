const products = API.products
const root = document.querySelector('.product-listing-wrapper')

let thousandSeparator = str => {
    let parts = (str + '').split(' '),
        main = parts[0],
        length = main.length,
        output = '',
        i = length - 1;

    while(i >= 0) {
        output = main.charAt(i) + output;
        if ((length - i) % 3 === 0 && i > 0)
            output = ' ' + output;

        --i;
    }

    if (parts.length > 1)
        output += '.' + parts[1];

    return output;
};

const productTemplate = product => {
    return (`
        <div class="product">
            <img class="product__img" src=${product.img} alt="Изображение">
            <div class="product__information">
                <h4 class="information__title">${product.title}</h4>
                <p class="information__price">${thousandSeparator(product.price)+ ' руб.'}</p>
            </div>
            <div class="product__buttons">
                <button class="button button--order" id=${product.id}>Заказать</button>
                <button class="button button--to-basket" id="${product.id + ' basket'}" >В карзину</button>
            </div>
        </div>
    `)
}

const popUpOrderTemplate = product => {
    return (`
        <div class="pop-up--order">
            <button class="order__exit">x</button>
            <h4 class="order__title">${product.title}</h4>
            <div class="order-wrapper">
                <div class="order-wrapper__left">
                    <img class="order__img" src=${product.img} alt="Изображение" sizes=300>
                    <p class="order__price">${thousandSeparator(product.price)+ ' руб.'}</p>
                </div>
                <div class="order-wrapper__right">
                    <p class="order__comment-heading">Комментрий к заказу:</p>
                    <textarea cols="65" rows="7" class="order__comment"></textarea>

                </div>
            </div>
            <div class="order__phone">
                    <p class="phone__heading">Ваш телефон*:</p>
                    <input class="phone-input" type="phone">
            </div>
            <button class="button button--submit">Отправить</button>
        </div>
    `)
}

const popUpBasketTemplate = product => {
    return (`
        <div class="pop-up--to-basket">
    <div class="basket__title">
        <p class="title">Вы добавили в корзину:</p>
    </div>
    <div class="basket__product">
        <img src=${product.img} alt="Изображение" class="basket__img">
        <div class="product__about">
            <p class="product__title">${product.title}</p>
            <div class="product__price">${thousandSeparator(product.price)+ ' руб.'}</div>
        </div>
        <button class="product__exit">x</button>
    </div>
    <button class="button basket__to-basket">Перейти в карзину</button>
</div>
    `)
}

root.innerHTML = products.map(product => productTemplate(product)).join('')

const orderButtons = document.querySelectorAll('.button--order')
const toBasketButtons = document.querySelectorAll('.button--to-basket')

const buttonsHandler = (buttons, templateClass, templateFunction, exitClass, position) => {
    buttons.forEach(btn => btn.addEventListener('click', () => {
        if (document.querySelector(`.${templateClass}`))
            document.querySelector(`.${templateClass}`).parentElement.remove()

        const popup = templateFunction(products[btn.id.split(' ')[0] - 1])
        const popup_position = document.createElement(`div`)

        popup_position.innerHTML = popup
        document.querySelector(position).append(popup_position)

        document.querySelector(`.${exitClass}`).addEventListener('click', () => {
            document.querySelector(`.${templateClass}`).parentElement.remove()
        })
    }))
}


buttonsHandler(orderButtons, 'pop-up--order', popUpOrderTemplate, 'order__exit', 'main')
buttonsHandler(toBasketButtons, 'pop-up--to-basket', popUpBasketTemplate, 'product__exit', 'body')
