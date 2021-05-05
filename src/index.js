const list = document.querySelector('.product__list');

Array.from(API.products).forEach((card) => {
  const { id, title, price, img } = card;
  const cardProduct = new Card(TEMPLATE_CARD, img, title, price, id);

  list.append(cardProduct.generateCard());
});
