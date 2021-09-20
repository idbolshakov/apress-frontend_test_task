
const _listing = document.querySelector('.listing')
const _modalWrapper = document.querySelector('.modal-wrapper')
const _mainContent = document.querySelector('.js-body')
const _basketCurrent = document.querySelector('.iconBasket__current')
const _body = document.querySelector('body')


const Api = {
    async products() {
        const response = await fetch(
            'db/products.json'
        )
        const jsonObject = await response.json()
        return jsonObject
    }
}

const _productCatalog = '';

const getProducts = async () => {
    const products = await Api.products()
    products.forEach((element) => {
        renderCatalog(element.img, element.title, element.price.toLocaleString(), element.id)

        _mainContent.onclick = e => {
            const item = products.find(i => i.id == Number(e.target.parentElement.getAttribute('id-order'))); //находим объект товара по которому кликнули (для кнопки 'заказать')
            const itemBasket = products.find(i => i.id == Number(e.target.parentElement.getAttribute('id-basket')))//находим объект товара по которому кликнули (для кнопки 'в корзину')

            if (item) {
                modalOrder(item.title, item.img, item.price.toLocaleString())
                modal()

            } else if (itemBasket) {
                modalBasket()
                renderProductInBasket(itemBasket.img, itemBasket.title, itemBasket.price.toLocaleString(), itemBasket.id)
                modal()

            } else {
                return false
            }

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
					<button type="submit" class="btn send__button">отправить</button>
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
				<div class="btn basketPopap__btn">перейти в корзину</div>
			</div>
		</div>
	</div>
</div>`

            _modalWrapper.innerHTML = getModaleBasket

        }


        // рендер каталога товаров
        function renderCatalog(img, title, price, id) {
            const _productCatalog = `
        <div class="product">
             <div class="product__img">
					<img src="${img}" alt="" />
				</div>
				<div class="product__description">
					<p class="title">${title}</p>
					<p class="price">${price} руб.</p>
				</div>
				<div class="product__action">
					<div class="">
						<div class="btn product__button-order button " id-order="${id}">
							<p class="heading fat">Заказать</p>
						</div>

						<div class="btn2 product__button-basket button" id-basket="${id}">
							<p class="heading fat">В корзину</p>
						</div>
					</div>
				</div>
        </div>    
    `
            _listing.innerHTML += _productCatalog
        }

        // рендер товаров в корзину модального окна
        productsArray = []
        productsArrayId = []

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

            // проверяем есть товар в массиве, то пропускаем. если нет то добавляем в массив
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
    });
}

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

getProducts()

