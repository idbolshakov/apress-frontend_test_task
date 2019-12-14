API.cart = {}

const cart = {

	toggle: function() {
		const cartDOM = document.querySelector('.cart');
		if (cartDOM.classList.contains('cart--visible')) {
				cartDOM.classList.remove('cart--visible');
		} else {
				cartDOM.classList.add('cart--visible');
		}
	},

	order: (id) => {
		const footer = document.querySelector('.footer');
		let product = cart.getProduct(id);
		let footerContent = API.templates.order_popup(product.id,product.img, product.title, product.price.toLocaleString());
		footer.innerHTML = footerContent;
		document.body.classList.add('body--fixed');
	},
	
	orderClose: () => {
		document.querySelector('.popup').remove();
		document.querySelector('.overlay').remove();
		document.body.classList.remove('body--fixed');
	},

	getProduct: (id) => {
		return API.products.filter(product => product.id == id)[0];
	},
	
	add: (id) => {
		API.cart[id] = cart.getProduct(id);
		cart.update();
	},
	
	remove: (id) => {
		delete API.cart[id];
		cart.update();
	},
	
	update: () => {

		let cartContent = '';
		const cartDOM = document.querySelector('.cart');
		const cartWrapper = cartDOM.querySelector('.cart-list');

		for (let cartItem in API.cart) {
			let product = API.cart[cartItem];
			cartContent += API.templates.cart_item(product.id,product.img, product.title, product.price.toLocaleString());
		}

		cartWrapper.innerHTML = cartContent;
		
		if (Object.keys(API.cart).length == 0) {
				cartDOM.classList.remove('cart--visible');
		} else {
				cartDOM.classList.add('cart--visible');
		}

	}

}