function product (params) {
	// тут я бы обсуджил как всё-таки правильно проверять входные параметры
	params = params || [];
	let id = params.id || null;
	let title = params.title || '';
	let price = params.price || 0;
	let img = params.img || '';
	
	// собственно для отрисовки нужно бы выделить в отдельный функционал, а тут оставить только получаение данных, но пока так
	
	let templateForList = '<div class="product-card">'+
			'<img class="product-card__product-img" {background}/>'+
			'<div class="product-card__text-block">'+
				'<div class="product-card__product-text">{title}</div>'+
				'<div class="product-card__product-price">{price} руб.</div>'+
			'</div>'+
			'<div class="product-card__button-block">'+
				'<div class="product-card_button-order">Заказать</div>'+
				'<div class="product-card_button-basket">В корзину</div>'+
			'</div>'+
			'<div class="clear"></div>'+
		'</div>';
	
	// спорное решение, но в данном случае 
	let domElementForList = null;
	
	// если нет id считаю что дальше бесполезно возврящаю null
	if (id === null) {
		return null; 
	}
	
	// спорное решение, но в данном случае 
	// отрисовка html кода данного продукта
	function renderForList() {
		if (domElementForList === null) {
			// чтоб не запариваться с кучей dom элементов
			let tmp = document.createElement('div');
			
			let html = templateForList;
			//console.log(html);
			html = html.replace(/{title}/g, title);
			html = html.replace(/{price}/g, price.toLocaleString());
			html = html.replace(/{background}/g, 'style="background-image: url(./'+img+');"');
			tmp.innerHTML = html;
			domElementForList = tmp.children[0];
		}
		return domElementForList; 
	}
	
	// захотелось подготовить html сразу
	renderForList();
	
	function getData(){
		return {
			'id': id,
			'title': title,
			'price': price,
			'img': img,
		};
	}
	
	return {
		'renderForList': renderForList,
		'getData': getData,
	};
}