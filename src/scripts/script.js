function order(title, img, price) {
  const currentOrder = new Orders(title, img, price);
  currentOrder.render();
}

function toCart(title, img, price) {
  const currentCart = new ToCart(title, img, price);
  currentCart.render();
  setTimeout(closePopup, 2000);
}

function closePopup() {
  let element = document.getElementById('current-popup');
  element.remove();
}

