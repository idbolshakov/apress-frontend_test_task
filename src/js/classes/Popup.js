const POPUP_SHOW = 'popup_show';
const POPUP_CLOSE = 'popup__close';
const POPUP_BOX = 'popup__box';

export class Popup {
  constructor(id) {
    this.element = document.getElementById(id);

    this._closeDocument = this._closeDocument.bind(this);
    this._closeButton();
  }

  open() {
    this.element.classList.add(POPUP_SHOW);
    document.addEventListener('click', this._closeDocument);
  }

  close() {
    this.element.classList.remove(POPUP_SHOW);
    document.removeEventListener('click', this._closeDocument);
  }

  _closeDocument(evt) {
    if (!evt.target.closest(`.${POPUP_BOX}`)) {
      this.close();
    }
  }

  _closeButton() {
    const close = this.element.querySelector(`.${POPUP_CLOSE}`);
    if (!close) return;
    close.addEventListener('click', () => this.close());
  }
}
