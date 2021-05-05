const list = document.querySelector('.product__list');

const popupBasket = new PopupBasket(POPUP.basket, POPUP__CONFIG);

const handleBasketClick = (data) => {
  popupBasket.open(data);
};

Array.from(API.products).forEach((card) => {
  const cardProduct = new Card(TEMPLATE_CARD, card, handleBasketClick);

  list.append(cardProduct.generateCard());
});
