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
	if (typeof cart_data === "undefined") cart_data = JSON.parse(localStorage.getItem("cart")) || {};
	let len = Object.keys(cart_data).length,
		popup_wrap = document.createElement("div"),
		popup = document.createElement("form"),
		popup__title,
		popup__row1,
		popup__col1,
		popup__img,
		popup__price,
		popup__comment,
		popup__comment_textarea,
		popup__total_price = document.createElement("div"),
		total_price = 0,
		popup__row2 = document.createElement("div"),
		popup__phone = document.createElement("input"),
		popup__submit = document.createElement("input"),
		popup__close = document.createElement("div");

	if (len === 0) return false;

	popup__phone.setAttribute("type", "tel");
	popup__phone.setAttribute("name", "phone");
	popup__phone.setAttribute("autocomplete", "on");
	popup__phone.setAttribute("required", "");
	popup__phone.classList.add("phone");
	popup__total_price.classList.add("price");
	popup__row2.classList.add("row2");
	popup__submit.setAttribute("type", "submit");
	popup__submit.value = "Отправить";
	popup__submit.classList.add("submit");
	popup__close.classList.add("close");
	popup.classList.add("popup-form");
	popup.setAttribute("action", "#");
	popup.setAttribute("method", "post");
	popup.setAttribute("name", "checkout");
	popup_wrap.classList.add("popup-wrap");

	for (let key in cart_data) {
		popup__title = document.createElement("div");
		popup__row1 = document.createElement("div");
		popup__col1 = document.createElement("div");
		popup__img = document.createElement("img");
		popup__price = document.createElement("div");
		popup__comment = document.createElement("div");
		popup__comment_textarea = document.createElement("textarea");

		popup__title.innerText = cart_data[key]["title"];
		popup__title.classList.add("title");
		popup__img.src = cart_data[key]["img"];
		popup__img.classList.add("preview");
		popup__price.innerText = cart_data[key]["price"].toLocaleString("ru-RU") + " ₽";
		popup__price.classList.add("price");
		popup__col1.classList.add("col1");
		popup__comment.classList.add("comment-section");
		popup__comment_textarea.classList.add("comment");
		popup__row1.classList.add("row1");
		total_price += cart_data[key]["price"];

		popup.appendChild(popup__title);
		popup__col1.appendChild(popup__img);
		popup__col1.appendChild(popup__price);
		popup__row1.appendChild(popup__col1);
		popup__comment.appendChild(popup__comment_textarea);
		popup__row1.appendChild(popup__comment);
		popup.appendChild(popup__row1);
	}

	if (len > 1) {
		popup__total_price.innerText = total_price.toLocaleString("ru-RU") + " ₽";
		popup.appendChild(popup__total_price);
	}
	popup__row2.appendChild(popup__phone);
	popup.appendChild(popup__row2);
	popup.appendChild(popup__submit);
	popup.appendChild(popup__close);
	popup_wrap.appendChild(popup);
	document.body.appendChild(popup_wrap);

	popup__submit.addEventListener("click", function() { popup_wrap.remove(); }, false);
	popup__close.addEventListener("click", function() { popup_wrap.remove(); }, false);
};


const quick_checkout = function(item) {
	let id = item.currentTarget.dataset["id"],
		data = API.products.find(function(o) {return o["id"] == id});

	checkout({"id": data});
};

const render_cart = function(e) {
	let cart_data = JSON.parse(localStorage.getItem("cart")) || {},
		len = Object.keys(cart_data).length;

	for (let key in cart_data) {
		let item = document.createElement("div"),
			img = document.createElement("img"),
			txt = document.createElement("div"),
			title = document.createElement("div"),
			price = document.createElement("div"),
			item_remove = document.createElement("div");

		img.src = cart_data[key]["img"];
		img.classList.add("preview");
		img.setAttribute("loading", "lazy");
		img.setAttribute("alt", cart_data[key]["title"]);
		title.innerText = cart_data[key]["title"];
		title.classList.add("title");
		price.innerText = cart_data[key]["price"].toLocaleString("ru-RU") + " ₽";
		price.classList.add("price");
		txt.classList.add("text");
		item_remove.dataset["id"] = cart_data[key]["id"];
		item_remove.classList.add("remove");
		item.classList.add("item");

		item.appendChild(img);
		txt.appendChild(title);
		txt.appendChild(price);
		item.appendChild(txt);
		item.appendChild(item_remove);
		cart_popup__content.appendChild(item);
		cart__len.innerText = len || "";

		item_remove.addEventListener("click", remove_from_cart, false);
	}
};

const add_to_cart = function(e) {
	let cart_data = JSON.parse(localStorage.getItem("cart")) || {},
		id = e.currentTarget.dataset["id"],
		data = API.products.find(function(o) {return o["id"] == id}),
		item = document.createElement("div"),
		img = document.createElement("img"),
		txt = document.createElement("div"),
		title = document.createElement("div"),
		price = document.createElement("div"),
		item_remove = document.createElement("div"),
		temp_popup = document.createElement("div");

	if (!(id in cart_data)) {
		cart_data[id] = data;
		localStorage.setItem("cart", JSON.stringify(cart_data));
		let len = Object.keys(cart_data).length;

		img.src = data["img"];
		img.classList.add("preview");
		img.setAttribute("loading", "lazy");
		img.setAttribute("alt", data["title"]);
		title.innerText = data["title"];
		title.classList.add("title");
		price.innerText = data["price"].toLocaleString("ru-RU") + " ₽";
		price.classList.add("price");
		txt.classList.add("text");
		item_remove.dataset["id"] = data["id"];
		item_remove.classList.add("remove");
		item.classList.add("item");
		temp_popup.classList.add("popup");
		temp_popup.innerText = "Товар добавлен в корзину";

		item.appendChild(img);
		txt.appendChild(title);
		txt.appendChild(price);
		item.appendChild(txt);
		item.appendChild(item_remove);
		cart_popup__content.appendChild(item);
		cart__len.innerText = len || "";
		document.body.appendChild(temp_popup);

		item_remove.addEventListener("click", remove_from_cart, false);
		setTimeout(function() { temp_popup.remove(); }, 4000);
	}
};


const remove_from_cart = function(e) {
	e.preventDefault();
	let cart_data = JSON.parse(localStorage.getItem("cart")) || {},
		id = e.currentTarget.dataset["id"];
	delete cart_data[id];
	localStorage.setItem("cart", JSON.stringify(cart_data));
	e.currentTarget.parentElement.remove();

	let len = Object.keys(cart_data).length;
	cart__len.innerText = len || "";
};


const clear_cart = function() {
	localStorage.setItem("cart", JSON.stringify({}));
};


const render_products = function(response) {
	response.products.forEach(function(product) {
		let item = document.createElement("div"),
			img = document.createElement("img"),
			txt = document.createElement("div"),
			title = document.createElement("div"),
			price = document.createElement("div"),
			buttons = document.createElement("div"),
			checkout = document.createElement("div"),
			item_add = document.createElement("div");

		img.src = product["img"];
		img.classList.add("preview");
		img.setAttribute("loading", "lazy");
		img.setAttribute("alt", product["title"]);
		title.innerText = product["title"];
		title.classList.add("title");
		price.innerText = product["price"].toLocaleString("ru-RU") + " ₽";
		price.classList.add("price");
		txt.classList.add("text");
		checkout.innerText = "Заказать";
		checkout.classList.add("checkout");
		checkout.setAttribute("tabindex", "0");
		checkout.dataset["id"] = product["id"];
		item_add.innerText = "В корзину";
		item_add.classList.add("cart-add");
		item_add.dataset["id"] = product["id"];
		item_add.setAttribute("tabindex", "0");
		buttons.classList.add("buttons");
		item.classList.add("item");

		item.appendChild(img);
		txt.appendChild(title);
		txt.appendChild(price);
		item.appendChild(txt);
		buttons.appendChild(checkout);
		buttons.appendChild(item_add);
		item.appendChild(buttons);
		product_listing.appendChild(item);

		checkout.addEventListener("click", quick_checkout, false);
		item_add.addEventListener("click", add_to_cart, false);
	});
};

cart_popup__checkout.addEventListener("click", function() { checkout(); }, false);

render_products(API);
render_cart();

if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
	cart.removeAttribute("tabindex");
	cart.addEventListener("click", function(e) { console.log(e.target === e.currentTarget); if (e.target === e.currentTarget) cart.classList.toggle("open"); }, false);
	document.body.addEventListener("click", function(e) { if (e.target !== cart && cart.classList.contains("open") && !(cart_popup.contains(e.target))) cart.classList.remove("open"); }, false);
}
