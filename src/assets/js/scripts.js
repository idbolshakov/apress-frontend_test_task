document.addEventListener('DOMContentLoaded', function () {
	var products = API.products;
	var wrapper = document.getElementById('product-listing-wrapper');
	var popupCart = document.getElementById('cart-popup');
	var orders = 0;
	var productsCart = [];

	products.forEach(function(product, i, products) {
		var html = `
	    	<div class="image">
	    		<img src="` + product.img + `" alt="Image ` + product.id + `">
	    	</div>
	    	<div class="info">
	    		<h3 class="title">` + product.title + `</h3>
	    		<p class="price">` + product.price + ` руб.</p>
	    	</div>
	    	<div class="buttons">
	    		<button id="to-order-button-` + product.id + `">Заказать</button>
	    		<button id="to-cart-button-` + product.id + `">В корзину</button>
	    	</div>
		`;
		var tag = document.createElement('div');
		tag.className = "m-product";
		tag.innerHTML = html;
  		wrapper.appendChild(tag);

  		var buttonToOrder = document.getElementById('to-order-button-' + product.id);
		buttonToOrder.onclick = function () {
			var htmlPopup = `
				<h3 class="title">` + product.title + `</h3>
				<div class="product">
					<div class="image"><img src="` + product.img + `" alt="Image ` + product.id + `"></div>
					<div class="price"><span>` + product.price + ` руб.</span></div>
				</div>
				<form>
					<div class="field-block">
						<label for="comment">Комментарий к заказу:</label>
						<textarea name="comment" id="comment" cols="50" rows="5"></textarea>
					</div>
					<div class="field-block">
						<label for="tel">Ваш телефон*:</label>
						<input type="text" name="tel" id="tel">
					</div>
					<button id="submit-button-` + product.id + `">Отправить</button>
				</form>
			`;
			var htmlWrapper = document.createElement('div');
			var popup = document.getElementById('order-popup');
			var fill = document.getElementById('fill');

			htmlWrapper.className = "wrapper";
			htmlWrapper.innerHTML = htmlPopup;
			popup.appendChild(htmlWrapper);

			popup.className = "show-popup";
			fill.className = "show-fill";

			var buttonToSubmit = document.getElementById('submit-button-' + product.id);
			var popup = document.getElementById('order-popup');
			var fill = document.getElementById('fill');

			buttonToSubmit.onclick = function () {
				popup.className = "";
				fill.className = "";
			};

			fill.onclick = function () {
				popup.className = "";
				fill.className = "";
			};

			popupCart.className = "";
		};

  		var buttonToCart = document.getElementById('to-cart-button-' + product.id);
  		buttonToCart.onclick = function () {
  			var counter = document.getElementById('cart-counter-id');
  			var productList = document.getElementById('product-list-id');
  			var htmlProduct = `
				<div class="image"><img src="` + product.img + `" alt="Fa"></div>
				<div class="info">
					<h4 class="title">` + product.title + `</h4>
					<p class="price">` + product.price + ` руб.</p>
				</div>
				<button id="remove-product-from-cart-` + product.id + `"><span></span></button>
  			`;
  			var productWrapper = document.createElement('div');
  			productWrapper.innerHTML = htmlProduct;
  			productWrapper.className = "product";
  			productWrapper.id = "product-" + product.id;
  			productList.appendChild(productWrapper);

			orders++;
			counter.innerHTML = orders;
			popupCart.className = "show-popup";
			productsCart.push(product);

			var buttonToRemove = document.getElementById('remove-product-from-cart-' + product.id);
			buttonToRemove.onclick = function () {
				delete productsCart[product.id - 1];
  				document.getElementById('product-' + product.id).remove();
  				orders--;
				counter.innerHTML = orders;
			};
  		};
	});

	var buttonToggleCart = document.getElementById('h-toggle-cart');
	buttonToggleCart.onclick = function () {
		if (popupCart.className == "show-popup"){
			popupCart.className = "";
		} else {
			popupCart.className = "show-popup";
		}
	};
});