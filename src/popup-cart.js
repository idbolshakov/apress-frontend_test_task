function showPopupCart(idOfListing) {
    const product = API.products[idOfListing];
    const html = `<div class="popup-cart-container">
        <div class="popup-cart-title"><p>Вы добавили в корзину:</p></div>
        <div class="popup-cart-content">
            <img src="${product.img}" class="popup-cart-order-img" alt="${product.title}"/>
            <div class="popup-cart-order-detail">
                <div class="popup-cart-order-title">${product.title}</div>
                <div class="popup-cart-order-price">${product.price.toLocaleString()} руб.</div>
            </div>

        </div>
        <button type ='button' class="popup-cart-button red-button">Перейти в корзину</button>
        <button  type ='button' class="popup-cart-close">X</button>
    </div>`
    document.querySelector(".popup-cart").innerHTML = html;
    const popupCartCloseButton = document.querySelector('.popup-cart-close');
    popupCartCloseButton.addEventListener("click", function () {
        document.querySelector(".popup-cart-container").remove();
    });
}