API.templates = {
  product_item: (id,image,title,price) => {
    return (
        `<div class="product-item">
          <div class="product-item__wrapper">
              <div class="product-item__image">
                <img src="${image}" alt="${title}">
              </div>
              <div class="product-item__content">
                <p class="product-item__title">${title}s</p>
                <p class="product-item__price">${price} руб.</p>
              </div>
              <div class="product-item__buttons">
                <button class="button button--main product-item__buttons-order" onclick="cart.order(${id})">Заказать</button>
                <button class="button button--secondary product-item__buttons-cart" onclick="cart.add(${id})">В корзину</button>
              </div>
          </div>
        </div>`
      )
  },
  cart_item: (id,image,title,price) => {
    return (
       `<div class="cart-item">
         <div class="cart-item__wrapper">
           <button class="button cart-item__remove" onclick="cart.remove(${id})">𐄂</button>
           <div class="cart-item__image">
             <img src="${image}" alt="${title}">
           </div>
           <div class="cart-item__content">
             <p class="cart-item__title">${title}</p>
             <p class="cart-item__price">${price} руб.</p>
           </div>
         </div>
       </div>`
      )
  },
  order_popup: (id,image,title,price) => {
    return (
       `<div class="overlay" onclick="cart.orderClose()"></div>
        <div class="popup">
          <div class="popup__wrapper">
            <button class="popup__close button" onclick="cart.orderClose()">𐄂</button>
            <form action="" class="popup__form">
              <div class="popup__title">
                <p>${title}</p>
                <input type="hidden" name="name-product" value="${title}">
              </div>
              <div class="popup__content">
                <div class="popup__product">
                  <div class="popup__product-image">
                    <img src="${image}" alt="${title}">
                  </div>  
                  <p class="popup__product-price">${price} руб.</p>
                  <input type="hidden" name="price-product" value="${price} руб.">
                </div>
                <div class="popup__textarea field">
                  <label for="message" class="field__label">Комментарий к заказу</label>
                  <textarea name="message"  class="field__input" id="message" rows="10"></textarea>
                </div>
              </div>
              <div class="popup__footer">
                <div class="popup__name field">
                    <label for="phone" class="field__label">Ваш телефон:</label>
                    <input type="text"  class="field__input" id="phone">
                </div>
                <button class="popup__submit button button--main" type="submit">Отправить</button>
              </div>
            </form>
          </div>
        </div>`
        )
  }
};

