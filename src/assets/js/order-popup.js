let orderPopupClass = (function () {
	// синлтон
	// открытие
	// закрытие
	
	let templatePopup = '<div id="order-popup" class="order-popup"></div>';
	let template = '<div> <div class="order-popup__title">{title}</div> <div class="order-popup__close-button"></div> </div>'+
		'<table class="order-popup__table"> <tr>'+
			'<td class="order-popup__table-first-coll"> <img class="order-popup__product-img" style="background-image: url(./assets/images/4.jpg);"> <div class="order-popup__product-price">{price} руб.</div> </td>'+
			'<td class="left-red-border"> <div class="order-popup__comment-title">Комментарий к заказу</div> <textarea class="order-popup__input_size-large"></textarea> </td>'+
		'</tr> <tr>'+
			'<td class="order-popup__table-first-coll order-popup__phone-title">Ваш телефон*:</td>'+
			'<td><input class="order-popup__input_size" /></td>'+
		'</tr><tr>'+
			'<td class="order-popup__table-first-coll"></td>'+
			'<td> <div class="order-popup__button">Отправить</div> </td>'+
		'</tr></table>';
	
	let orderPopupNode = null; // при создании сразу генерим основу окна
	
	let tmp = document.createElement('div');// чтоб не запариваться с кучей dom элементов
	tmp.innerHTML = templatePopup;
	orderPopupNode = tmp.children[0];
	
	document.body.appendChild(orderPopupNode);
	
	// при открытии перегенерируем контент под конкретный продукт
	function open(product) {
		let html = template;
		
		let data = product.getData();
		
		html = html.replace(/{title}/g, data.title);
		html = html.replace(/{price}/g, data.price.toLocaleString());
		html = html.replace(/{background}/g, 'style="background-image: url(./'+data.img+');"');
		
		orderPopupNode.innerHTML = html;
		
		let closeButton = orderPopupNode.getElementsByClassName('order-popup__close-button')[0];
		closeButton.addEventListener('click', close);
		
		let addInBasketButton = orderPopupNode.getElementsByClassName('order-popup__button')[0];
		addInBasketButton.addEventListener('click', function () { basketPopup.addProduct(product); close(); });
		
		orderPopupNode.style.display = "block";
	}
	
	function close() {
		orderPopupNode.style.display = "none";
	}
	
	let instance;
	instance = {
		'open': open,
		'close': close
	};
	
	return function () {
		return instance;
	}
})();

let orderPopup = orderPopupClass();