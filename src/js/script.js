for (let product of API.products) {
  document.querySelector(".product-listing-wrapper").insertAdjacentHTML(
    "afterBegin",
    `
    <div class="product__item">
      <img class="product__item-image" src="${product.img}" />
      <div class="product__item-desc">
        <p class="product__item-title">${product.title}</p>
        <span class="product__item-price">${product.price} руб.</span>
      </div>
      <div class="product__item-buttons">
        <button class="product__item-button product__item-button--order" type="button">Заказать</button>
        <button class="product__item-button product__item-button--busket" type="button">В корзину</button>
      </div>
    </div>
`
  );
}
let productsArray = [];
let currentBusketProduct;
for (let i in API.products.reverse()) {
  document.querySelectorAll(".product__item-button--order")[i].addEventListener("click", () => {
    let currentOrderProduct = new Product(API.products[i].title, API.products[i].price, API.products[i].img);
    document.querySelector(".product-listing-wrapper").insertAdjacentHTML(
      "beforeBegin",
      `
      <div class="popup-wrapper">
        <div class="popup">
          <p class="popup__product-title">${currentOrderProduct.title}</p>
          <span class="popup__close-btn" onclick="Product.removePopup()">&#10008;</span>
          <div class="popup__product-desc">
            <img class="popup__product-image" src="${currentOrderProduct.image}">
            <span class="popup__product-price">${currentOrderProduct.price} руб.</span>
          </div>
          <form class="popup__form">
            <div class="popup__form-field">
              <label class="popup__form-field-name" for="comment">Комментарий <br/>к заказу:</label>
              <textarea class="popup__form-comment" name="comment" id="comment"></textarea>
            </div>
            <div class="popup__form-field popup__form-field--phone">
              <label class="popup__form-field-name" for="phone">Ваш телефон*:</label>
              <input class="popup__form-phone" type="tel" id="phone" name="phone" required>
            </div>
            <button class="popup__form-submit" type="submit">Отправить</button>
          </form>
        </div>
      </div>
      `
    );
  });
  document.querySelectorAll(".product__item-button--busket")[i].addEventListener("click", () => {
    currentBusketProduct = new Product(API.products[i].title, API.products[i].price, API.products[i].img, i);
    if (!productsArray.length) {
      document.querySelector(".product-listing-wrapper").insertAdjacentHTML(
        "beforeBegin",
        `
        <div class="busket-wrapper">
          <div class="busket">
            <p class="busket__title">Вы добавили в корзину</p>
            <button class="busket__btn" type="button">Перейти в корзину</button>
          </div>
        </div>
        `
      );
    }
    productsArray.push(new Product(API.products[i].title, API.products[i].price, API.products[i].img, i));
    document.querySelector(".busket__title").insertAdjacentHTML(
      "afterend",
      `
        <div class="busket__item">
          <div class="busket__item-image">
            <img class="busket__item-image" src="${currentBusketProduct.image}">
          </div>
          <div class="busket__item-desc">
            <p class="busket__item-title">${currentBusketProduct.title}</p>
            <span class="busket__item-price">${currentBusketProduct.price} руб.</span>
          </div>
          <span class="busket__delete-btn" onclick="this.parentNode.remove();productsArray.splice(productsArray.findIndex(item => Number(item.id) === ${i}), 1)">&#10008;</span>
        </div>
        `
    );

    for (let item of document.querySelectorAll(".busket__delete-btn")) {
      item.addEventListener("click", () => {
        if (!productsArray.length) {
          document.querySelector(".busket-wrapper").remove();
        }
      });
    }
  });
}
