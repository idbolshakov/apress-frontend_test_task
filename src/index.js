
const
    _modalWrapper = document.querySelector('.modal-wrapper'),
    _mainContent = document.querySelector('.js-body'),
    _basketCurrent = document.querySelector('.iconBasket__current'),
    _body = document.querySelector('body'),
    _productCatalog = '';


productsArray = []
productsArrayId = []

const products = API.products
products.forEach((element) => {
    renderCatalog(element.img, element.title, element.price.toLocaleString(), element.id)
});

// проверяем на какой попап кликнули и открываем нужный
_mainContent.onclick = e => {
    if (e.target.getAttribute('id-button') !== 'button') return false
    if (!e.target.parentNode) return false

    productNode = e.target.parentNode.parentNode.parentNode
    productID = Number(productNode.getAttribute('id-product'))
    productObject = products.find(product => product.id === productID)
    type = e.target.getAttribute('type-product__button') || null

    if (type === "order") {
        modalOrder(productObject.title, productObject.img, productObject.price.toLocaleString())
        modal()
    }
    if (type === "basket") {
        modalBasket()
        renderProductInBasket(productObject.img, productObject.title, productObject.price.toLocaleString(), productObject.id)
        modal()
    }
}


// рендер каталога товаров
function renderCatalog(img, title, price, id) {
    const _listing = document.querySelector('.listing')
    const _productCatalog = `
        <div class="product" id-product="${id}">
             <div class="product__img">
					<img src="${img}" alt="" />
				</div>
				<div class="product__description">
					<p class="title">${title}</p>
					<p class="price">${price} руб.</p>
				</div>
				<div class="product__action">
					<div class="">
						<div class="product__button product__button_order button" id-button="button" type-product__button="order">
							Заказать
						</div>

						<div class="product__button product__button_basket button" id-button="button" type-product__button="basket">
							В корзину
						</div>
					</div>
				</div>
        </div>    
    `
    _listing.innerHTML += _productCatalog
}

// рендер модального окна для кнопки "заказать"
function modalOrder(title, img, price) {
    const getModale =
        `<div class="modal-wrapper-block">
        	        	<div class="modal-block">
        	        		<img class="modal-close" src="https://www.pulscen.ru/system/ckeditor_assets/pictures/219819/content_cancel.png" alt="" />
        	        		<div class="modal-content">
                            <div class="orderPopap">
			<div class="orderPopap__heading"> ${title} </div>
			<div class="orderPopap__coll">
				<div class="orderPopap__info">
					<img class="orderPopap__img" src="${img}" alt="" />
					<p class="orderPopap__price">${price} руб</p>
				</div>
				<div class="orderPopap__feedback">
					<div class="orderPopap__coll2">
						<p class="label"
							>Комментарий <br />
							к заказу</p
						>
						<textarea class="orderPopap__input orderPopap__commentInput" name="" id="" cols="30" rows="10"></textarea>
					</div>
				</div>
			</div>
			<div class="orderPopap__coll">
				<div class="orderPopap__number">ваш номер</div>
				<div class="send">
					<input class="orderPopap__input orderPopap__numberInput" type="text" />
					<button type="submit" class="product__button_order send__button">отправить</button>
				</div>
			</div>
		</div>
                            </div>
        	        	</div>
        	        </div>`
    _modalWrapper.innerHTML = getModale
}

// рендер модального окна для кнопки 'в корзину'
function modalBasket() {
    const getModaleBasket = `
             <div class="modal-wrapper-block">
	<div class="modal-block modal-blockBasket">
		<div class="modal-content">
			<div class="basketPopap">
				<div class="basketPopap__header">
					<p>Вы добавили в корзину: </p>
					<div class="basketPopap__triangle"></div
				></div>
				<div class="goods" >
					
				</div>
				<div class="product__button_order basketPopap__btn">перейти в корзину</div>
			</div>
		</div>
	</div>
</div>`

    _modalWrapper.innerHTML = getModaleBasket

}

function renderProductInBasket(img, title, price, id) {
    const _goods = document.querySelector('.goods')
    const productItem = `
            <div class="basketPopap__coll" id="${id}" >
						<img class="basketPopap__img" src="${img}" alt="" />

						<div class="basketPopap__textaria">
							<div class="title"> ${title}</div>
							<div class="price">${price} руб</div>
						</div>
						<img class="deleteProduct" src="https://www.pulscen.ru/system/ckeditor_assets/pictures/219819/content_cancel.png" alt="" />
					</div>
            `
    productObj = {
        id: id,
        dom: productItem
    }

    // проверяем если есть товар в массиве, то пропускаем. если нет то добавляем в массив
    if (productsArray.length == 0) {
        productsArray.push(productObj)
        addProduct(_goods)
        deleteProduct(_goods)
        idArray()
    } else if (productsArrayId.indexOf(id) !== -1) {
        addProduct(_goods)
        deleteProduct(_goods)
    } else {
        _goods.innerHTML = ''
        productsArray.push(productObj)
        addProduct(_goods)
        deleteProduct(_goods)
        idArray()
    }

}

// модальное окно
function modal() {
    const modalBlock = document.querySelector('.modal-block')
    const _modalContent = document.querySelector('.modal-wrapper-block')

    _body.style.overflow = 'hidden'

    _modalContent.classList.add('modal-block-show') // показываем модальное окно
    document.onclick = (closeModal) => {
        if (closeModal.target.classList.contains('modal-wrapper-block') ||
            closeModal.target.classList.contains('modal-close')) {
            _modalContent.classList.remove('modal-block-show')
            _body.style.overflow = 'auto'
        }
    }
    heightModalBasket(modalBlock)

}


// добавление номеров id из массива productsArray в массив productsArrayId
function idArray() {
    productsArray.forEach(element => {
        if (productsArrayId.indexOf(element.id) == -1) {
            productsArrayId.push(element.id)
        }
    });
}

// добавление товаров по клику на кнопку 'в корзину'
function addProduct(goods) {
    productsArray.forEach(iterator => {
        goods.innerHTML += iterator.dom
        _basketCurrent.innerHTML = productsArray.length //изменение счетчика корзины
    });
}

// удаление товаров из корзины модального окна
function deleteProduct(goods) {
    const modalBlock = document.querySelector('.modal-block')
    const _modalContent = document.querySelector('.modal-wrapper-block')
    _delProduct = document.querySelector('.basketPopap')
    _delProduct.onclick = (e) => {
        if (e.target.classList.contains('deleteProduct')) {
            const par = Number(e.target.parentElement.getAttribute('id'))
            const ing = productsArray.findIndex(item => item.id == par)
            productsArray.map((el) => {
                if (el.id == par) {
                    productsArray.splice(ing, 1)
                    goods.innerHTML = ''
                    addProduct(goods)
                    productsArrayId.splice(ing, 1)
                    _basketCurrent.innerHTML = productsArray.length //изменение счетчика корзины
                    heightModalBasket(modalBlock) // преобразуем высоту до fit-content
                    if (productsArray.length == 0) {
                        _modalContent.classList.remove('modal-block-show')
                        _body.style.overflow = 'auto'
                    }
                }
            });
        }
    }
}

//если модальное окно корзины больше высобы рабочей области
function heightModalBasket(modalBlock) {
    //получаем высоту экрана (рабочей области)
    const height = document.documentElement.clientHeight
    //получаем высоту элемента
    const heightEl = modalBlock.clientHeight
    if (heightEl > height) {
        modalBlock.classList.add('height-show')
    } else {
        modalBlock.classList.remove('height-show')
    }
}

