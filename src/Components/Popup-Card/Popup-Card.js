const _POPUP_CARD = document.querySelector('.product-popup-card');
const btnCard = document.querySelectorAll('.catalog-item__btn-add');
const btnClose = document.querySelectorAll('.popup-card__close');

class PopupCard {

   clickBtnAdd = () => {

      for (let index = 0; index < API.products.length; index++) {
         const element = API.products[index];

         btnCard[index].addEventListener('click', (e) => {
            const target = e.target;

            let popupCard = '';

            _POPUP_CARD.style.display = 'block';
            
            if(target.dataset.add == element.id) {
               let { title, price, img } = element;
               popupCard += `
                  <div class='popup-card__item'>
                     
                     <div class='popup-card__block'>
                        <img src='${img}' class='popup-card__img'/>
                        <div class='popup-card__text'>
                           <span class='popup-card__subtitle'>${title}</span>
                           <span class='popup-card__price'>${price} руб.</span>
                        </div>
                        <div class='popup-card__close'>X</div>
                     </div>
                     <a href='#'><button class='popup-card__btn'>Перейти в корзину</button></a>
                  </div>
            `;
            }

            const htmlPopupCard = `
            <div class='popup-card__title'>Вы добавили в корзину</div>
            <div class="popup-card__container">
               ${popupCard}
            </div>
            `;

            _POPUP_CARD.innerHTML = htmlPopupCard;
            })
      }
   }

   clickClose = () => {
      
      _POPUP_CARD.addEventListener('click', (e) =>  {
         let target = e.target;
         if(target.className === 'popup-card__close') {
            _POPUP_CARD.style.display = 'none';
         }
      });
   
   }

   render() {
      this.clickBtnAdd();
      this.clickClose();
      
   }
}

const popupCardPage = new PopupCard();
popupCardPage.render();