"use strict";
let orderProduct = null;
const orderProductWrapper = document.querySelector(".popup-order-info");
const orderPopup = document.querySelector(".order-popup");

const onOrderProduct = (key) => {
  console.log(key);
  const product = JSON.parse(
    JSON.stringify(products.find((product) => product.id === +key))
  );
  if (product) {
    orderProduct = product;
    orderProductWrapper.innerHTML = "";
    const newOrderProduct = `<h3 class="popup__title">${orderProduct.title}</h3>
        <div class="popup__info">
          <div class="order__info">
            <div class="order__product-img-wrapper">
            <img src="${orderProduct.img}" alt="${orderProduct.title}" class="order__product-img">
            </div>
            <div class="order__price">${orderProduct.price} руб.</div>
          </div>
          <form action="/" method="POST" class="order__form form">
            <div class="form__group form__group--comment">
              <label for="comment" class="label">Комментарий к заказу: </label>
              <textarea name="comment" id="comment" rows="10" cols="50"></textarea>
            </div>
            <div class="form__group">
              <label for="phone" class="order__phone-caption label">Ваш телефон* :</label>
              <input type="text" name="phone" id="phone">
            </div>
            <button type="submit" class="btn btn-primary">Отправить</button>
          </form>
        </div>
`;
    orderProductWrapper.insertAdjacentHTML("afterBegin", newOrderProduct);

    orderPopup.classList.add("popup--visible");
  }
};

const onCloseOrder = () => {
  orderPopup.classList.remove("popup--visible");
};
