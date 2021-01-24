// Функции для монтирования узлов
import { getTemplateList } from "../layouts/layouts.js";

export class List {
  constructor(selector, options) {
    // Узлы
    this.$el = document.querySelector(selector);
    // То что приходит из index.js
    this.options = options;
    // Инициализация
    this.#render();
    this.#setup();
  }

  // Рендер
  #render() {
    const { data } = this.options;
    this.$el.innerHTML = getTemplateList(data);
  }

  // Инициализация
  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.productToCart = this.productToCart.bind(this);
    this.$el.addEventListener("click", this.clickHandler);
  }

  // Клик
  clickHandler(event) {
    const { type, id, img, title, price } = event.target.dataset;
    const item = {
      id: id,
      img: img,
      title: title,
      price: price,
    };
    switch (type) {
      case "cart":
        this.productToCart(item);
        break;
      case "order":
        this.select(item);
        break;
    }

    return;
  }

  productToCart(item) {
    this.options.toCart ? this.options.toCart(item) : null
  }

  // Обработка клика
  select(item) {
    this.options.onSelect ? this.options.onSelect(item) : null;
    return;
  }
}
