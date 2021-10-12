'use strict';

class Product {
  constructor(data) {
    this.listingContainer = document.querySelector('.product-listing__container');
    this.title = data.title;
    this.price = this.convertPrice(data.price);
    this.imageSrc = data.img;

    this.getTemplate();
    this.appendContent();
  }

  convertPrice(price) {
    let arrayOfDigits = String(price).split('');
    let result = '';

    while(true) {
      if(arrayOfDigits.length >= 4) {
        result = ' ' 
            + arrayOfDigits[arrayOfDigits.length - 3]
            + arrayOfDigits[arrayOfDigits.length - 2] 
            + arrayOfDigits[arrayOfDigits.length - 1]
            + result;
        arrayOfDigits = arrayOfDigits.slice(0, arrayOfDigits.length - 3);
      } else {
        result = `${arrayOfDigits.join('')}${result} руб.`;
        break;
      }
    }
    return result;
  }

  getTemplate() {
    this.product = document
      .querySelector('template')
      .content
      .querySelector('.product')
      .cloneNode(true);

    this.titleContainer = this.product.querySelector('.product__title');
    this.priceContainer = this.product.querySelector('.product__price');
    this.imageElement = this.product.querySelector('.product__image');
    this.orderButton = this.product.querySelector('.product__button_order');
    this.cartButton = this.product.querySelector('.product__button_cart');
  }

  appendContent() {
    this.titleContainer.innerHTML = this.title;
    this.priceContainer.innerHTML = this.price;
    this.imageElement.src = this.imageSrc;   
  }

  addEventListeners(orderPopup, cartPopup) {
    this.orderButton.addEventListener('click', () => {
      orderPopup.open(this.title, this.price, this.imageSrc);
    });
    this.cartButton.addEventListener('click', () => {
      cartPopup.open(this.title, this.price, this.imageSrc);
    });
  }

  appendElement() {
    this.listingContainer.append(this.product);
  }
}