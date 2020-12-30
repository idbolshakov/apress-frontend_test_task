class Goods {

	headleSetLocationStorage(element, id) {
		const { pushProduct, products } = localStorageUtils.putProducts(id);
	}

	render() {
		let catalog = "";

		API.products.forEach(({id, title, price, img}) => {
			catalog += ` 
				<li class="site-list__item" data-id="${id}">
					<img class="site-list__picture" src="${img}" />
					<div class="site-list__wrapper">
						<h2 class="site-list__title">${title}</h2>
						<p class="site-list__price">${price} руб.</p>
					</div>
					<div class="site-list__button-wrapper">
						<button class="site-list__button buttons-order site-list__button--pink type="button">
							Заказать
						</button>
						<button class="site-list__button buttons-basket" type="button">
							В корзину
						</button>
					</div>
				</li>
			`;
		});

		const productList = ` 
			<ul class="site-list">
				${catalog}
			</ul>
		`;

		const ROOT_PRODUCTS = document.getElementById('goods');
		ROOT_PRODUCTS.innerHTML = productList;
	}
}

const goodPage = new Goods();
goodPage.render();
