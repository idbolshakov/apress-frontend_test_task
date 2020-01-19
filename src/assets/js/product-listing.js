// реализация списка продуктов, при вызове сразу указываем HTMLelement и список продуктов в виде массива 
function productListing (elem, productList) {
	// Получение списка продуктов 
	// отрисовка списка
	
	let products = [];
	let domElement = null;
	
	// обработка входных данных, реализован только идеальный вариант когда всё верно передано
	if (elem instanceof HTMLElement) {
		domElement = elem;
	}
	
	if (productList instanceof Array) {
		let tmp;
		// можно и через .forEach()
		for (let i=0; i<productList.length; i++) {
			tmp = product(productList[i]);
			if (tmp!==null) products.push(tmp);
		}
		render();
	}
	
	// реализация добавления product в products, например позже понадобилось, в задании не сказано, на стал реализацию писать
	// function add() { }
	
	// реализация удаление product отдельно, например позже понадобилось, в задании не сказано, на стал реализацию писать
	// function del() { }
	
	// отрисовка
	function render() {
		let tmp;
		for (let i=0; i<products.length; i++) {
			tmp = products[i].renderForList();
			if(tmp instanceof HTMLElement){
				domElement.appendChild(tmp);
				let basketButton = tmp.getElementsByClassName('product-card_button-basket')[0];
				let orderButton = tmp.getElementsByClassName('product-card_button-order')[0];
				// навешать события 
				basketButton.addEventListener('click', function () { basketPopup.addProduct(products[i]); });
				orderButton.addEventListener('click', function () { orderPopup.open(products[i]); });
			}
		}
	}
	
	
	return {
		'render': render,
		//'add': add // в данном случае не реализовывал
		//'del': del // в данном случае не реализовывал
	}
}