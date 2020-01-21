const basketProducts = [];

function renderProducts() {
  const products = document.querySelector(".products")

  API.products.forEach(productData => {
    products.insertAdjacentHTML(
      "beforeend",
      `
      <div class="product">
        <img class="product-img" src="${productData.img}">
  
        <div class="product-data">
          <div class="product-data-title">${productData.title}</div>
          <div class="product-data-price">${productData.price} руб.</div>
        </div>
  
        <div class="product-buttons">
          <button class="product-buttons-buy" data-action="renderOrderModal" id="${productData.id}">Заказать</button>
          <button class="product-buttons-basket" data-action="addInBasket" id="${productData.id}">В коризну</button>
        </div>
      `
    );
  });

  products.addEventListener("click", event => {
    const action = event.target.dataset.action;
    if (!action) return

    if (action === "renderOrderModal") {
      renderOrderModal(event);
    } else if (action === "addInBasket") {
      addInBasket(event);
    }
  });
}

function renderOrderModal(event) {
  document.querySelector(".modal-dialog").classList.add("show");
  const selectedItem = API.products.find(product => product.id === +event.target.id);

  document.querySelector(".order-content").innerHTML = `
    <div class="order-title">
      <div class="order-title-text">
        <h3>${selectedItem.title}</h3>
      </div>
      <button class="order-close-button">X</button>
    </div>

    <div class="order-data">
      <div class="order-data-image">
        <img class="order-data-image-img" src="${selectedItem.img}">
        <span class="order-data-price">${selectedItem.price} руб.</span>
      </div>

      <div class="order-data-comments">
        <span>Комменатрий к заказу:</span>
        <textarea class="order-comments-input" rows="8"></textarea>
      </div>
    </div>

    <div class="order-phone">
      <div class="order-data-phone">
        <span>Ваш телефон *:</span>
        <input class="order-phone-input" type="tel"></input>
      </div>
    </div>

    <div class="order-button">
      <button class="order-send-button">Отправить</button>
    </div>
  `;

  document.querySelector(".order-close-button").addEventListener("click", () => {
    document.querySelector(".modal-dialog").classList.remove("show");
  });
}

function addInBasket(event) {
  const selectedItem = API.products.find(product => product.id === +event.target.id);
  basketProducts.push(selectedItem);
  document.querySelector(".tooltip").classList.add("show");
  renderBasket(basketProducts);
}

function renderBasket(items) {
  document.querySelector(".content-elements").innerHTML = "";

  if (items.length) {
    items.forEach(product => {
      document.querySelector(".content-elements").insertAdjacentHTML(
        "beforeend",
        `
          <div class="content-elements-item">
            <img class="elements-item-img" src="${product.img}">
            <div class="elements-item-data">
              <div class="item-data-title">${product.title}</div>
              <button class="item-data-close-button" id="${product.id}">x</button>
              <div class="item-data-price">${product.price} руб.</div>
            </div>
          </div>
        `
      );
    });
  } else {
    document.querySelector(".tooltip").classList.remove("show");
  }

  [...document.getElementsByClassName("item-data-close-button")].forEach(button => {
    button.addEventListener("click", event => {
      const selectedIndex = basketProducts.findIndex(product => product.id === +event.target.id);
      basketProducts.splice(selectedIndex, 1);
      renderBasket(basketProducts);
    });
  });
}

window.onload = () => {
  renderProducts();
};
