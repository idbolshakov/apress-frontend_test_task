import API from "../../api/products";
import { createElement } from "./helpers";

const cart = {
  cartNode: document.querySelector(".cart__items"),
  items: [],
  add: function(item) {
    item.id *= Date.now() / 1000000;
    this.items.push({ ...item });
    this.show();
  },
  remove: function(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.show();
  },
  show: function() {
    this.cartNode.innerHTML = "";
    if (this.items.length !== 0) {
      this.cartNode.nextElementSibling.style.display = "block";
      this.items.forEach(e => {
        this.cartNode.appendChild(createCartItem(e));
      });
    } else {
      this.cartNode.nextElementSibling.style.display = "none";
    }
  }
};

const modal = {
  window: document.querySelector(".modal"),
  closeBtn: document.querySelector(".modal__close"),
  open(item) {
    this.window.querySelector(".modal__title").textContent = item.title;
    this.window.querySelector(".modal__price").textContent =
      item.price + " руб.";
    this.window.querySelector(".modal__image").src = item.img;
    this.window.style.display = "block";
    this.closeBtn.onclick = () => {
      this.close();
    };
  },
  close() {
    this.window.style.display = "none";
  }
};
const { products } = API;

function createProductItem(item) {
  const { id, title, price, img } = item;
  const image = createElement("img", {
    src: img
  });
  const productTitle = createElement(
    "h2",
    { className: "product__title" },
    title
  );
  const productPrice = createElement(
    "span",
    { className: "product__price" },
    price + " руб."
  );
  const orderBtn = createElement(
    "a",
    { className: "product__buy-button button button--main" },
    "Заказать"
  );
  const cartBtn = createElement(
    "a",
    { className: "product__add-button button button--secondary" },
    "В корзину"
  );
  const imageWrap = createElement(
    "div",
    { className: "product__image" },
    image
  );
  const centerWrap = createElement(
    "div",
    { className: "product__center" },
    productTitle,
    productPrice
  );
  const btnWrap = createElement(
    "div",
    { className: "product__buttons" },
    orderBtn,
    cartBtn
  );

  cartBtn.onclick = e => {
    e.preventDefault();
    cart.add(item);
  };

  orderBtn.onclick = e => {
    modal.open(item);
  };

  const product = createElement(
    "li",
    { className: "product prodduct-list__item", "data-id": id },
    imageWrap,
    centerWrap,
    btnWrap
  );
  return product;
}

function createCartItem({ id, title, price, img }) {
  const closeBtn = createElement(
    "button",
    { className: "cart-item__remove" },
    "✖"
  );
  const image = createElement("img", {
    src: img
  });
  const productTitle = createElement(
    "h2",
    { className: "cart-item__title" },
    title
  );
  const productPrice = createElement(
    "span",
    { className: "cart-item__price" },
    price + " руб."
  );
  const imageWrap = createElement(
    "div",
    { className: "cart-item__image" },
    image
  );
  const centerWrap = createElement(
    "div",
    { className: "product__center" },
    productTitle,
    productPrice
  );

  closeBtn.addEventListener("click", () => {
    cart.remove(id);
  });

  return createElement(
    "li",
    { className: "cart-item" },
    imageWrap,
    centerWrap,
    closeBtn
  );
}

products.forEach(elm => {
  const product = createProductItem(elm);
  document.querySelector(".product-list").appendChild(product);
});
