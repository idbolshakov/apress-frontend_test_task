
function showPopupOrder(idOfListing) {
    const product = API.products[idOfListing];
    document.querySelector(".product-listing-wrapper").insertAdjacentHTML(
        "beforebegin",
        `<div class="popup-order">
        <div class="popup-order-body">
            <div class="popup-order-title">${product.title}</div>
            <button class="popup-order-close">X</button>
            <div class="popup-order-content">
                <div class="popup-order-img-and-price">
                    <img src="${product.img}" class="popup-order-img" alt="${product.title}"/>
                    <div class="popup-order-price">${product.price.toLocaleString()} руб.</div>
                </div>
                <form class="popup-order-form" action="#">
                    <div class="comment">
                        <label for="comment">Комментарий <br>к заказу:</label>
                        <textarea class="popup-order-comment" name="comment"></textarea>
                    </div>
                    <div class="position">
                        <div class="phone">
                            <label for="number">Ваш телефон*:</label>
                            <input class="phone-number" type="tel" name="number" required/>
                        </div>
                        <input class="popup-order-button red-button" type="submit" value="Отправить"/>
                    </div>
                </form>

            </div>
        </div>
    </div>`
    );
    const popupOrderCloseButton = document.querySelector('.popup-order-close');
    popupOrderCloseButton.addEventListener("click", function () {
        document.querySelector(".popup-order").remove();
    });
}



