
class Products {

	constructor(){}

	createProductsList() {
		const productWrapper = document.querySelector('.product-list');
		let productsContent = '';

		for (let product of API.products) {
			console.log(product.price);
			productsContent += API.templates.product_item(product.id,product.img, product.title, product.price.toLocaleString());
		}

		productWrapper.innerHTML = productsContent;

	}

	init() {
		this.createProductsList();
	}

}

new Products().init();

