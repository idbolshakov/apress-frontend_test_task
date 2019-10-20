let productNumber;
const cartCounter = {};

//Конструктор для модальных окон
function Modal(type) {
    this.type = type;
}

//Открытие модального окна
Modal.prototype.openModal = function () {
    switch (this.type) {
        case 'cart':
            addModalCart();
            
            //Сохранение добавленных товаров в localStorage
            const productId = API.products[productNumber].id;
            if (cartCounter[productId] != undefined) {
                cartCounter[productId]++;
            } else {
                cartCounter[productId] = 1;
            }
            localStorage.setItem('Cart', JSON.stringify(cartCounter));
            break;
        case 'buy':
            addModalBuy();
            break;
    }
};
// Закрытие модального окна
Modal.prototype.closeModal = function () {
    document.querySelector('.modal-' + this.type).remove();
}