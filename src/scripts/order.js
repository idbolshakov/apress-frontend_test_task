class Orders {
  constructor(title, img, price) {
    this.title = title;
    this.img = img;
    this.price = price;
  }

  render() {
    let popupOrderHtml = `
      <div class="popup-content" id="current-popup">
        <form class="popup-content__form">
          <span class="popup-content__title">${this.title} </span>
          <span class="close" onclick="closePopup()">X</span>
          <div class="popup-content__main">
            <div class="popup-content__info">
              <img src="${this.img}" alt="Product Picture" class="info__img">
              <span class="info__price">${this.price.toLocaleString().replace(',', ' ')} руб.</span>
            </div>
              <label for="comment__write" class="comment__label">Комментарий <br> к заказу:</label>
              <textarea class="comment__write" id="comment__write" fixed num="5" col="10"></textarea>
              <label class="main__tel">Ваш телефон*:</label>
              <input type="tel" class="main__tel-inp" required>
          </div>
          <input type="submit" class="btn order submit" value="Заказать">
        </form>
      </div>
    `;
    POPUP_ORDER.innerHTML = popupOrderHtml;
  }
}