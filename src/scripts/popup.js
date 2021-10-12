'use strict';

class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
    this.titleContainer = this.popupElement.querySelector('.popup__title');
    this.priceContainer = this.popupElement.querySelector('.popup__price');
    this.imageElement = this.popupElement
      .querySelector('.popup__info')
      .querySelector('.popup__image');
    this.closeButton = this.popupElement.querySelector('.popup__button_close');
    this.inputNumber = this.popupElement.querySelector('.popup__input_text');
    this.inputComment = this.popupElement.querySelector('.popup__input_textarea');
  }

  open(title, price, imageSrc) {
    this.titleContainer.innerHTML = title;
    this.priceContainer.innerHTML = price;
    this.imageElement.src = imageSrc;

    this.closeButton.addEventListener('click', () => {
      this.close();
    });

    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') {
        this.close();
      }
    })

    this.popupElement.classList.add('popup_opened');
  }

  close() {
    this.popupElement.classList.remove('popup_opened');

    this.closeButton.removeEventListener('click', () => {
      this.close();
    });

    document.removeEventListener('keydown', (e) => {
      if(e.key === 'Escape') {
        this.close();
      }
    })

    if(this.inputNumber && this.inputComment) {
      this.inputNumber.value = '';
      this.inputComment.value = '';
    }

  }
}