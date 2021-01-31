export default class Card {                                                         // создаем общий класс с характеристиками товара 
    constructor(id, title, price, img, parentSelector) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
        this.parent = document.querySelector(parentSelector);
        this.prettyPrice();
    }

    prettyPrice() {                                                                 // метод для отображения цены по разрядам (10 000)
        this.price = this.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    }
}

