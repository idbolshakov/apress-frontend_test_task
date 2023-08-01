let API = {
  products: [
    {
      id: 1,
      title: 'Выкатной детский диван Зайка производитель фабрика Blanes',
      price: 11740,
      img: 'assets/images/1.jpg',
    },

    {
      id: 2,
      title: 'Диван Банжо',
      price: 62839,
      img: 'assets/images/2.jpg',
    },

    {
      id: 3,
      title: 'Гостиная классика Panamar Classic',
      price: 267593,
      img: 'assets/images/3.jpg',
    },

    {
      id: 4,
      title: 'Chairman Диван Релакс Terra 101',
      price: 31950,
      img: 'assets/images/4.jpg',
    },

    {
      id: 5,
      title: 'Диван матрас прямой Верн Sleepformer',
      price: 52450,
      img: 'assets/images/5.jpg',
    },

    {
      id: 6,
      title: '2 кресла и стол чайный - комплект «Виктория» (Эдем)',
      price: 62350,
      img: 'assets/images/6.jpg',
    },

    {
      id: 7,
      title:
        'Современный стильный угловой диван Flex с декоративной столешницей',
      price: 483000,
      img: 'assets/images/7.jpg',
    },

    {
      id: 8,
      title: 'Белый диван Deco - Colleccion Alexandra',
      price: 606400,
      img: 'assets/images/8.jpg',
    },

    {
      id: 9,
      title: 'Белый диван в гостиную с цветной обивкой',
      price: 394899,
      img: 'assets/images/9.jpg',
    },

    {
      id: 10,
      title: 'Двухместный бархатный диван',
      price: 13240,
      img: 'assets/images/10.jpg',
    },
  ],
}

// Создаем и выводим все карточки. начало
const div = document.createElement('div')
div.className = 'content'
document.body.append(div)

const generateProductsCard = (title, price, img, id) => {
  const numberFormat = new Intl.NumberFormat().format(`${price}`)

  return `
  
  <div class='productsCard'>
  <div class='img-flex'>
  <img class='card__img' src="/${img}">
  </div>
  <div class='text'>
  <h3 class='title' >${title}</h3>
  <p class='price'>${numberFormat} руб.</p>
  </div>
  <div class='btn-group'>
  <button class='btn order'data-id=${id} >Заказать</button>
  <button class='btn basket' data-id=${id}>В корзину</button>
  </div>
  </div>
  `
}

const divCard = document.createElement('div')
divCard.className = 'cards'

const cardHTML = API.products
  .map((card) => {
    return generateProductsCard(card.title, card.price, card.img, card.id)
  })
  .join('')

divCard.innerHTML = cardHTML
div.prepend(divCard)

// Создаем и выводим все карточки.конец

// Реализуем модальное окно
let product
const modalTitle = document.getElementById('modal-title')
const modalPrice = document.getElementById('modal-price')
const modalIMG = document.getElementById('modal-img')
const allBtnOrder = document.querySelectorAll('.order')

allBtnOrder.forEach((btn) =>
  btn.addEventListener('click', () => {
    product = API.products.find((i) => i.id === Number(btn.dataset.id))
    const numberFormat = new Intl.NumberFormat().format(`${product.price}`)

    modalTitle.innerHTML = product.title
    modalPrice.innerHTML = `${numberFormat} руб.`
    modalIMG.src = `/${product.img}`

    document.querySelector('.modal').classList.add('open')
  })
)

const closeModalBtn = document.querySelector('.close-modal-btn')
closeModalBtn.addEventListener('click', () => {
  document.querySelector('.modal').classList.remove('open')
})

// Реализуем корзину

const basketTitle = document.getElementById('basket-title')
const basketPrice = document.getElementById('basket-price')
const basketIMG = document.getElementById('basket-img')
const allBasketBtn = document.querySelectorAll('.basket')
let basketProduct
allBasketBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    basketProduct = API.products.find((i) => i.id === Number(btn.dataset.id))
    const numberFormat = new Intl.NumberFormat().format(
      `${basketProduct.price}`
    )
    basketTitle.innerHTML = basketProduct.title
    basketPrice.innerHTML = `<b>${numberFormat} руб</b>.`
    basketIMG.src = `/${basketProduct.img}`

    document.querySelector('.basket-popap').classList.add('open')
  })
})

const closeBasketBtn = document.querySelector('.close-basket-btn')
closeBasketBtn.addEventListener('click', () => {
  document.querySelector('.basket-popap').classList.remove('open')
})

// const numberFormatGeneration = () => {
// let number = new Intl.NumberFormat().format(`${basketProduct[0].price}` )
// return number
// }

// console.log(numberFormatGeneration())
