"use strict";

let arrayProducts = API.products,
  itemCounter = 0;

arrayProducts.forEach((item) => {
  document.querySelector(".product-listing-wrapper").insertAdjacentHTML(
    "beforeend",
    `<div class="products_item">
        <img class="item-image" src="${item.img}" alt="product image" />
        <div class="item-descr">
          <p class="item-title">${item.title}</p>
          <p class="item-price">${item.price} руб.</p>
        </div>
        <div class="item-btns">
          <button class="button btn-red orderNow" data-product-value="${itemCounter}">Заказать</button>
          <button class="button btn-grey toBasket" data-product-value="${itemCounter}">В корзину</button>
        </div>
      </div>`
  );
  itemCounter++;
});

// for (let i = 0; i < API.products.length; i++) {
//   document.querySelector(".product-listing-wrapper").insertAdjacentHTML(
//     "beforeend",
//     `<section class="products">
//       <div class="products_item">
//         <img class="item-image" src="${API.products[i].img}" alt="product image" />
//         <div class="item-descr">
//           <p class="item-title">${API.products[i].title}</p>
//           <p class="item-price">${API.products[i].price} руб.</p>
//         </div>
//         <div class="item-btns">
//           <button class="button btn-red orderNow" data-product-value="${i}">Заказать</button>
//           <button class="button btn-grey toBasket" data-product-value="${i}">В корзину</button>
//         </div>
//       </div>
//     </section>`
//   );
// }

let toBasketBtns = document.querySelectorAll(".toBasket"),
  makeOrderBtns = document.querySelectorAll(".orderNow"),
  toBasketPageBtn = document.querySelector(".basket_link"),
  dataCounter;

toBasketBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let eventBtn = e.target;
    dataCounter = eventBtn.getAttribute("data-product-value");
    document.querySelector(".popup_basket").style.display = "block";
    showBasket(dataCounter);
  });
});

makeOrderBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let eventBtn = e.target;
    dataCounter = eventBtn.getAttribute("data-product-value");
    document.querySelector(".popup_order").style.display = "block";
    showOrder(dataCounter);
  });
});

function showOrder(dataCounter) {
  document.querySelector(".popup_order").innerHTML = "";

  document.querySelector(".popup_order").insertAdjacentHTML(
    "afterbegin",
    `<div class="popup_order_header">
      <div class="popup_order_title">${API.products[dataCounter].title}</div>
      <button class="delete_btn close_popup"></button>
    </div>
  <div class="popup_order_inner">
    <div class="popup_order_preview">
      <img class="popup_order_img" src="${API.products[dataCounter].img}" alt="order image"
      />
      <div class="popup_order_price">${API.products[dataCounter].price} руб.</div>
    </div>
    <form class="popup_form" action="#">
      <div class="comment_block">
        <label for="comment">Комментарий к заказу:</label>
        <textarea class="form-data order_comment" name="comment"></textarea>
      </div>
      <div class="order_positioned">
        <div class="phone_block">
          <label for="phone">Ваш телефон*:</label>
          <input class="form-data" type="tel" name="phone" required autofocus />
        </div>
        <input class="button btn-red order-btn" type="submit" value="Отправить" />
      </div>
    </form>
  </div>`
  );
  let closePopupBtn = document.querySelector(".close_popup");

  closePopupBtn.addEventListener("click", sendFormOrder);

  function sendFormOrder() {
    document.querySelector(".popup_order").innerHTML = "";
    document.querySelector(".popup_order").style.display = "none";
  }
}

function showBasket(dataCounter) {
  document.querySelector(".popup_basket_message").insertAdjacentHTML(
    "afterend",
    `<div class="popup_basket_item" data-item-counter="${dataCounter}">
      <img
        src="${API.products[dataCounter].img}"
        alt="item image"
        class="basket_item_img"
      />
      <div class="basket_item_descr">
        <div class="basket_item_title">
        ${API.products[dataCounter].title}
        </div>
        <div class="basket_item_price">${API.products[dataCounter].price} руб.</div>
      </div>
      <button class="delete_btn"></button>
  </div>`
  );

  toBasketPageBtn.addEventListener("click", function () {
    document.querySelector(".popup_basket").style.display = "none";
  });

  let deleteItemBtns = document.querySelectorAll(".delete_btn");

  deleteItemBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.parentNode.remove();
    });
  });
}
