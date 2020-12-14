import BaseComponent from './BaseComponent.js';
import { orderPopup } from '../index.js';
import getCard from '../utils/getCard.js';
import { productTemplate } from '../utils/template.js';

export default class ProductCard extends BaseComponent {
    constructor(cart) {
        super()
        this.cart = cart;

    }
    create(data) {
        const card = document.createElement('li');
        // получаем шаблон из utils
        const template = productTemplate(data);
        card.classList.add('product');
        card.setAttribute('data-id', data.id);
        // инжектим шаблон
        card.insertAdjacentHTML('beforeend', template);
        // ищем кнопки и развешиваем слушатели
        const orderBtn = card.querySelector('.btn_order-btn');
        const addToCartBtn = card.querySelector('.btn_add-to-cart-btn');
        this._setEventListeners(orderBtn, addToCartBtn)

        return card;
    }
    _setEventListeners(orderBtn, cartBtn) {
        this._setListeners([
            {
                element: orderBtn,
                event: 'click',
                callback: (e) => this.handleOrder(e),
            },
            {
                element: cartBtn,
                event: 'click',
                callback: (e) => this.handleCart(e),
            }
        ])
    }
    // передаем данные для попапа заказа, рендерим и отркываем
    handleOrder(e) {
        const data = getCard(e.target);
        orderPopup.render(data)
        orderPopup.open();
    }
    // передаем данные для попапа корзины, рендерим, добавляем.
    handleCart(e) {
        const data = getCard(e.target);
        const toCart = this.cart();
        toCart.render(data);
    }
}