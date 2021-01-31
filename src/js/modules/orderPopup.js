import Card from './classes.js';

function orderPopup() {                                                                     // функция отображения окна заказа

    class Order extends Card {                                                              // создаем класс окна заказа
        
        renderOrder() {                                                                     // метод для отрисовки окна заказа
            const element = document.createElement('div');
            element.classList.add('popup-order-content');
            element.innerHTML = `
                
                <div class="popup-order-close">&times;</div>
                <div class="popup-order-title">${this.title}</div>
    
                <div class="popup-order-product-info-wrapper">
    
                    <div class="popup-order-img-border product-img-border">
                        <img src=${this.img} alt="" class="product-order-image product-image">
                    </div>
                    <div class="popup-order-price product-price">${this.price} руб.</div>
    
                </div>
    
                <div class="popup-order-line"></div>
    
                <form class="popup-order-form" action="#">
                    <div class="popup-order-comment-wrapper">
                        <div class="popup-order-comment-title">Комментарий к заказу:</div>
                        <textarea class="popup-order-comment" name="comment"></textarea>
                    </div>
                    <div class="popup-order-phone-wrapper">
                        <div class="popup-order-phone-title">Ваш телефон*:</div>
                        <input class="popup-order-phone" name="phone" type="tel">
                        <button class="popup-order-btn product-btn-order" type="submit">Отправить</button>
                    </div>
                </form>
        
            `;
            this.parent.append(element);
        }
    }

    const orderBtn = document.querySelectorAll('.product-btn-order');                       // берем все кнопки "заказать" из карточек товара

    orderBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.target;

            if (!document.querySelector('.popup-order-content')) {                          // запрет повторного открытия окна, если оно уже открыто

                API.products.forEach(({id, title, price, img}) => {    
                    if (target.parentNode.parentNode.id == id) {                            // id товара, на котором нажата кнопка совпадает с id товара из API
    
                        new Order(id, title, price, img, '.popup-order').renderOrder();     // добавили окно заказа с нужными данными в HTML
    
                        const popup = document.querySelector('.popup-order'),
                              close = document.querySelector('.popup-order-close');
    
                        popup.style.display = 'block';                           
    
                        close.addEventListener('click', () => {
                            popup.style.display = 'none';
                            document.querySelector('.popup-order-content').remove();
                        });
                    }
                }); 
            };
        });
    });
}

export default orderPopup;