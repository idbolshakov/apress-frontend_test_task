import BaseComponent from "./BaseComponent.js";
import { addToCartPopupTemplate } from '../utils/template.js';

export default class Cart extends BaseComponent {
    constructor(func) {
        super();
        this.func = func;
        this.popup = func.popup;
    }
    removeFromCart = (e) => {
        e.target.closest('.add-to-cart-popup__row').remove();
    }
    render(data) {
        const container = this.popup.querySelector('.add-to-cart-popup__container')
        container.insertAdjacentHTML('beforeend', addToCartPopupTemplate(data))
        this._setEvents();
        this.func.open();
    }
    _setEvents() {
        const removeIcons = Array.from(this.popup.querySelectorAll('.add-to-cart-popup__remover'));
        removeIcons.forEach(element => {
            this._setListeners([
                {
                    element,
                    event: 'click',
                    callback: this.removeFromCart,
                }
            ])
        })
    }

}