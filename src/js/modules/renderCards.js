import Card from './classes.js';

function renderCards() {                                                                   // функция отрисовки списка товаров на странице из API.products
    
    class ProductCard extends Card{                                                        // создаем класс карточки товара
        
        renderCard() {                                                                     // метод для отрисовки карточки товара
            const element = document.createElement('div');
            element.classList.add('product-wrapper');
            element.id = this.id;
            element.innerHTML = `
                
                <div class="product-img-border">
                <img src=${this.img} alt="" class="product-image">
                </div>
    
                <div class="product-text">
                <div class="product-title">${this.title}</div>
                <div class="product-price">${this.price} руб.</div>
                </div>
                
                <div class="product-btn">
                <button type="button" class="product-btn-order">Заказать</button>
                <button type="button" class="product-btn-basket">В корзину</button>
                </div>
        
            `;
            this.parent.append(element);
        }
    }
    
    API.products.forEach(({id, title, price, img}) => {                                     // рендерим из API на страницу
        new ProductCard(id, title, price, img, '.list-container').renderCard();
    });

}

export default renderCards;