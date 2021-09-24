class Product {
  constructor({ data }, productSelector) {
    this._title = data.title;
    this._urlImg = data.img;
    this._price = data.price;
    this._productSelector = productSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._productSelector)
      .content.querySelector(".product")
      .cloneNode(true);

    return cardElement;
  }

  generateProduct() {
    this._element = this._getTemplate();
    const productImage = this._element.querySelector(".product__image");
    const productName = this._element.querySelector(".product__title");
    const productPrice = this._element.querySelector(".product__price");
    productImage.src = this._urlImg;
    productImage.alt = this._title;
    productName.textContent = this._title;
    productPrice.textContent = this._price;
    return this._element;
  }
}
