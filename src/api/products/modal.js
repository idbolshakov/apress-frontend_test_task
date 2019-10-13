let productNumber;
let cartCounter = {};

//Конструктор для модальных окон
function Modal(type) {
    this.type = type;
    this.addInfo = function () {
        document.querySelector('.modal-' + this.type + '__title').innerHTML = API.products[productNumber].title;
        document.querySelector('.modal-' + this.type + '__img').setAttribute('src', API.products[productNumber].img);
        document.querySelector('.modal-' + this.type + '__img').setAttribute('alt', API.products[productNumber].title);
        document.querySelector('.modal-' + this.type + '__price').innerHTML = (API.products[productNumber].price).toLocaleString('ru').replace(/,/g, '.') + ' руб.';
    };
    this.openModal = function () {
        document.querySelector('.modal-' + this.type).style.display = 'block';
        if (this.type === 'cart') {
            let productId = API.products[productNumber].id;
            if (cartCounter[productId] != undefined) {
                cartCounter[productId]++;
            } else {
                cartCounter[productId] = 1;
            }
            localStorage.setItem('Cart', JSON.stringify(cartCounter));
        }
    };
    this.closeModal = function () {
        document.querySelector('.modal-' + this.type).style.display = 'none';
    }
}