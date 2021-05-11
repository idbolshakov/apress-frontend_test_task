class Card {
  constructor(cardSelector, card, { handleBasketClick, handleOrderClick }) {
    const { id, title, price, img } = card;
    this._data = card;
    this._cardSelector = cardSelector;
    this._img = img;
    this._title = title;
    this._price = price;
    this._id = id;
    this._handleBasketClick = handleBasketClick;
    this._handleOrderClick = handleOrderClick;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(`#${this._cardSelector}`)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._basket = this._element.querySelector('.card__button_basket');
    this._order = this._element.querySelector('.card__button_order');

    this._productName = this._element.querySelector('.card__title');
    this._productName.textContent = this._title;

    this._productPrice = this._element.querySelector('.card__price');
    this._productPrice.textContent = `${this._price.toLocaleString('ru')} руб.`;

    this._image = this._element.querySelector('.card__image');
    this._image.src = this._img;
    this._image.alt = `Фото ${this._title}`;
    return this._element;
  }
}
