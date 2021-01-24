// Функции для монтирования узлов
import { getTemplateCart } from "../layouts/layouts.js";

export class Cart {
  constructor(selector) {
    // Узлы
    this.$cart = document.querySelector(selector);
    this.$cartIcon = document.querySelector("#product-cart__icon");
    this.$cartCount = document.querySelector("#count_products");
    // State
    this.state = {
      selectedItems: localStorage.productInCarts
        ? JSON.parse(localStorage.productInCarts)
        : [],
      sum: localStorage.productsSum ? localStorage.productsSum : null,
    };
    // Инициализация
    this.#render();
    this.#setup();
  }

  // Рендер
  #render() {
    this.$cart.innerHTML = getTemplateCart(
      this.state.selectedItems,
      this.state.sum
    );
    this.$cartCount.innerHTML = this.state.selectedItems.length;

    this.$cart.classList.add("close");
    this.$cartIcon.classList.add("close");
  }

  // Инициализация
  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.changeActiveIcon = this.changeActiveIcon.bind(this);
    this.changeActiveList = this.changeActiveList.bind(this);
    this.sumPrice = this.sumPrice.bind(this);
    this.deleteProductInCart = this.deleteProductInCart.bind(this);

    this.$cart.addEventListener("click", this.clickHandler);
    this.$cartIcon.addEventListener("click", this.changeActiveIcon);
  }

  // Клик
  clickHandler(event) {
    const { type, id } = event.target.dataset;
    if (type === "delete") {
      this.deleteProductInCart(id);
      return;
    }
    return;
  }

  // Открытие\Закрытие окна корзины
  changeActiveIcon() {
    if (this.$cartIcon.classList.contains("close")) {
      this.$cartIcon.classList.remove("close");
      this.$cartIcon.classList.add("open");
      this.changeActiveList();
      return;
    }
    this.$cartIcon.classList.remove("open");
    this.$cartIcon.classList.add("close");
    this.changeActiveList();
    return;
  }

  changeActiveList() {
    if (this.$cart.classList.contains("close")) {
      this.$cart.classList.remove("close");
      this.$cart.classList.add("open");
      return;
    }
    this.$cart.classList.remove("open");
    this.$cart.classList.add("close");
    return;
  }

  // Подсчет суммы товаров
  sumPrice() {
    let initialValue = 0;
    this.$cartCount.innerHTML = this.state.selectedItems.length;

    this.state.sum = this.state.selectedItems.reduce(
      (previousValue, currentValue) => {
        return previousValue + Number(currentValue.price);
      },
      initialValue
    );

    localStorage.setItem("productsSum", this.state.sum);

    this.$cart.innerHTML = getTemplateCart(
      this.state.selectedItems,
      this.state.sum
    );
  }

  // Удаление товара
  deleteProductInCart(id) {
    this.state.selectedItems.splice(id, 1);
    localStorage.productInCarts = JSON.stringify(this.state.selectedItems);

    this.sumPrice();
  }

  // Обработка клика
  select(item) {
    this.state.selectedItems.push(item);

    this.$cart.innerHTML = getTemplateCart(
      this.state.selectedItems,
      this.state.sum
    );

    localStorage.setItem(
      "productInCarts",
      JSON.stringify(this.state.selectedItems)
    );

    this.sumPrice();

    return;
  }
}
