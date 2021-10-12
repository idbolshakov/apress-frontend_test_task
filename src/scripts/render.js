'use strict';

const popupCart = new Popup('.popup__cart');
const popupOrder = new Popup('.popup__order');
const products = [];

for(let i = 0; i < API.products.length; i++) {
  products[i] = new Product(API.products[i]);
  products[i].addEventListeners(popupOrder, popupCart);
  products[i].appendElement();
}