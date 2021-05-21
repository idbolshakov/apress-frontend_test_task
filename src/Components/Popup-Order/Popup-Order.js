const _POPUP_ORDER = document.querySelector('.product-popup-order');
const btnOrder = document.querySelectorAll('.catalog-item__btn-buy');

class PopupOrder {

   clickBtnBuy = () => {

      for (let index = 0; index < API.products.length; index++) {
         const elem = API.products[index];

         btnOrder[index].addEventListener('click', (e) => {
            const target = e.target;

            let popupOrder = '';

            _POPUP_ORDER.style.display = 'block';
            
            if(target.dataset.buy == elem.id) {
               let { title, price, img } = elem;
               popupOrder += `
                  <div class="product-order__item">
                     <div class="product-order__block-top">
                       <span class="product-order__title">${title}</span>
                       <div class="product-order__close"> X </div>
                     </div>
                     <div class="product-order__block-body">
                        <div class="product-order__block-left">
                           <img src="${img}" class="product-order__img"/>
                           <span class="product-order__price">${price} руб.</span>
                        </div>
                        <div class="product-order__line"></div>
                        <div class="product-order__block-comment">
                           <span class="product-order__comment">Коментарий к заказу: </span>
                           <textarea rows="10" cols="100" name="text" class="product-order__textarea"></textarea>
                        </div>
                     </div>
                     <div class="product-order__block-footer">
                        <span class="product-order__phone">Ваш телефон*:</span>
                        <input maxlength="11" required class="product-order__input">
                     </div>
                     <button class="product-order__btn">Отправить</button>
                  </div>
            `;
            }

            const htmlPopupOrder = `
            <form class="product-order__container">
               ${popupOrder}
            </form>
            `;

            _POPUP_ORDER.innerHTML = htmlPopupOrder;
            })
      }
   }

   clickCloseOrder = () => {
      
      _POPUP_ORDER.addEventListener('click', (e) =>  {
         let target = e.target;
         if(target.className === 'product-order__close') {
            _POPUP_ORDER.style.display = 'none';
         }
      });
   
   }

   render() {
      this.clickBtnBuy();
      this.clickCloseOrder();
   }
}

const popupOrderPage = new PopupOrder();
popupOrderPage.render();