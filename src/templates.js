function inputProductTemplate(item) {
    return `
            <img alt="${item.title}" title="${item.title}" src="${item.img}">
            <div class="text">
                <p>${item.title}</p>
                <a>${(+item.price).toLocaleString()} руб.</a>
            </div>
            <div class="buttons">
                <button name="buy" onclick="clickOnBuy(${item.id})">Заказать</button>
                <button name="inCart" onclick="clickOnCart(${item.id})">В корзину</button>
            </div>
            `;
}

function inputCartTemplate(item) {
    return `
            <div class="up"></div>
            <p>Вы добавили в корзину:</p>
            <div class="content">
                <img class="image" alt="${item.title}" title="${item.title}" src="${item.img}">
                <div class="text">
                    <a>${item.title}</a>
                    <br>
                    <span>${(+item.price).toLocaleString()} руб.</span>
                </div>
                <img src="assets/images/cart-x.png" onclick="hiddenPopup()">
            </div>
            <button onclick="hiddenPopup()">Перейти в корзину</button>
            `
}

function inputBuyTemplate(item) {
    return `
            <img class="close" src="assets/images/close.png" onclick="hiddenPopup()">
            <h4>${item.title}</h4>
            <div class="content">
            <div>
                <img class="image" alt="${item.title}" title="${item.title}" src="${item.img}">
                <span>${(+item.price).toLocaleString()} руб.</span>
                <a></a>
            </div>
            <div class="text">
                <div class="line"></div>
                <a>Комментарий к заказу:</a>
                <textarea></textarea>
            </div>
            </div>
            <div class="row">
                <a>Ваш телефон *:</a>
                <div>
                    <input type="tel" name="tel" >
                    <br>
                    <button onclick="hiddenPopup()">Отправить</button>
                </div>
            </div>
            `;
}
