class ListItems {
  constructor({ initList }) {
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

          self.renderList();
          return true;
        },
      });
    };

    this.products = getProxy(initList, "");
  }

  init() {
    this.renderList();
  }

  renderList() {
    const catalogBlock = document.querySelector("#catalog .catalog__container");
    while (catalogBlock.firstChild && catalogBlock.removeChild(catalogBlock.firstChild));
    catalogBlock.insertAdjacentHTML("beforeend", this.getTemplateList());
  }

  getTemplateList() {
    const self = this;
    return `
      <ul class="catalog__list">
        ${self.products
          .map((item, index) => {
            const inBasket = typeof basket !== "undefined" && basket.data.items.find((el) => el.id === item.id);

            return `<li class="catalog__item item-catalog">
          <div class="item-catalog__img-block">
            <img src="../${item.img}" class="item-catalog__img" />
          </div>
          <div class="item-catalog__info">
            <h4 class="item-catalog__info-title">${item.title}</h4>
            <p class="item-catalog__info-price">${item.priceToFront} руб.</p>
          </div>
          <div class="item-catalog__actions">
            <button class="item-catalog__actions-btn-order button-confirm" onclick="listItems.order(${
              item.id
            })">Заказать</button>
            ${
              inBasket
                ? `<button class="item-catalog__actions-btn-basket button-cancel" disabled="disabled">Уже в корзине</button>`
                : `<button class="item-catalog__actions-btn-basket button-cancel" onclick="listItems.addToBasket(${item.id})">В корзину</button>`
            }
          </div>
        </li>`;
          })
          .join("")}
      </ul>
    `;
  }

  addToBasket(idItem) {
    var self = this;
    basket.setBasketItem(JSON.parse(JSON.stringify(self.products.find((el) => el.id === idItem))));
  }

  order(idItem) {
    const self = this;
    modal.show(self.products.find((el) => el.id === idItem));
  }
}

const listItems = new ListItems({
  initList: API.products.map((el) => ({ ...el, priceToFront: el.price.toLocaleString() })),
});
listItems.init();
