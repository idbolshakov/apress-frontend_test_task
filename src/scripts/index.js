const products = API.products
let card = []

const headerCardButton = document.getElementById('header__card-button')

// счетчик товаров на кнопке корзины
const renderHeaderCardButtonText = (count = 0) => {
  headerCardButton.innerHTML = `Корзина${count ? ' (' + count + ')' : null}`
}

let isCardShow = false

// отображает содержимое корзины
const cardShow = () => {
  document
    .getElementById('card')
    .style.setProperty('display', isCardShow ? 'block' : 'none')
}
cardShow()

// клик на кнопку корзина
headerCardButton.addEventListener('click', (event) => {
  isCardShow = !isCardShow
  cardShow()
})

// Вставляем товары на страницу
document.getElementById('productsList').innerHTML = products
  .map((item, index) => {
    return `      
      <div class="product" id="${item.id}">
        <div class="product__left">
          <img src="./${item.img}" class="product__photo" alt="" />
        </div>
        <div class="product__body">
          <div class="product__title">${item.title}</div>
          <div class="product__price">${item.price.toLocaleString()} руб</div>
        </div>
        <div class="product__right">
          <div class="btn btn__order" id="${item.id}">Заказать</div>
          <div class="btn btn__to-card" id="${item.id}">В корзину</div>
        </div>
      </div>
  `
  })
  .join('')

// Добавление функционала  кнопкам в корзину
const addCardButtons = document.getElementsByClassName('btn__to-card')
for (let i = 0; i < addCardButtons.length; i++) {
  addCardButtons[i].addEventListener('click', (event) => {
    card.push(products[event.target.id - 1])
    renderHeaderCardButtonText(card.length)
    renderCardBody(card)
  })
}

// Добавление функционала  кнопкам 'заказать'
const orderButtons = document.getElementsByClassName('btn__order')
for (let i = 0; i < orderButtons.length; i++) {
  orderButtons[i].addEventListener('click', (event) => {
    console.log('order', products[event.target.id])
    showOrderPopup(products[event.target.id - 1])
  })
}

// вставление содержимого всплывашки
const showOrderPopup = (order) => {
  document.getElementById('popup').innerHTML = `
  <div class="popup-order" id="popup-order">
   <div class="popup-order__window">
        <div class="popup-order__title">${order.title}</div>
        <form class="popup-order__body">
          <div class="popup-order__block">
            <div class="popup-order__left">
              <div><img src="./${order.img}" alt="" /></div>
              <div class="popup-order__price">${order.price.toLocaleString()} руб.</div>
            </div>
            <div class="popup-order__right coment">
              <label for="coment" class="coment__label">
                Коментарий к заказу:
              </label>
              <textarea
                rows="8"
                cols="45"
                name="coment"
                class="coment__text"
              ></textarea>
            </div>
          </div>
          <div class="popup-order__block">
            <div class="popup-order__left">
              <label for="">Ваш телефон *:</label>
            </div>
            <div class="popup-order__right">
              <input type="text" name="phone" class="phone-input" />
            </div>
          </div>
          <div class="popup-order__block">
            <div class="popup-order__left"></div>
            <div class="popup-order__right">
              <input type="submit" value="Отправить" class="form-submit" />
            </div>
          </div>
        </form>
        <div id="popup-close">x</div>
      </div>
  </div>
  `

  document.getElementById('popup-close').addEventListener('click', (event) => {
    document.getElementById('popup').innerHTML = ''
  })
}

// рендер содержимого корзины
const renderCardBody = (card = []) => {
  document.getElementById('card__body').innerHTML = card
    .map((item, index) => {
      return `            
            <div class="card-item">
              <div class="card-item__left">
                <img
                  src="./${item.img}"
                  alt="Изображение товара"
                  class="card_img"
                />
              </div>
              <div class="card-item__right">
                <div class="card-item__title">${item.title}</div>
                <div class="card-item__price">${item.price.toLocaleString()} руб</div>
                <div class="card-item__delete" id="${index}">x</div>
              </div>
            </div>
    `
    })
    .join('')

  // добавление функции удаления в корзине при нажатии на  X
  const deleteFromCardButtons = document.getElementsByClassName(
    'card-item__delete'
  )
  for (let i = 0; i < deleteFromCardButtons.length; i++) {
    deleteFromCardButtons[i].addEventListener('click', (event) => {
      card = card.filter((item) => {
        return item !== card[event.target.id]
      })
      renderCardBody(card)
    })
  }
}
