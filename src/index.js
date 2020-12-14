import ProductCard from './components/ProductCard.js';
import Popup from './components/Popup.js';
import ProductList from './components/ProductList.js';
import Cart from './components/Cart.js';
import {API} from './api/products.js';

export const orderPopup = new Popup(document.querySelector('.order-popup'));
export const cartPopup = new Popup(document.querySelector('.add-to-cart-popup'));
const newCart = () => new Cart(cartPopup);
const newCard = () => new ProductCard(newCart);
const productListContainer = document.querySelector('.products__list');
export const newList = new ProductList(productListContainer, newCard)

// открывание\закрывание попапа корзины при нажатии на иконку корзины
const cart = document.querySelector('.header__cart');
cart.addEventListener('click', () => {
    cartPopup.toggle();
})

newList.render(API.products)
