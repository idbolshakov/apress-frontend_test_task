function inputProductTemplate(item) {
    return `
            <img alt="${item.title}" title="${item.title}" src="${item.img}">
            <div class="text">
                <p>${item.title}</p>
                <a>${(+item.price).toLocaleString()} руб.</a>
            </div>
            <div class="buttons">
                <button name="buy" class="buyButton" id="${item.id}" >Заказать</button>
                <button name="inCart" class="inCartButton" id="${item.id}" >В корзину</button>
            </div>
            `;
}

function inputCartTemplate(item) {
    return `
            <div class="up"></div>
            <p>Вы добавили в корзину:</p>
            <div class="content">
                <img alt="${item.title}" title="${item.title}" src="${item.img}">
                <div class="text">
                    <a>${item.title}</a>
                    <br>
                    <span>${(+item.price).toLocaleString()} руб.</span>
                </div>
                
                <svg class="close closeClick" viewBox="0 0 365.71733 365">
                    <g fill="#CD2758">
                        <path d="m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0"/><path d="m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0"/>
                    </g>
                </svg>
            </div>
            <button class="closeClick">Перейти в корзину</button>
            `
}

function inputBuyTemplate(item) {
    return `
            
            <svg class="close closeClick" viewBox="0 0 413.348 413.348">
                <g fill="#444">
                    <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/>
                </g>
            </svg>
            <h4>${item.title}</h4>
            <div class="content">
            <div>
                <img alt="${item.title}" title="${item.title}" src="${item.img}">
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
                    <button class="closeClick">Отправить</button>
                </div>
            </div>
            `;
}
