var API = {
	products: [
		{
			"id": 1,
			"title": "Выкатной детский диван Зайка производитель фабрика Blanes",
			"price": 11740,
			"img": "assets/images/1.jpg"
		},

		{
			"id": 2,
			"title": "Диван Банжо",
			"price": 62839,
			"img": "assets/images/2.jpg"
		},

		{
			"id": 3,
			"title": "Гостиная классика Panamar Classic",
			"price": 267593,
			"img": "assets/images/3.jpg"
		},

		{
			"id": 4,
			"title": "Chairman Диван Релакс Terra 101",
			"price": 31950,
			"img": "assets/images/4.jpg"
		},

		{
			"id": 5,
			"title": "Диван матрас прямой Верн Sleepformer",
			"price": 52450,
			"img": "assets/images/5.jpg"
		},

		{
			"id": 6,
			"title": "2 кресла и стол чайный - комплект «Виктория» (Эдем)",
			"price": 62350,
			"img": "assets/images/6.jpg"
		},

		{
			"id": 7,
			"title": "Современный стильный угловой диван Flex с декоративной столешницей",
			"price": 483000,
			"img": "assets/images/7.jpg"
		},

		{
			"id": 8,
			"title": "Белый диван Deco - Colleccion Alexandra",
			"price": 606400,
			"img": "assets/images/8.jpg"
		},

		{
			"id": 9,
			"title": "Белый диван в гостиную с цветной обивкой",
			"price": 394899,
			"img": "assets/images/9.jpg"
		},

		{
			"id": 10,
			"title": "Двухместный бархатный диван",
			"price": 13240,
			"img": "assets/images/10.jpg"
		},
	]
};


var cart = document.querySelector(".nav .cart"),
	cart__len = cart.querySelector(".cart-len"),
	cart_popup = cart.querySelector(".cart-popup"),
	cart_popup__content = cart_popup.querySelector(".cart-content"),
	cart_popup__checkout = cart_popup.querySelector(".checkout"),
	product_listing = document.querySelector(".product-listing-wrapper");


const checkout = function(cart_data) {
	if (typeof cart_data === "undefined") cart_data = Object.values(JSON.parse(localStorage.getItem("cart")) || {});
	let len = cart_data.length;

	if (len === 0) return false;

	document.body.insertAdjacentHTML("beforeend", `<div class="popup-wrap">
		<form class="popup-form" action="#" method="post" name="checkout">` +
			cart_data.map(function(item) { return `
			<div class="title">` + item["title"] + `</div>
			<div class="row1">
				<div class="col1">
					<img src="` + item["img"] + `" class="preview">
					<div class="price">` + item["price"].toLocaleString("ru-RU") + ` ₽</div>
				</div>
				<div class="comment-section">
					<textarea class="comment"></textarea>
				</div>
			</div>`; }).join("\n") + 
			(len > 1 ? '<div class="price">' + cart_data.map(function (a) { return a["price"] }).reduce(function (a, b) { return a + b }, 0).toLocaleString("ru-RU") + ' ₽</div>' : "") + `
			<div class="row2">
				<input type="tel" name="phone" class="phone" autocomplete="on" required>
			</div>
			<input type="submit" class="submit" value="Отправить">
			<div class="close"></div>
		</form>
	</div>`);

	let popup = document.body.querySelector(".popup-wrap");
	console.log("popup", popup)
	if (popup) popup.addEventListener("click", function(e) {
		let t = e.target;

		if (t.classList.contains("submit")) {
			// Отправка данных
			popup.remove();
		} else if (t.classList.contains("close")) {
			// Отмена
			popup.remove();
		}
	}, false);
};


const quick_checkout = function(e) {
	let t = e.target;
	if (!t.classList.contains("checkout")) return;

	let id = t.dataset["id"],
		data = API.products.find(function(o) {return o["id"] == id});

	checkout({"id": data});
};


const render_cart = function(e) {
	let cart_data = JSON.parse(localStorage.getItem("cart")) || {},
		len = Object.keys(cart_data).length;

	for (let key in cart_data) {
		cart_popup__content.insertAdjacentHTML("beforeend", `<div class="item">
			<img src="` + cart_data[key]["img"] + `" class="preview" loading="lazy" alt="` + cart_data[key]["title"] + `">
			<div class="text">
				<div class="title">` + cart_data[key]["title"] + `</div>
				<div class="price">` + cart_data[key]["price"].toLocaleString("ru-RU") + ` ₽</div>
			</div>
			<div data-id="` + cart_data[key]["id"] + `" class="remove"></div>
		</div>`);
		cart__len.innerText = len || "";
	}
};


const add_to_cart = function(e) {
	let t = e.target;
	if (!t.classList.contains("cart-add")) return;

	let cart_data = JSON.parse(localStorage.getItem("cart")) || {},
		id = t.dataset["id"],
		data = API.products.find(function(o) {return o["id"] == id});

	if (!(id in cart_data)) {
		cart_data[id] = data;
		localStorage.setItem("cart", JSON.stringify(cart_data));
		let len = Object.keys(cart_data).length,
			temp_popup = document.createElement("div");

		cart_popup__content.insertAdjacentHTML("beforeend", `<div class="item">
			<img src="` + data["img"] + `" class="preview" loading="lazy" alt="` + data["title"] + `">
			<div class="text">
				<div class="title">` + data["title"] + `</div>
				<div class="price">` + data["price"].toLocaleString("ru-RU") + ` ₽</div>
			</div>
			<div data-id="` + data["id"] + `" class="remove"></div>
		</div>`);

		cart__len.innerText = len || "";
		temp_popup.classList.add("popup");
		temp_popup.innerText = "Товар добавлен в корзину";
		document.body.appendChild(temp_popup);

		setTimeout(function() { temp_popup.remove(); }, 4000);
	}
};


const remove_from_cart = function(e) {
	let t = e.target;
	if (!t.classList.contains("remove")) return;

	e.preventDefault();
	let cart_data = JSON.parse(localStorage.getItem("cart")) || {},
		id = t.dataset["id"];
	delete cart_data[id];
	localStorage.setItem("cart", JSON.stringify(cart_data));
	t.parentElement.remove();

	cart__len.innerText = Object.keys(cart_data).length || "";
};


const clear_cart = function() {
	localStorage.setItem("cart", JSON.stringify({}));
};


const render_products = function(response) {
	response.products.forEach(function(product) {
		product_listing.insertAdjacentHTML("beforeend", `<div class="item">
			<img src="` + product["img"] + `" class="preview" loading="lazy" alt="` + product["title"] + `">
			<div class="text">
				<div class="title">` + product["title"] + `</div>
				<div class="price">` + product["price"].toLocaleString("ru-RU") + ` ₽</div>
			</div>
			<div class="buttons">
				<div class="checkout" data-id="` + product["id"] + `" tabindex="0">Заказать</div>
				<div class="cart-add" data-id="` + product["id"] + `" tabindex="0">В корзину</div>
			</div>
		</div>`);
	});
};


cart_popup__content.addEventListener("click", remove_from_cart, false);
cart_popup__checkout.addEventListener("click", function() { checkout(); }, false);
product_listing.addEventListener("click", quick_checkout, false);
product_listing.addEventListener("click", add_to_cart, false);

render_products(API);
render_cart();

/* IE11 support */
if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
	cart.removeAttribute("tabindex");
	cart.addEventListener("click", function(e) { console.log(e.target === e.currentTarget); if (e.target === e.currentTarget) cart.classList.toggle("open"); }, false);
	document.body.addEventListener("click", function(e) { if (e.target !== cart && cart.classList.contains("open") && !(cart_popup.contains(e.target))) cart.classList.remove("open"); }, false);
}
