const btnsOrders = document.querySelectorAll('.order');
const btnsBasket = document.querySelectorAll('.basket');

const state = {
  status: 'initial',
  currentThing: null,
};

const hundleCloseBtn = () => {
  state.status = 'initial';
  render(state);
};

const getModalOrder = (modal, currentId) => {
  const thing = API.products.find(({ id }) => id === Number(currentId));
  const { title, img, price } = thing;
  const correctPrice = getCorrectPrice(price);
  modal.innerHTML = (
    `<h3 class="heading">${title}</h3>
     <div class="close" >&times</div>
     <div class="flex-container-ordered">
       <div class="order-info">
         <img class="image-order" src="./${img}">
         <h3 class="price-order">${correctPrice}</h3>
       </div>
       <div class="comment">
         Комментарий <br>к заказу:
       </div>
       <div class="area">
         <textarea class="textarea"></textarea>
       </div>
     </div>
     <div class="flex-container-phone">
       <p class="phone">Ваш телефон*:</p>
       <div class="footer">
         <input class="input" type="text" value="">
         <button class="send-button" type="submit">Отправить</button>
       </div>
     </div>`
  );
  modal.classList.remove('no-active');
  modal.classList.add('active');
  const btnClose = modal.querySelector('.close');
  btnClose.addEventListener('click', hundleCloseBtn);
};

const getModalBasket = (modal, currentId) => {
  const thing = API.products.find(({ id }) => id === Number(currentId));
  const { title, img, price } = thing;
  const correctPrice = getCorrectPrice(price);
  modal.innerHTML = (
    `<div class="flex-container-basket">
       <div class="head-basket">Вы добавили в корзину:</div>
     </div>
     <div class="main-basket">
       <div class="container-image">
         <img class="image-basket" src="./${img}">
       </div>
       <div class="text-basket">
         <p>${title}</p>
         <h4>${correctPrice}</h4>
       </div>
       <div class="close-basket" >&times</div>
     </div>
     <div class="footer-basket">
       <button type="submit">Перейти в корзину</button>
     </div>`
  );
  modal.classList.remove('no-active');
  modal.classList.add('active');
  const btnClose = modal.querySelector('.close-basket');
  btnClose.addEventListener('click', hundleCloseBtn);
};

const render = (state) => {
  const modalOrder = document.querySelector('.modal-order');
  const modalBasket = document.querySelector('.modal-basket');
  if (state.status === 'initial') {
    modalOrder.innerHTML = '';
    modalOrder.classList.remove('active');
    modalOrder.classList.add('no-active');
    modalBasket.innerHTML = '';
    modalBasket.classList.remove('active');
    modalBasket.classList.add('no-active');
  }
  if (state.status === 'order') {
    getModalOrder(modalOrder, state.currentThing);
  }
  if (state.status === 'basket') {
  	getModalBasket(modalBasket, state.currentThing);
  }

};

const hundleOrderBtn = ({ target }) => {
  state.status = 'order';
  state.currentThing = target.id;
  render(state);
};

const hundleBasketBtn = ({ target }) => {
  state.status = 'basket';
  state.currentThing = target.id;
  render(state);
};

btnsOrders.forEach((btn) => 
  btn.addEventListener('click', hundleOrderBtn));

btnsBasket.forEach((btn) => 
  btn.addEventListener('click', hundleBasketBtn));
