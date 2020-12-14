import BaseComponent from './BaseComponent.js';

export default class Popup extends BaseComponent {
    constructor(popup) {
        super();
        this.popup = popup;
    }

    _closeHandler = () => this.close();

    _handleMousedown = (e) => {
        e.stopPropagation();
        if (e.target.classList.contains('popup')) {
            this.close();
        }
    }

    _handleKeydown = (e) => {
        if (e.code == 'Escape' && e.key == 'Escape') {
            this.close();
        }
    }

    removeFromCart = (e) => {
        e.target.closest('.add-to-cart-popup__row').remove();
    }

    _setEventListeners() {
        const closeButton = this.popup.querySelector(".popup__close");
        const root = document.querySelector('.root');
        if (closeButton) {
            this._setListeners([
                {
                    element: closeButton,
                    event: 'click',
                    callback: this._closeHandler,
                },
                {
                    element: root,
                    event: 'mousedown',
                    callback: this._handleMousedown,
                },
                {
                    element: root,
                    event: 'keydown',
                    callback: this._handleKeydown,
                }
            ])
        } else {
            this._setListeners([
                {
                    element: document,
                    event: 'keydown',
                    callback: this._handleKeydown,
                }
            ]);
        }

    }

    open() {
        this.popup.classList.add("popup_is-opened");
        this._setEventListeners();
    }

    close() {
        this.popup.classList.remove("popup_is-opened");
        this.clearListeners();
    }

    toggle() {
        this.popup.classList.toggle('popup_is-opened');
    }

    render(data) {
        // рендер попапа заказа. при расширении функционала заказа вынести в отдельный компонент.
        const heading = this.popup.querySelector('.popup__heading')
        const image = this.popup.querySelector('.popup__image')
        const price = this.popup.querySelector('.popup__price')
        heading.textContent = data.title;
        price.textContent = `${data.price} руб.`;
        image.setAttribute('src', data.img);
    }
}


