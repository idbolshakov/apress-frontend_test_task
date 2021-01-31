import renderCards from './modules/renderCards.js';
import orderPopup from './modules/orderPopup.js';
import basketPopup from './modules/basketPopup.js';


window.addEventListener('DOMContentLoaded', () => { 
    renderCards();              // функция отрисовки списка товаров на странице из API.products
    orderPopup();               // функция отображения окна заказа
    basketPopup();              // функция отображения окна корзины
});