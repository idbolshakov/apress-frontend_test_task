class Basket {
  constructor() {
    const self = this;
    const isPlainObject = (obj) => Object(obj) === obj && Object.getPrototypeOf(obj) === Object.prototype;

    const getProxy = (target, prefix) => {
      let prop;

      for (prop in target) {
        if (!isPlainObject(target[prop])) continue;

        target[prop] = getProxy(target[prop], prefix ? prefix + "." + prop : prop);
      }

      return new Proxy(target, {
        set: (obj, prop, value) => {
          obj[prop] = isPlainObject(value) ? getProxy(value, prefix ? prefix + "." + prop : prop) : value;

          self.changeBasketItems();
          return true;
        },
      });
    };

    this.data = getProxy({ items: [] }, "");
  }

  init() {
    this.getBasketItems();
    this.#addEventListeners();
  }

  getBasketItems() {
    const localStorageBasket = JSON.parse(localStorage.getItem("basket")) || [];
    this.data.items = localStorageBasket;
  }

  setBasketItem(product) {
    const localStorageBasket = JSON.parse(localStorage.getItem("basket")) || [];
    localStorageBasket.push(product);
    localStorage.setItem("basket", JSON.stringify(localStorageBasket));
    this.data.items = [...this.data.items, product];
  }

  changeBasketItems() {
    listItems.renderList();
    this.renderList();
  }

  renderList() {
    const catalogBlock = document.querySelector(".basket-body .basket-products .basket-products__list");
    while (catalogBlock.firstChild && catalogBlock.removeChild(catalogBlock.firstChild));
    catalogBlock.insertAdjacentHTML("beforeend", this.getTemplateList());
  }

  getTemplateList() {
    const self = this;
    return self.data.items
      .map(
        (item) => `
      <li class="basket-products__item item-basket">
        <div class="item-basket__img-block">
          <img src="../${item.img}" class="item-basket__img" />
        </div>
        <div class="item-basket__info">
          <p class="item-basket__info-title">${item.title}</p>
          <p class="item-basket__info-price">${item.priceToFront} руб.</p>
        </div>
        <div class="item-basket__actions">
          <span class="item-basket__actions-remove icon-remove" onclick="basket.removeItem(${item.id})">X</span>
        </div>
      </li>
    `
      )
      .join("");
  }

  toggleBasket() {
    const basket = document.querySelector(".basket");
    if (basket.classList.contains("open")) {
      basket.classList.remove("open");
    } else {
      basket.classList.add("open");
    }
  }

  removeItem(itemId) {
    const newFilterItems = this.data.items.filter((item) => item.id !== itemId);
    this.data.items = newFilterItems;
  }

  #addEventListeners() {
    const self = this;
    document.querySelector("button.list-nav__item-button-basket").addEventListener("click", self.toggleBasket);
    document.addEventListener("click", self.#handleCloseBasket);
  }

  #handleCloseBasket(event) {
    const basket = document.querySelector(".basket");
    const target = event.target;
    if (target === document.querySelector("button.list-nav__item-button-basket")) return;
    if (event.path.indexOf(basket) !== -1 || target.classList.contains("basket")) return;

    basket.classList.remove("open");
  }
}

const basket = new Basket();
basket.init();
