const createList = () => {
    const a = document.querySelector('.main-page') 
    const list = document.createElement("div")
    list.className = "main-page__list"
    const createListItem = (img, price, title, id) => {
    list.insertAdjacentHTML('beforeend', 
        `<div class="list-item">
            <img class="img" src="${img}"></img>
            <div class="list-item__txt">
                <div class="txt txt_grey">${title}</div>
                <div class="txt txt_grey txt_bold mg_t">${numberWithSpaces(price)} руб.</div>
            </div>
            <div class="list-item__button">
                <button class="btn btn_contrast btn_order" id="buttonToOrderId-${id}">Заказать</button>
                <button class="btn btn_secondary btn_add-to-cart" id="buttonToCartId-${id}">В корзину</button>
            </div>
        </div>`);
    }
    API.products.forEach(product =>  
        createListItem(product.img, product.price, product.title, product.id)
    )
    a.appendChild(list)
}
document.addEventListener("DOMContentLoaded", () => {
    createList()
});
