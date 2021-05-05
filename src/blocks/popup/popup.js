class Popup {
  constructor(popupSelector, config) {
    this._popup = document.querySelector(popupSelector);
    this._popupOpen = config.open;
    this._closeButton = this._popup.querySelector(config.closeButton);
    this._overlay = this._popup.querySelector(config.overlay);

    this._image = this._popup.querySelector(config.imageProduct);
    this._title = this._popup.querySelector(config.titleProduct);
    this._price = this._popup.querySelector(config.priceProduct);
  }

  open(data) {
    const { title, price, img } = data;

    this._image.src = img;
    this._image.alt = `Фотография товара ${title}`;
    this._title.textContent = title;
    this._price.textContent = `${price.toLocaleString('ru')} руб.`;

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
    this._closeButton.addEventListener('click', () => this.close());
    this._overlay.addEventListener('click', () => this.close());
  }
}

class PopupBasket extends Popup {
  constructor(popupSelector, config) {
    super(popupSelector, config);
    this._buttonToBasket = this._popup.querySelector(config.toBasket);
  }

  _setEventListeners() {
    this._buttonToBasket.addEventListener('click', () => {
      this.close();
    });
    super._setEventListeners();
  }
}

class PopupOrder extends Popup {
  constructor(popupSelector, config) {
    super(popupSelector, config);
    this._form = this._popup.querySelector(config.form);
  }

  _setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.close();
    });
    super._setEventListeners();
  }
}
