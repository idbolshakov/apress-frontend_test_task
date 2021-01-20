/** @format */

class Products {
	render() {
		let htmlCatalog = "";
		pro.forEach(({ title, price, img, id }) => {
			htmlCatalog += `
        <div class="catalog__item">
			<div>
				<img class="catalog__img" src="${img}" />
			</div>

			<div>
				<p class="catalog__title">${title}</p>
				<p class="catalog__price">${price.toLocaleString()}</p>
			</div>
			<div class="catalog__btn">
				<div class="catalog__orger button btn" id="catalog__orger" data-id="${id}"> Заказать </div>
				<button class="catalog__basket button btn" id="catalog__basket" data-id="${id}1"> В карзину </button>
			</div>
		</div>


    	<section class="popap">
			<div class="modal-wrapper">
				<div class="modal-wrapper-block" data-popup="${id}">
					<div class="modal-block modal-order">
						<img class="modal-close" src="https://www.pulscen.ru/system/ckeditor_assets/pictures/219824/content_close_2.png" alt="" />
						<p class="modal-order__title">${title}</p>
						<div class="catalog-popap__coll">
							<div class="catalog-popap__line">
								<img class="catalog__img" src="${img}" />
								<p class="catalog__price">${price.toLocaleString()}</p>
							</div>
							<div class="catalog-popap__textarea">
								<p class="catalog-popap__textarea-title">Комментарий к заказу</p>
								<textarea class="catalog-popap__textarea-input" name="" id="" cols="30" rows="10"></textarea>
							</div>
						</div>

						<div class="catalog-popap__collPhone">
							<div class="catalog-popap__phone">
								<p>Ваш телефон*:</p>
							</div>
							<div class="catalog-popap__feed">
								<input type="number" />
								<div class="catalog__orger-popap btn button" id="catalog__orger" data-id="${id}"> Отправить </div>
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
							<img class="modal-backet__treu" src="src/assets/images/Vector25.png" />
						</div>
						
						<div class="catalog-backet__coll">
							<div class="">
								<img class="catalog__img" src="${img}" />
							</div>
							<div class="modal-backet__info">
								<p class="modal-backet__title">${title}</p>
								<p class="modal-backet__price">${price.toLocaleString()} руб</p>
							</div>
								<div class="">
							<img class="modal-backet__img " src="src/assets/images/close.png" />
							</div>
						</div>
						
                        <div class="catalog__orger-popap catalog__backet-popap btn button" id="catalog__orger" > Перейти в корзину </div>
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



$(".button").on("click", function (event) {
	event.preventDefault();
	let modal = $(this).attr("data-id");
	console.log(modal);
	$(".modal-wrapper-block").each(function () {
		if ($(this).attr("data-popup") === modal) $(this).fadeIn(100);
	});
});

$(".modal-wrapper-block").on("click", function (event) {
	if ($(event.target).is(".modal-close, .modal-backet__img") || $(event.target).is(".modal-wrapper-block")) {
		$(this).fadeOut(200);
	}
	console.log(this);
});



$(document).keyup(function (event) {
	if (event.which == "27") {
		$(".modal-wrapper-block").fadeOut(200);
	}
});
