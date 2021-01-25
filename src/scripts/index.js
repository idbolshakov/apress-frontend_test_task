const products = API.products
let card = []

const headerCardButton = document.getElementById('header__card-button')

const renderHeaderCardButtonText = (count) => {
  headerCardButton.innerHTML = `Корзина${count ? ' (' + count + ')' : null}`
}

let isCardShow = false
const cardShow = () => {
  document
    .getElementById('card')
    .style.setProperty('display', isCardShow ? 'block' : 'none')
}
cardShow()

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
          <div class="btn btn__order">Заказать</div>
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

  // add delete function on X
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

