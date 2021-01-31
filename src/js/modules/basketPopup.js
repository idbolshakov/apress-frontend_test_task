import Card from './classes.js';

function basketPopup() {                                                                                    // функция отображения окна корзины

    class ProductBasket extends Card {                                                                      // создаем класс окна корзины
        
        renderBasket() {                                                                                    // метод для отрисовки окна корзины
            const element = document.createElement('div');
            element.classList.add('popup-basket-product-item');
            element.innerHTML = `
                
            <div class="popup-basket-img-border product-img-border">
                <img src=${this.img} alt="" class="product-basket-image product-image">
            </div>
            <div class="popup-basket-product-title">${this.title}</div>
            <div class="popup-basket-price">${this.price} руб.</div>
            <div class="popup-basket-close">&times;</div>
        
            `;
            this.parent.append(element);
        }

        shortTitle() {                                                                                      // метод для обрезки названия товара, чтобы влезало в окно корзины 
            if (this.title.length > 25) {
                this.title = this.title.substring(0, 26) + '...';
            }
        }
    }

    const basketBtn = document.querySelectorAll('.product-btn-basket');                                     // берем все кнопки "в корзину" из карточек товара

    basketBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.target;

            API.products.forEach(({id, title, price, img}) => {    
                if (target.parentNode.parentNode.id == id) {                                                // id товара, на котором нажата кнопка совпадает с id товара из API

                    const basket = new ProductBasket(id, title, price, img, '.popup-basket-product');       
                    basket.shortTitle();
                    basket.renderBasket();
                    

                    const popup = document.querySelector('.popup-basket'),
                          closeProduct = document.querySelectorAll('.popup-basket-close');

                    if (!popup.style.display || popup.style.display == 'none') {                            // если окна на странице нет, показываем его
                        popup.style.display = 'block';
                    }

                    closeProduct.forEach(close => {                                                         // при нажатии на "крестик" убираем товар из окна корзины
                        close.addEventListener('click', () => {
                            close.parentNode.remove();

                            if (!document.querySelector('.popup-basket-product-item')) {                    // если убирается последний товар, то закрываем окно корзины
                                popup.style.display = 'none';
                            }
                        });
                    });
                }
            }); 
        });
    });

    function closePopupBasket() {                                                                           // функция закрытия окна корзины по кнопке "перейти в корзину" и очистке этого окна от товаров
        const closeBasket = document.querySelector('.popup-basket-btn');

        closeBasket.addEventListener('click', () => {
            const popup = document.querySelector('.popup-basket'),
                  products = document.querySelectorAll('.popup-basket-product-item');

            products.forEach(product => {
                product.remove();
            });

            popup.style.display = 'none';
        });
    }

    closePopupBasket();
}

export default basketPopup;