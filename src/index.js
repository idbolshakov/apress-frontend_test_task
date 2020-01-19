// Функция получает и возвращает данные из API
const getProducts = () => API.products;

// Функция возвращает данные о запрошенном товаре
const getTargetProduct = (index, products) => products.filter(product => parseInt(product.id) === parseInt(index))[0];

// Функция возвращает число в формате вида цены
const formatPrice = (data) => data.toLocaleString();

// Функция создает html товара
const createProductItem = (productData) => (
    `<li class="product__item" >
        <div class="product-image__wrapper">
            <img src="${productData.img}" class="product__img" />
        </div>
        <a href="#" class="product__title">${productData.title}</a>
        <span class="product__price">${formatPrice(productData.price)} руб.</span>
        <button class="btn order-btn" name="order" data-index="${productData.id}">Заказать</button>
        <button class="btn addtocart-btn" name="cart-notification" data-index="${productData.id}">В корзину</button>
    </li>`
);

//  Функция создает список товаров по заданным данным
const createProductsList = (data) => {

    // Создаем контейнер для будущих товаров и назначаем ему css класс
    let productsContainer = document.createElement('ul');
    productsContainer.classList.add('product__list');

    // Создаем список товаров, полученных из API
    let resultList = data.map(product => createProductItem(product));

    // Добавляем его в контейнер productsContainer
    productsContainer.insertAdjacentHTML('afterbegin', resultList.join(''));

    return productsContainer;
}

// Функция создает модальное окно заказа "в один клик" выбранного товара
const createOrderModal = (productData) => (
    `<div class="modal-overlay">
        <div class="modal order-modal">
            <form class="form modal__form">
                <h3 class="modal__title">${productData.title}</h3>
                <div class="product-info__wrapper">
                    <div class="product-image__wrapper modal__product-image-wrapper">
                        <img src="${productData.img}" class="product__img" />
                    </div>
                    <span class="product__price modal__product-price">${formatPrice(productData.price)} руб.</span>
                </div>
                <div class="comment__wrapper">
                    <label for="commentField" class="form__label textarea-label">Комментарий к заказу:</label>
                    <textarea class="form-field form__textarea" id="commentField" name="commentField"></textarea>
                </div>
            
                <label for="phoneField" class="form__label input-label">Ваш телефон*:</label>
                <input type="tel" class="form-field form__input" id="phoneField" name="phoneField" required/>
            
                <button type="submit" class="btn order-btn form__btn">Отправить</button>
            </form>
            <span class="close-btn">&times</span>
        </div>
    </div>`
)

// Функция создает popup окно уведомление о добавлении выбранного товара
const createAddToCartPopup = (productData) => (
    `<div class="addtocart-notification">
        <header class="addtocart-notification__header">Вы добавили в корзину:</header>
        <div class="addtocart-notification__body">
            <div class="product-image__wrapper addtocart-notification__image-wrapper">
                <img src="${productData.img}" class="product__img" />
            </div>
            <div class="addtocart-notification__content-wrapper">
                <h6 class="addtocart-notification__title">${productData.title}</h6>
                
                <span class="addtocart-notification__price">${formatPrice(productData.price)} руб.</span>
            </div>
            <span class="delete-btn">&times</span>
        </div>
        <footer class="addtocart-notification__footer">
            <button class="btn order-btn addtocart-notification-btn">Перейти в корзину</button>
        </footer>
    </div>`
)

// Функция обработки модальных окон
const modalHandler = (modalName, closeBtnName) => {
    closeBtnName.addEventListener('click', () => {
        modalName.remove();
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalName) {
            modalName.remove();
        }
    });
}

// Функция инициализируется и выводит на страницу список товаров, полученных из API
const init = async (container) => {
    try {

        //  получаем список товаров из API
        const products = await getProducts();

        // Получаем готовый html со списком товаров для вывода его на страницу
        const productsContainer = createProductsList(products);

        //  Рендерим список на страницу пользователя
        container.appendChild(productsContainer);

        return products;

    } catch (error) {
        console.error(error)
    }
}

// Функция рендерит на странице всплывающее окно (форма быстрого заказа, уведомление о добавлении в корзину)
const renderPopup = async (type, index, data) => {
    try {

        // Получаем данные о выбранном товаре
        let targetProduct = await getTargetProduct(index, data);


        if (type === 'order') {
            const createdModal = createOrderModal(targetProduct);
            document.body.insertAdjacentHTML('afterbegin', createdModal);

            //  обработка модального окна
            let modal = document.querySelector('.modal-overlay');
            let closeBtn = document.querySelector('.close-btn');

            modalHandler(modal, closeBtn)

        } else if (type === 'cart-notification') {
            const parentContainer = document.querySelector('.header');
            const createdModal = createAddToCartPopup(targetProduct);

            parentContainer.insertAdjacentHTML('beforeend', createdModal);

            // Через 3 сек окно уведомления о добавлении товара в корзину закрывается и удаляется из DOM дерева 
            setTimeout(() => {
                const modal = document.querySelector('.addtocart-notification');
                modal.style.opacity = '0';
                modal.remove();
            }, 3000);
        }
    } catch (error) {
        console.error(error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const productListingWrapper = document.querySelector('.product-listing-wrapper');

    init(productListingWrapper)
        .then(data => {
            const products = data;

            productListingWrapper.addEventListener('click', (e) => {
                //  Получаем тип popup окна, который нужно будет отрендерить
                const btnName = e.target.name;

                // Получаем индекс выбранного товара
                const targetIndex = e.target.dataset.index;

                // Рендерим popup
                renderPopup(btnName, targetIndex, products);
            })
        })
})

