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

const getCardData = (target) => {
  const card = target.closest('.card');

  const title = card.querySelector('.card__title').textContent;
  const price = card.querySelector('.card__price').textContent;
  const img = card.querySelector('.card__image').src;

  return { title, price, img };
};

list.addEventListener('click', (e) => {
  const target = e.target;
  const card = getCardData(target);

  if (target.classList.contains('card__button_basket')) {
    popupBasket.open(card);
  }
  if (target.classList.contains('card__button_order')) {
    popupOrder.open(card);
  }
});
