'use strict';

const catalog = document.querySelector('.product-listing-wrapper');
const cartPopup = document.querySelector('.cart-popup');
const orderPopup = catalog.querySelector('.order-popup');


class ListCards {
    constructor() {
        this.catalog = catalog;
        this.products = API.products;
    }

    formatPrice(num) {
        return num.toLocaleString('ru-RU');
    }

    render() {
        this.products.forEach(({id, title, price, img}) => {
            let element = document.createElement('div');
            element.classList.add('card');
            element.setAttribute('data-id', id);
            element.innerHTML = `
                <div class="card__img"><img src=${img} alt=${title} width="200px" height="150px"></div>
                <div class="card__info-wrapper">
                    <h3 class="card__name">${title}</h3>
                    <p class="card__price">${this.formatPrice(price)} руб.</p>
                </div>
                <div class="card__button-wrapper">
                    <button class="btn btn_pink card__order">Заказать</button>
                    <button class="btn card__in-cart">В корзину</button>
                </div>
            `;
            this.catalog.append(element);
            
        });
        
        const buttonsOrder = catalog.querySelectorAll('.card__order');
        const buttonsCart = catalog.querySelectorAll('.card__in-cart');

        buttonsOrder.forEach(button => {
            button.addEventListener('click', () => {
                orderPopup.style.display = "flex";
            });
        });
        
        buttonsCart.forEach(button => {
            button.addEventListener('click', () => {
                cartPopup.style.display = "inline-block";
            });
        });
    }
}

const list = new ListCards();

list.render();