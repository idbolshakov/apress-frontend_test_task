class ToCart {
  constructor(title, img, price) {
    this.title = title;
    this.img = img;
    this.price = price;
  }

  render () {
    let toCartPopupHtml = `
      <div class="cart-popup" id="current-popup">
        <span class="cart-popup__heading">Вы добавили в корзину</span>
        <img src="${this.img}" alt="Product Picture" class="cart-popup__img">
        <div class="cart-popup__info">
          <span class="info__title">${this.title}</span>
          <span class="info__price">${this.price.toLocaleString().replace(',', ' ')} руб.</span>
        </div>
        <span class="delete" onclick="closePopup()">X</span>
        <button class="btn order">В корзину</button>
      </div>
    `;
    POPUP_ORDER.innerHTML = toCartPopupHtml;
  }
}