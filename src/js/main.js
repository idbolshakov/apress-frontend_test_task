const productListingWrapper = document.querySelector('.product-listing-wrapper');
const productList = document.createElement('div');
const productTemplate = document.querySelector('#product-template').content;
const product = productTemplate.querySelector('.product-item');
const overlay = document.querySelector('#overlay');
const popupOrder = document.querySelector('.popup-order');
const orderClose = document.querySelector('.order-close');
const popupCart = document.querySelector('.popup-cart');

const toggleDisplay = function () {
	popupOrder.classList.toggle('show');
	overlay.classList.toggle('show');
}

const showPopupOrder = function (itemId) {
	const currentProduct = API.products.find(item => item.id == itemId);

	popupOrder.querySelector('.order-img').setAttribute('src', currentProduct.img);
	popupOrder.querySelector('.order-img').setAttribute('alt', currentProduct.title);
	popupOrder.querySelector('.order-title').textContent = currentProduct.title;
	popupOrder.querySelector('.order-price').textContent = `${currentProduct.price.toLocaleString('ru-RU')} руб.`;

	toggleDisplay();
}

const addProductToCart = function (itemId) {
	const currentProduct = API.products.find(item => item.id == itemId);

	popupCart.querySelector('.cart-img').setAttribute('src', currentProduct.img);
	popupCart.querySelector('.cart-img').setAttribute('alt', currentProduct.title);
	popupCart.querySelector('.cart-product-title').textContent = currentProduct.title;
	popupCart.querySelector('.cart-product-price').textContent = `${currentProduct.price.toLocaleString('ru-RU')} руб.`;

	popupCart.classList.toggle('show');

	setTimeout(() => popupCart.classList.toggle('show'), 2000);
}

orderClose.onclick = event => {
	event.preventDefault();

	toggleDisplay();
}

productList.classList.add('product-list');
productListingWrapper.append(productList);

API.products.forEach(function createProductItem(item) {
	const productItem = product.cloneNode(true);

	productItem.id = 'product' + item.id;
	productItem.querySelector('img').setAttribute('src', item.img);
	productItem.querySelector('img').setAttribute('alt', item.title);
	productItem.querySelector('.product-title').textContent = item.title;
	productItem.querySelector('.product-price').textContent = `${item.price.toLocaleString('ru-RU')} руб.`;

	productItem.querySelector('.btn-order').onclick = (event) => {
		event.preventDefault();

		showPopupOrder(item.id);
	};

	productItem.querySelector('.btn-cart').onclick = (event) => {
		event.preventDefault();

		addProductToCart(item.id);
	};
	
	productList.append(productItem);
});

window.addEventListener('scroll', function () {
	if (window.pageYOffset > 200) {
		document.querySelector('.header').classList.add('fixed-header');
	} else {
		document.querySelector('.header').classList.remove('fixed-header');
	}
});
