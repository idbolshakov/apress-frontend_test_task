// DOM Queries
const productList = document.querySelector(".product-listing-wrapper");
const cartList = document.querySelector(".cart-popup-list");
const cartPopup = document.querySelector(".cart-popup");
const cartIcon = document.querySelector(".product-cart-img");
const cartCounter = document.querySelector(".cart-counter");
const orderPopup = document.querySelector(".order-popup");
const senOrderBtn = document.querySelector(".send-order");

class Catalog {
  constructor() {
    this.products = API.products;
  }

  getItemsList() {
    const itemsArray = document.createElement("ul");
    itemsArray.classList.add("product-listing-content");

    this.products.forEach(({ id, title, price, img }) => {
      let productTemplate = `
      <li class="product-item" data-id=${id}>
          <div class="product-item-content">
            <div class="product-item-img"><img src="${img}" alt="sofa" /></div>
            <div class="product-item-description">
              <h3>${title}</h3>
              <p>${price} руб.</p>
            </div>
          </div>
          <div class="product-item-buttons">
            <button class="order-btn">Заказать</button>
            <button class="go-to-cart-btn">В корзину</button>
          </div>
        </li>
      `;
      itemsArray.innerHTML += productTemplate;
    });

    return itemsArray;
  }

  renderItemsList() {
    const itemsList = this.getItemsList();
    productList.appendChild(itemsList);
  }
}

class Cart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.comment = "";
    this.phone = "";
  }

  renderItems() {
    if (this.items.length === 0) {
      cartList.innerHTML = `<div class="cart-empty"><h3>Корзина пуста</h3></div>`;
      return;
    }
    cartList.innerHTML = "";
    const cartItems = [];
    this.items.forEach(({ id, title, price, img, quantity }) => {
      let cartItem = document.createElement("li");
      cartItem.classList.add("cart-item");
      cartItem.setAttribute("data-id", id);
      let cartItemTemplate = `
        <div class="product-item-content in-cart">
          <div class="product-item-img in-cart">
            <img src="${img}" alt="sofa" />
          </div>
          <div class="product-item-description in-cart">
            <h3>${title}</h3>
            <p> ${quantity} x ${price} руб.</p>
          </div>
        </div>
        <div class="product-item-buttons in-cart">
          <button class="delete-btn">Удалить</button>
        </div>
      `;
      cartItem.innerHTML = cartItemTemplate;
      cartItems.push(cartItem);
    });
    cartItems.forEach((item) => cartList.appendChild(item));
  }
  addItem(item) {
    let existingItem = this.items.find(
      (itemInCart) => itemInCart.id === item.id
    );
    if (existingItem) {
      this.updateQuantity(item.id);
    } else {
      this.items.push(item);
      this.renderItems();
      this.setCounter();
      cartPopup.classList.add("visible");
    }
  }
  updateQuantity(id) {
    this.items = this.items.map((itemInCart) => {
      if (itemInCart.id === id) {
        let quantity = itemInCart.quantity;
        return { ...itemInCart, quantity: ++quantity };
      } else return itemInCart;
    });
    this.renderItems();
    cartPopup.classList.add("visible");
  }
  deleteItem(id) {
    this.items = [...this.items.filter((item) => item.id !== id)];
    this.renderItems();
    this.setCounter();
  }
  getTotal() {
    return this.items
      .map((item) => item.price * item.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  }
  setCounter() {
    cartCounter.textContent = this.items.length;
  }
}

class CartItem {
  constructor(id, title, price, img) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.img = img;
    this.quantity = 1;
  }
}

class OrderPopup {
  constructor() {
    this.popupTitle = document.querySelector(".order-popup-content-title h3");
    this.popupImg = document.querySelector(".order-popup-content-info img");
    this.popupPrice = document.querySelector(".order-popup-content-price");
    this.popupForm = document.querySelector(".order-popup-form");
  }
  showPopup({ title, price, img }) {
    orderPopup.classList.add("visible");
    this.popupTitle.textContent = title;
    this.popupImg.setAttribute("src", img);
    this.popupPrice.textContent = `${price} руб.`;
  }
  closePopup() {
    this.popupForm.reset();
    orderPopup.classList.remove("visible");
  }
}

const popup = new OrderPopup();
const cart = new Cart();
const catalog = new Catalog();

catalog.renderItemsList();
cart.renderItems();

window.addEventListener("load", () => {
  // Adding Event Listeners
  productList.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("go-to-cart-btn")) {
      const id = Number(target.parentNode.parentNode.dataset.id);
      const { title, price, img } = API.products.find((item) => item.id === id);
      const cartItem = new CartItem(id, title, price, img);
      cart.addItem(cartItem);
    } else if (target.classList.contains("order-btn")) {
      const id = Number(target.parentNode.parentNode.dataset.id);
      const { title, price, img } = API.products.find((item) => item.id === id);
      const popupItem = new CartItem(id, title, price, img);
      popup.showPopup(popupItem);
    }
  });

  cartIcon.addEventListener("click", (e) => {
    cartPopup.classList.toggle("visible");
  });

  cartPopup.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("delete-btn")) {
      const id = Number(target.parentNode.parentNode.dataset.id);
      cart.deleteItem(id);
    } else {
      cartPopup.classList.toggle("visible");
    }
  });

  orderPopup.addEventListener("click", (e) => {
    if (e.target.classList.contains("order-popup")) {
      popup.closePopup();
    } else {
      return;
    }
  });

  senOrderBtn.addEventListener("click", (e) => {
    popup.closePopup();
  });
});
