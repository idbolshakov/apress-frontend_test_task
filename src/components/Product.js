class Product {
  constructor({ data, handleClickCartBtn, handleClickOrderBtn }, productSelector) {
    this._title = data.title;
    this._urlImg = data.img;
    this._price = data.price;
    this._handleClickCartBtn = handleClickCartBtn;
    this._handleClickOrderBtn = handleClickOrderBtn;
    this._productSelector = productSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._productSelector)
      .content.querySelector(".product")
      .cloneNode(true);

    return cardElement;
  }

  _priceConversion() {
    let newPrice = String(this._price);
    if (newPrice.length === 4) {
      newPrice = `${newPrice.slice(0, 1)} ${newPrice.slice(1)}`;
    }
    if (newPrice.length === 5) {
      newPrice = `${newPrice.slice(0, 2)} ${newPrice.slice(2)}`;
    }
    if (newPrice.length === 6) {
      newPrice = `${newPrice.slice(0, 3)} ${newPrice.slice(3)}`;
    }
    return `${newPrice} руб.`;
  }

  generateProduct() {
    this._element = this._getTemplate();
    const productImage = this._element.querySelector(".product__image");
    const productName = this._element.querySelector(".product__title");
    const productPrice = this._element.querySelector(".product__price");
    const buttonOrder = this._element.querySelector(".product__button_order");
    const buttonCart = this._element.querySelector(".product__button_cart");
    productImage.src = this._urlImg;
    productImage.alt = this._title;
    productName.textContent = this._title;
    productPrice.textContent = this._priceConversion();
    this._setEventListener(buttonOrder, buttonCart);
    return this._element;
  }

  _setEventListener(btnOrder, btnCart) {
    btnOrder.addEventListener("click", () => {
      this._handleClickOrderBtn({
        title: this._title,
        price: this._priceConversion(),
        image: this._urlImg,
      });
    });
    btnCart.addEventListener("click", () => {
      this._handleClickCartBtn({
        title: this._title,
        price: this._priceConversion(),
        image: this._urlImg,
      });
    });
  }
}
