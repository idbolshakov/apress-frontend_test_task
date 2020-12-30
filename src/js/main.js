const element = document.querySelector('.site-list__item');

//Рандомное число
const randomId = () => {
	return Math.random().toString(36).substrinf(2,5) + Math.random().toString(36).substring(2,15);
};

//функция, которая вернет карточку товара в корзину
const generateCardProduct = (id, title, price,img) => {
	return `
		<div class="wrapper-basket" data-id="${id}">
			<img class="basket-img" src="${img}" />
			<div class="wrapper-block-basket">
				<h2 class="basket-title">${title}</h2>
				<p class="basket-price">${price}</p>
			</div>
		</div>
	`;
}
//обработчик на кнопку в корзину
const btnBasket = document.querySelectorAll('.buttons-basket');
const basket = document.querySelector('.section-basket');
const basketClouse = document.querySelector('.button-delete');

for (let i = 0; i < btnBasket.length; i++) {
  btnBasket[i].addEventListener("click", function(e) {
    basket.classList.add("section-basket__active");
    let self = e.currentTarget;
    let parent = self.closest('.site-list__item');
    let id = parent.dataset.id;
    let title = parent.querySelector('.site-list__title').textContent;
    let img = parent.querySelector('.site-list__picture').getAttribute('src');
    let price = parent.querySelector('.site-list__price').textContent;
    document.querySelector('.section-basket__wrapper-content').insertAdjacentHTML('afterbegin', generateCardProduct(id, title, price,img));
  });
}

basketClouse.addEventListener("click", function() {
    basket.classList.remove("section-basket__active");
  });

window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    basket.classList.remove('section-basket__active');
  }
});

//функция, которая вернет карточку товара в форму заказа
const generateProduct = (id, title, price,img) => {
	return `
		<div class="wrapper-order" data-id="${id}">
			<h2 class="title-order">${title}</h2>
			<img class="img-order" src="${img}" />
			<p class="price-order">${price}</p>
		</div>
	`;
}

//обработчик на кнопку заказа
const btnOrder = document.querySelectorAll('.buttons-order');
const order = document.querySelector('.order-form');
const orderClouse = document.querySelector('.button-clouse');

for (let j = 0; j < btnBasket.length; j++) {
  btnOrder[j].addEventListener("click", function(e) {
    order.classList.add("order-form-open");
    let self = e.currentTarget;
    let parent = self.closest('.site-list__item');
    let id = parent.dataset.id;
    let title = parent.querySelector('.site-list__title').textContent;
    let img = parent.querySelector('.site-list__picture').getAttribute('src');
    let price = parent.querySelector('.site-list__price').textContent;
    document.querySelector('.order-form__content').insertAdjacentHTML('afterbegin', generateProduct(id, title, price,img));
  });
}



orderClouse.addEventListener("click", function() {
    order.classList.remove("order-form-open");
  });

window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    order.classList.remove('order-form-open');
  }
});

