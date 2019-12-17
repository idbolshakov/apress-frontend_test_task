
class Products {


	createProductsList () {
		let productsContent = '';

		API.products.forEach(
			product => productsContent += API.templates.product_item(product.id,product.img, product.title, product.price.toLocaleString())
		);

		document.querySelector('.product-list').innerHTML = productsContent;
	}

	init () {
		this.createProductsList();
	}

}

new Products().init();

