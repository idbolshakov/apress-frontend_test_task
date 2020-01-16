var template = `
<div class="product-item">
	<div class="product_image product-item-part">
		<img src="%img%" class="img-responsive" alt="">
	</div>
	<div class="product_content product-item-part">
		<h3 class="subtitle">%title%</h3>
		<div class="price">
			<span class="amount">%price%</span>
		</div>
	</div>
	<div class="product_controll product-item-part">
		<div class="box-buttons">
			<div class="button-wrap">
				<button class="button btn-accent action buy">Заказать</button>
			</div>
			<div class="button-wrap">
				<button class="button">В корзину</button>
			</div>
		</div>
	</div>
</div>
`;

function render()
{
	var $list = $(".product-list");

	// clean
	$list.html('');

	for (var i = 0, length = API.products.length - 1; i < length; i++) {
		var title = API.products[i].title;
		var price = API.products[i].price;
		var img = API.products[i].img;

		var _product = template.replace(/%title%/g, title).replace(/%price%/g, price).replace(/%img%/g, img);

		$list.append(_product);
	}
}

$(document).ready(function(){

	render();

	$(".window .close").on("click", function(){
		var mainWindow = $(this).parent().parent();
		mainWindow.fadeOut(200);
	});
	
	$(".basket.action").on("click", function(){
		$(".shop-cart").fadeToggle(200);
	});

	$(".buy.action").on("click", function(){
		$(".window.order").fadeIn(200);
	});

});