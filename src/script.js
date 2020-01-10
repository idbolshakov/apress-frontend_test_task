document.addEventListener('DOMContentLoaded', function(){
    loadProducts();
});

// Загрузка всех продуктов
function loadProducts() {

    const productList = document.getElementById("productList");

    API.products.forEach( (item) => {

        let div = document.createElement('div');
        div.className = 'product';

        // шаблон карточки продукта
        div.innerHTML = `
                        <div class="image" style="background-image: url('${item.img}');">
                        </div>
                        <div class="text">
                            <p>${item.title}</p>
                            <a>${(+item.price).toLocaleString()} руб.</a>
                        </div>
                        <div class="buttons">
                            <button name="buy" onclick="clickOnBuy(${item.id})">Заказать</button>
                            <button name="inCart" onclick="clickOnCart(${item.id})">В корзину</button>
                        </div>
                        `;
        productList.appendChild(div);
    })
}

function clickOnBuy(id) {

    const popup = document.getElementById("popupBuy");
    const cover = document.getElementById("cover");
    popup.innerHTML = '';

    let div = document.createElement('div');
    div.className = 'container';

    const item = API.products.find( (element) => element.id === id );

    // шаблон всплывающего окна покупки
    div.innerHTML = `
                    <img src="assets/images/close.png" onclick="hiddenPopup()">
                    <h4>${item.title}</h4>
                    <div class="content">
                    <div>
                        <div class="image" style="background-image: url('${item.img}')"></div>
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

    popup.appendChild(div);
    popup.hidden = false;
    cover.hidden = false;
    
}

function clickOnCart(id) {
    const popup = document.getElementById("popupCart");
    const cover = document.getElementById("cover");
    popup.innerHTML = '';

    let div = document.createElement('div');
    div.className = 'cart';

    const item = API.products.find( (element) => element.id === id );

    // шаблон всплывающего окна корзины
    div.innerHTML = `
                    <div class="up"></div>
                    <p>Вы добавили в корзину:</p>
                    <div class="content">
                        <div class="image" style="background-image: url('${item.img}')"></div>
                            <div class="text">
                            <a>${item.title}</a>
                            <br>
                            <span>${(+item.price).toLocaleString()} руб.</span>
                        </div>
                        <img src="assets/images/cart-x.png" onclick="hiddenPopup()">
                    </div>
                    <button onclick="hiddenPopup()">Перейти в корзину</button>
                    `;

    popup.appendChild(div);
    popup.hidden = false;
    cover.hidden = false;

}

function hiddenPopup() {
    document.getElementById("popupCart").hidden = true;
    document.getElementById("popupBuy").hidden = true;
    document.getElementById("cover").hidden = true;
}

function log(str) {
    console.log(str);
}

