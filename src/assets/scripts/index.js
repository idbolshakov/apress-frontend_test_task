const header = document.querySelector('.header');
const cartWrapper = header.querySelector('.cart__wrapper');
const cartIcon = header.querySelector('.cart__icon');

// Фукнция рендера списка товаров
const productItemRender = (dataItem) => {
    return `<li class="product-listing__item">
          <div class="product-listing__item-image">
            <img src="${dataItem.img}" alt="${dataItem.title}" class="product-listing__item-image-image-picture">
          </div>
          <div class="product-listing__item-description">
            <a class="product-listing__item-description-name" href="/">${dataItem.title}</a>
            <div class="product-listing__item-description-price">${dataItem.price.toLocaleString()}</div>
          </div>
          <div class="product-listing__item-buttons">
            <button class="product-listing__item-buttons-btn product-listing__item-buttons-btn_theme_to-buy" name="order" data-index="${dataItem.id}">
              Заказать
            </button>
            <button class="product-listing__item-buttons-btn" name="cart-notification" data-index="${dataItem.id}">В корзину</button>
          </div>
        </li>
    `
};

const productListingList = (data) => data.map(dataItem => productItemRender(dataItem)).join('');



// Функция рендера модального окна
const modalWindowsRender = (dataItem) => {
    return `
        <section class="modal-window">
      <div class="modal-window__window">
        <span class="modal-window__window-close-button">x</span>
        <form class="form">
          <h5 class="form__title">
            ${dataItem.title}
          </h5>
          <div class="form__data">
            <div class="form__data-info">
              <div class="form__image">
                <img class="form__image-picture" src="${dataItem.img}" alt="${dataItem.title}">
              </div>
              <div class="form__price">
                  ${dataItem.price.toLocaleString()} руб.
              </div>
            </div>
            <div class="form__comment">
              <label for="comment" class="form__comment-label">
                Комментарий к заказу:
              </label>
              <textarea class="form__comment-area" name="comment" id="comment"></textarea>
            </div>
            <label for="phone-number" class="form__phone-label">
              Ваш телефон*:
            </label>
            <input type="tel" class="form__phone-input" id="phone-number" required>
            <button class="form__button-submit" type="submit">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </section>
    `
};

// Функция рендера попапа
const addedDataPopup = (dataItem) => {
    return `
        <div class="cart__content">
              <div class="cart__content-item">
                <div class="cart__content-item-image">
                  <img src="${dataItem.img}" alt="${dataItem.title}" class="cart__content-item-image-picture">
                </div>
                <div class="cart__content-item-title">
                  <div class="cart__content-item-descriprion">
                    ${dataItem.title}
                  </div>
                  <div class="cart__content-item-price">${dataItem.price.toLocaleString()} руб.</div>
                </div>
                <div class="cart__content-item-close-button">
                  x
                </div>
              </div>
            </div>
    `
};


// Переключатель показа окна корзины
header.addEventListener('click', (event) => {
    if (event.target === cartIcon) {
        cartWrapper.classList.toggle('cart__wrapper_view');
    }
});


// функция закрытия модального окна
const closeWindow = (modalWindow, closeButton) => {
    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow) {
            modalWindow.remove();
        }
    });

    closeButton.addEventListener('click', () => {
        modalWindow.remove();
    });
};

// функция очищения корзины
const deletePositionCart = (targetProduct, deleteButton) => {
    console.log(deleteButton)
    cartWrapper.addEventListener('click', (event) => {
        console.log((targetProduct ))

        if (event.target === (deleteButton)) {
            console.log(3)

            cartWrapper.querySelector('.cart__content-item').remove();
        }
    });
};

// Функция рендерит на странице всплывающее окно (форма быстрого заказа, уведомление о добавлении в корзину)
const renderWindow = (typeButton, target, productsData) => {
        const targetProduct = productsData.filter(product => parseInt(product.id) === parseInt(target))[0];

        if (typeButton === 'order') {
            document.body.insertAdjacentHTML('afterbegin', modalWindowsRender(targetProduct));

            const modalWindow = document.querySelector('.modal-window');
            const closeButton = document.querySelector('.modal-window__window-close-button');

            closeWindow(modalWindow, closeButton)

        } else if (typeButton === 'cart-notification') {
            const cartContainer = document.querySelector('.cart__content');
            cartContainer.insertAdjacentHTML('beforeend', addedDataPopup(targetProduct));

            document.querySelector('.cart__wrapper').classList.add('cart__wrapper_view');

            const deleteButton = document.querySelector('.cart__content-item-close-button');

            deletePositionCart(targetProduct, deleteButton);
        }
};

document.addEventListener('DOMContentLoaded', () => {

    const insertList = document.querySelector('.product-listing__list');
    insertList.insertAdjacentHTML('beforeEnd', productListingList(API.products));

    insertList.addEventListener('click', (event) => {
        const target = event.target.dataset.index;
        const typeButton = event.target.name;

        renderWindow(typeButton, target, API.products);
    }
)});


