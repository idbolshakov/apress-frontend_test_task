const list = document.querySelector('.product__list');

const popupBasket = new PopupBasket(POPUP.basket, POPUP__CONFIG);
const popupOrder = new PopupOrder(POPUP.order, POPUP__CONFIG);

API.products.forEach((card) => {
  const cardProduct = new Card(TEMPLATE_CARD, card, {
    handleBasketClick: () => {
      popupBasket.open(card);
    },
    handleOrderClick: () => {
      popupOrder.open(card);
    },
  });

  list.append(cardProduct.generateCard());
});
