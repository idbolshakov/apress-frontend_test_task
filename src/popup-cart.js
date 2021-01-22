function showPopupCart(idOfListing) {
    document.querySelector(".product-listing-wrapper").insertAdjacentHTML(
        "afterbegin",
        `<div class="popup-cart-container">
        <div class="popup-cart-title"><p>Вы добавили в корзину:</p></div>
        <div class="popup-cart-content">
            <img src="${API.products[idOfListing].img}" class="popup-cart-order-img" />
            <div class="popup-cart-order-detail">
                <div class="popup-cart-order-title">${API.products[idOfListing].title}</div>
                <div class="popup-cart-order-price">${API.products[idOfListing].price.toLocaleString()} руб.</div>
            </div>

        </div>
        <button class="popup-cart-button red-button">Перейти в корзину</button>
        <button class="popup-cart-close">X</button>
    </div>`
    );
    let popupCartCloseButton = document.querySelector('.popup-cart-close');
    popupCartCloseButton.addEventListener("click", function () {
        document.querySelector(".popup-cart-container").remove();
    });
}