let basketPopupClass = (function () {
	// синлтон
	// добавление в корзину
	// удаление из карзины
	// подготовка html корзины?
	// показ/скрытие корзины
	
	let template = '<div id="basket-popup" class="basket-popup">'+
		'<div class="basket-popup__title">Вы добавили в корзину</div>'+
		'<div class="basket-popup__shopping-list">'+
		'</div>'+
		'<div class="basket-popup__button">Перейти в корзину</div>'+
	'</div>';
	
	let templateProduct = '<div class="basket-popup__product">'+
		'<div class="basket-popup__product-img"></div>'+
		'<div class="basket-popup__product-text">{title}</div>'+
		'<div class="basket-popup__product-price">{price} руб.</div>'+
		'<div class="basket-popup__product-del-button">[ X ]</div>'+
	'</div>';
	
	let products = [];
	let domTemplates = []; // чтоб не перегенерировать код добавленных сохраняем
	
	// в задании не сказано про управление кол-вом в корзине
	function add(product) {
		let ind = products.indexOf(product);
		if (ind==-1) {
			products.push(product);
		}
		popupOpen();
	}
	
	function del(product) {
		let ind = products.indexOf(product);
		if (ind!=-1) {
			products.splice(ind, 1);
			domTemplates.splice(ind, 1);
		}
		render();
	}
	
	// отрисовка 1 позиции в карзине
	function renderProduct(i){ 
		if (typeof(domTemplates[i]) === "undefined") {
			let product = products[i];
			let data = product.getData();
			let tmp = document.createElement('div'); // чтоб не запариваться с кучей dom элементов
			
			let html = templateProduct;
			html = html.replace(/{title}/g, data.title);
			html = html.replace(/{price}/g, data.price.toLocaleString());
			html = html.replace(/{background}/g, 'style="background-image: url(./'+data.img+');"');
			tmp.innerHTML = html;
			
			let basketButton = tmp.getElementsByClassName('basket-popup__product-del-button')[0];
					// навешать события 
			basketButton.addEventListener('click', function (e) {
				basketPopup.delProduct(product); 
			});
					
			domTemplates[i] = tmp.children[0];
		}
		return domTemplates[i]; 
	}
	
	//отрисовка списка продуктов из корзины
	function render(){
		let tmp;
		basketProductListNode.innerHTML = '';
		
		if(products.length==0){
			popupClose();
		} else {
			for (let i=0; i<products.length; i++) {
				tmp = renderProduct(i);
				if(tmp instanceof HTMLElement){
					basketProductListNode.appendChild(tmp);
				}
			}
		}
	}
	
	function popupOpen() {
		render();
		basketNode.style.display = "block";
	}
	
	function popupClose() {
		basketNode.style.display = "none";
	}
	

	let basketNode = null;
	let basketProductListNode = null;
	
	let html = template;
	
	let tmp = document.createElement('div');// чтоб не запариваться с кучей dom элементов
	tmp.innerHTML = html;
	basketNode = tmp.children[0];
	basketProductListNode = basketNode.getElementsByClassName('basket-popup__shopping-list')[0];
	
	document.body.appendChild(basketNode);
	
	let instance;
	instance = {
		'addProduct': add,
		'delProduct': del,
		'open': popupOpen,
		'close': popupClose,
	};
	
	return function () {
		return instance;
	}
})();

let basketPopup = basketPopupClass();