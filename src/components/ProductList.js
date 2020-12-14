export default class ProductList {
    constructor(container, func) {
        this.container = container;
        this.hashed = [];
        this.func = func;
    }
    // принимаем данные API, хэшируем, отправляем на рендер
    render(array) {
        for (const elem of array) {
            this.hash(elem);
            this._addCard(elem);
        }
    }
    // передаем в ProductCard на отрисовку
    _addCard(data) {
        const card = this.func();
        this.container.appendChild(card.create(data));
    }
    // сохраняем данные внутри класса
    hash(elem) {
        this.hashed.push(elem);
    }
    // сравниваем id в хеше и id продукта с нажатой кнопкой
    compare(id) {
        return this.hashed.find(elem => elem.id === id);
    }
}