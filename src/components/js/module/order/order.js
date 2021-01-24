// Функции для монтирования узлов
import { getTemplateOrder } from "../layouts/layouts.js";

export class Order {
  constructor(selector) {
    // Узлы
    this.$popup = document.querySelector(selector);
    // Инициализация
    this.#setup();
  }

  // Инициализация
  #setup() {
    this.closePopup = this.closePopup.bind(this);
    this.$popup.addEventListener("click", this.closePopup);
  }

  // Клик
  closePopup(event) {
    const { type } = event.target.dataset

    if (type === 'order-close') {
      if (this.$popup.classList.contains("active")) {
        this.$popup.classList.remove("active");
        this.$popup.classList.add("empty");
        return
      }
      this.$popup.classList.add("empty");
      return;
    }
    return
  }

  // Обработка клика
  select(item) {
    this.$popup.innerHTML = getTemplateOrder(item);
    if (this.$popup.classList.contains("empty")) {
      this.$popup.classList.remove("empty");
      this.$popup.classList.add("active");
      return
    }
    this.$popup.classList.add("active");
    return;
  }
}
