class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._popupProductImage = this._popupSelector.querySelector(".popup__product-image");
    this._popupProductTitle = this._popupSelector.querySelector(".popup__product-title");
    this._popupProductPrice = this._popupSelector.querySelector(".popup__product-price");
    this._buttonClose = this._popupSelector.querySelector(".popup__button-close");
  }

  open(item) {
    this._popupProductImage.src = item.image;
    this._popupProductTitle.textContent = item.title;
    this._popupProductPrice.textContent = item.price;
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
    this._popupSelector.addEventListener("click", (evt) => this._handleOverlayClose(evt));
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", (evt) => this._handleEscClose(evt));
    this._popupSelector.removeEventListener("click", (evt) => this._handleOverlayClose(evt));
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this._buttonClose.addEventListener("click", () => this.close());
  }
}
