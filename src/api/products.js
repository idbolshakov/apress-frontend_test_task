const API = {
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

//Объект состояния
const state = {
  products: API.products,
  activeOrder: null,
  activeCart: null,
  setActiveOrder: (id) => {
    state.activeOrder = state.products.find(item => item.id === id) || null
    state.activeCart = null
    renderApp()//обновляем приложение после изменения состояния
  },
  setActiveCart: (id) => {
    state.activeCart = state.products.find(item => item.id === id) || null
    state.activeOrder = null
    renderApp()//обновляем приложение после изменения состояния
  }
};

function renderApp() {
  const elements = document.getElementsByClassName('product-listing-wrapper');
  const container = elements[0] || null;
  container.innerHTML = App(state);
  //Навешиваем обработчики на кнопки
  state.products.map(({ id }) => {
    const orderButton = document.querySelector(`#order-${id}`)
    if (orderButton) {
      orderButton.addEventListener("click", () => {
        state.setActiveOrder(id)
      })
    }
    const cartButton = document.querySelector(`#cart-${id}`)
    if (cartButton) {
      cartButton.addEventListener("click", () => {
        state.setActiveCart(id)
      })
    }
  })
  const orderClose = document.querySelector(`#close-order`)
  if (orderClose) {
    orderClose.addEventListener("click", () => {
      state.setActiveOrder()
    })
  }
  const cartClose = document.querySelector(`#close-cart`)
  if (cartClose) {
    cartClose.addEventListener("click", () => {
      state.setActiveCart()
    })
  }
}

//Запускаем приложение после загрузки страницы
window.addEventListener('load', renderApp);

//Чтобы проект запускался даже без запуска сервера я поместил компоненты в этот же файл ниже
function App({ products, activeCart, activeOrder }) {
  const list = List(products)
  const cart = activeCart ? Cart(activeCart) : ''
  const order = activeOrder ? Order(activeOrder) : ''
  return `
  ${list}
  ${cart}
  ${order}
      `
}

//Компонент списка
function List(products) {
  const content = products.map(item => {
    return `
        <div class="products">
        <ul class="products-list">
          <li class="product">
            <div
              class="product__img"
              style="
                background: url(${item.img});
              "
            ></div>
            <div class="product__description">
              <p class="product__title">
              ${item.title}
              </p>
              <p class="product__price">${item.price} руб</p>
            </div>
            <div class="product__buttons">
              <button class="product__to-order" id="order-${item.id}">Заказать</button>
              <button class="product__to-cart" id="cart-${item.id}">В корзину</button>
            </div>
          </li>
        </ul>
      </div>
        `
  })
  return `
            <ul>
                ${content}
            </ul>
        `

}

//Компонент корзина
function Cart(activeCart) {
  return `
    <div class="cart-wrapper">
      <div class="cart">
        <p class="cart-header">
          Вы добавили в корзину
        </p>
        <div class="cart-form">
          <div
            class="cart-form__img"
            style="
              background: url(${activeCart.img});
            "
          ></div>
          <div class="cart-form__right-block">
          <span id="close-cart">X</span>
            <p class="cart-form__title">
            ${activeCart.title}
            </p>
            <p class="cart-form__price">${activeCart.price} руб</p>
          </div>
        </div>
        <div class="cart-footer">
          <button>Перейти в корзину</button>
        </div>
        
      </div>
    </div> 
    `
}

//Компонент заказа
function Order(activeOrder) {
  return `
    <div class="order-wrapper">
    <div class="order">
      <p class="order-header">
      ${activeOrder.title}
      </p>
      <div class="order-form">
        <div class="order-form__left-block">
          <div
            class="order-form__img"
            style="
              background: url(${activeOrder.img});
            "
          ></div>
          <p class="order-form__price">${activeOrder.price} руб</p>
        </div>
        <div class="order-form__right-block">
          <label>Комментарий к заказу:</label>

          <textarea> </textarea>
        </div>
      </div>
      <div class="order-footer">
        <p class="order-footer__left-block">Ваш телефон:*</p>
        <div class="order-footer__right-block">
          <input type="tel" />
          <button>Отправить</button>
        </div>
      </div>
      <span id="close-order">X</span>
    </div>
  </div>
        `
}



