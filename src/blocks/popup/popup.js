class Popup {
  constructor(popupSelector, config) {
    this._popup = document.querySelector(popupSelector);
    this._popupOpen = config.popupOpen;
    this._overlay = this._popup.querySelector(config.popupOverlay);
  }

  open() {
    this._popup.classList.add(this._popupOpen);
    document.addEventListener('keydown', this._handleEscClose);
    this._setEventListeners();
  }

  close() {
    this._popup.classList.remove(this._popupOpen);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (
      evt.key === 'Escape' &&
      this._popup.classList.contains(this._popupOpen)
    ) {
      this.close();
    }
  };

  _setEventListeners() {
    this._overlay.addEventListener('click', () => this.close());
  }
}

class PopupBasket extends Popup {
  constructor(popupSelector, config) {
    super(popupSelector, config);
    this._image = this._popup.querySelector(config.popupBasketImage);
    this._title = this._popup.querySelector(config.popupBasketTitle);
    this._price = this._popup.querySelector(config.popupBasketPrice);
  }

  open(data) {
    const { title, price, img } = data;

    this._image.src = img;
    this._image.alt = `Фотография товара ${title}`;
    this._title.textContent = title;
    this._price.textContent = `${price.toLocaleString('ru')} руб.`;
    super.open();
  }
}
