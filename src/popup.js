class PopUp {
  constructor() {
    this.btnClosePopUp = document
      .querySelector('.product-listing-wrapper-popup-title-close')
      .addEventListener('click', this.closePopUp.bind(this));
    this.titlePopUp = document.querySelector('.product-listing-wrapper-popup-title-span');
    this.srcPopUp = document.querySelector('.product-listing-wrapper-popup-block-img-img');
    this.pricePopUp = document.querySelector('.product-listing-wrapper-popup-block-img-price');
    this.popup = document.querySelector('.background-popup');
  }

  openPopUp(name, img, price) {
    this.titlePopUp.innerText = name;
    this.srcPopUp.src = img;
    this.pricePopUp.innerText = `${price.toLocaleString()} руб.`;
    this.popup.classList.add('active');
  }

  closePopUp() {
    this.popup.classList.remove('active');
  }
}
