/** @format */

class Products {
	render() {
		let htmlCatalog = "";
		pro.forEach(({ title, price, img, id }) => {
			htmlCatalog += `

	
        <div class="goods">
			<div>
				<img class="goods__img" src="${img}" />
			</div>

			<div>
				<p class="goods__title">${title}</p>
				<p class="goods__price">${price.toLocaleString()}</p>
			</div>
			<div class="goods__btns">
				<button type="text" class="goods__orger button" id="catalog__orger" data-id="${id}"> Заказать </button>
				<button type="text" class="goods__basket button" id="catalog__basket" data-id="${id}1"> В карзину </button>
			</div>
		</div>


    	<section class="popap">
			<div class="modal-wrapper">
				<div class="modal-wrapper-block" data-popup="${id}">
					<div class="modal-block modal-order">
						<img class="modal-close" src="https://www.pulscen.ru/system/ckeditor_assets/pictures/219824/content_close_2.png" alt="" />
						<p class="modal-order__title">${title}</p>
						<div class="modal-order-info">
							<div class="modal-order-info__line">
								<img class="goods__img" src="${img}" />
								<p class="modal-order-info__price">${price.toLocaleString()}</p>
							</div>
							<div class="modal-order-info__feedBack">
								<p class="modal-order-info__title">Комментарий к заказу</p>
								<textarea class="modal-order-info__input" name="" id="" cols="30" rows="10"></textarea>
							</div>
						</div>

						<div class="modal-order-feedBack">
							<div class="modal-order-feedBack__phone">
								<p>Ваш телефон*:</p>
							</div>
							<div>
								<input type="number" />
								<div class="modal-order__btn button" id="catalog__orger" data-id="${id}"> Отправить </div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="modal-wrapper">
				<div class="modal-wrapper-block" data-popup="${id}1">
					<div class="modal-block modal-backet">

						<div class="modal-backet__heading">
							<p class="">Вы добавили в карзину</p>	
							<img class="modal-backet__triangle" src="assets/images/Vector25.png" />
						</div>
						
						<div class="catalog-backet__coll">
							<div class="">
								<img class="goods__img" src="${img}" />
							</div>
							<div class="modal-backet__info">
								<p class="modal-backet__title">${title}</p>
								<p class="modal-backet__price">${price.toLocaleString()} руб</p>
							</div>
								<div class="">
							<img class="modal-backet__img " src="assets/images/close.png" />
							</div>
						</div>
						
                        <div class="modal-backet__btn button" id="catalog__orger" > Перейти в корзину </div>
					</div>
				</div>
			</div>
		</section>
            `;
		});

		const html = `
            <div class="catalog" > ${htmlCatalog}</div>
                `;

		ROOT_PRODUCTS.innerHTML = html;
	}
}

const productsPage = new Products();
productsPage.render();




