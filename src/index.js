const list = document.querySelector('.product__list');

const popupBasket = new PopupBasket(POPUP.basket, POPUP__CONFIG);
const popupOrder = new PopupOrder(POPUP.order, POPUP__CONFIG);

const handleBasketClick = (data) => {
  popupBasket.open(data);
};

const handleOrderClick = (data) => {
  popupOrder.open(data);
};

Array.from(API.products).forEach((card) => {
  const cardProduct = new Card(
    TEMPLATE_CARD,
    card,
    handleBasketClick,
    handleOrderClick
  );

  list.append(cardProduct.generateCard());
});
