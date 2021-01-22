
function showPopupOrder(idOfListing) {
    document.querySelector(".product-listing-wrapper").insertAdjacentHTML(
        "afterbegin",
        `<div class="popup-order">
        <div class="popup-order-body">
            <div class="popup-order-title">${API.products[idOfListing].title}</div>
            <button class="popup-order-close">X</button>
            <div class="popup-order-content">
                <div class="popup-order-img-and-price">
                    <img src="${API.products[idOfListing].img}" class="popup-order-img"/>
                    <div class="popup-order-price">${API.products[idOfListing].price.toLocaleString()} руб.</div>
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
    let popupOrderCloseButton = document.querySelector('.popup-order-close');
    popupOrderCloseButton.addEventListener("click", function () {
        document.querySelector(".popup-order").remove();
    });
}



