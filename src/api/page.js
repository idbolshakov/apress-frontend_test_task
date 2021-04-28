var API = {
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

class Button {
  _text = ''
  _callback = null

  constructor (text, callback) {
      this._text = text
      this._callback = callback
  }

  onBtnClick () {
      const callback = this._callback
      if (typeof callback === 'function') {
          callback()
      }
  }

  getTemplate (classBtn) {
      const btn = document.createElement('button')
      btn.classList.add(classBtn)
      return btn
  }

  render (placeToRender, classBtn) {
      if (placeToRender) {
          const btn = this.getTemplate(classBtn)
          btn.innerHTML = this._text
          placeToRender.appendChild(btn)

          btn.addEventListener('click', () => {
              this.onBtnClick()
          })
      }
  }
}

class List {
  _items = []

  constructor (API, CartInstance, OrderInstance) {
      let goods = API.products
      goods = goods.map(item => {
        return new GoodItem (item, CartInstance, OrderInstance);
      })
      this._items = goods;
      this.render();
  }

  render () {
    this._items.forEach(Good => {
      Good.render()
    })
  }
}

class GoodItem {
  _id = null
  _title = ''
  _price = null
  _img = null
  _CartInstance = null
  _OrderInstance = null

  constructor ({ id, title, price, img }, CartInstance, OrderInstance) {
      this._id = id
      this._title = title
      this._price = price
      this._img = img
      this._CartInstance = CartInstance
      this._OrderInstance = OrderInstance
  }
  
  orderGoods () {
    this._OrderInstance.add({ id: this._id, title: this._title, price: this._price, img: this._img})
  }
  
  addToCart () {
      this._CartInstance.add({ id: this._id, title: this._title, price: this._price, img: this._img})
  }

  render () {
    const placeToRender = document.querySelector('.product-listing-wrapper')
    if (placeToRender) {
        const block = document.createElement('div')
        block.classList.add('goodItem')
        block.innerHTML = `
        <div class="img"><img src="${this._img}"></img></div>
        <div class="info"><p class="title">${this._title}</p>
        <p class="price">${this._price} руб.</p></div>
        `
        const blockBtn = document.createElement('div')
        blockBtn.classList.add('btn')
        const btnBuy = new Button ('Заказать', this.orderGoods.bind(this))
        btnBuy.render(blockBtn, 'btn_buy')
        const btnCart = new Button ('В корзину', this.addToCart.bind(this))
        btnCart.render(blockBtn, 'btn_cart')

        placeToRender.appendChild(block).appendChild(blockBtn)
    }
  }
}

class Cart {
  _id = null
  _title = ''
  _price = null
  _img = null

  add (item) {
    this._id = item.id
    this._title = item.title
    this._price = item.price
    this._img = item.img

    this.render()
  }

  addItem () {
    console.log('Товар успешно добавлен в корзину!')
  }

  closeModale () {
    document.querySelector('.pop-up-cart').style.display = 'none'
    document.querySelector('.cart').remove()
  }

  render() {
    const placeToRender = document.querySelector('.pop-up-cart')
    if (placeToRender) {
      const block = document.createElement('div')
      block.classList.add('cart')

      const top = document.createElement('div')
      top.classList.add('top')
      top.innerHTML = `<span class="top_text">Вы добавили в корзину:</span>`
      
      const content = document.createElement('div')
      content.classList.add('content')
      content.innerHTML = `
        <img src="${this._img}"></img>
        <div class="cart_info"><p class="title">${this._title}</p>
        <p class="price">${this._price} руб.</p></div>
        `
      
      const btnCloseModale = new Button ('x', this.closeModale.bind(this))
      btnCloseModale.render(content, 'close_modal')

      const blockBtn = document.createElement('div')
      blockBtn.classList.add('cart_btn')
      const btn = new Button ('Перейти в корзину', this.addItem.bind(this))
      btn.render(blockBtn, 'btn_buy')
      
      placeToRender.appendChild(block).appendChild(top)
      placeToRender.appendChild(block).appendChild(content)
      placeToRender.appendChild(block).appendChild(blockBtn)

      placeToRender.style.display = "block";
    }
  }
}

class Order {
  _id = null
  _title = ''
  _price = null
  _img = null

  add (item) {
    this._id = item.id
    this._title = item.title
    this._price = item.price
    this._img = item.img

    this.render()
  }

  addItem () {
    console.log('Товар успешно заказан!')
  }

  closeModale () {
    document.querySelector('.pop-up-cart').style.display = 'none'
    document.querySelector('.order').remove()
  }

  render() {
    const placeToRender = document.querySelector('.pop-up-cart')
    if (placeToRender) {
      const block = document.createElement('div')
      block.classList.add('order')

      const top = document.createElement('div')
      top.classList.add('order__top')
      top.innerHTML = `<p class="top_text">${this._title}</p>`
      
      const content = document.createElement('div')
      content.classList.add('order__content')
      content.innerHTML = `<div class="order_content_info">
        <div class="order_content_info-left"><img src="${this._img}"><p class="top_price">${this._price} руб.</p></div>
        <div class="order_content_info-right"><p class="top_text-mini">Комментарий к заказу:</p><input type="text"/></div></div>
        <div class="order__content_phone"><p class="top_text-mini">Ваш телефон*:</p><input type="text"></div>
        `
      
      const btnCloseModale = new Button ('x', this.closeModale.bind(this))
      btnCloseModale.render(block, 'close_modal-order')

      const blockBtn = document.createElement('div')
      blockBtn.classList.add('cart_btn')
      const btn = new Button ('Перейти в корзину', this.addItem.bind(this))
      btn.render(blockBtn, 'btn_buy')
      
      placeToRender.appendChild(block).appendChild(top)
      placeToRender.appendChild(block).appendChild(content)
      placeToRender.appendChild(block).appendChild(blockBtn)

      placeToRender.style.display = "block";
    }
  }
}

const OrderInstance = new Order();
const CartInstance = new Cart();
new List(API, CartInstance, OrderInstance);

window.onclick = function(event) {
  if (event.target == document.querySelector('.pop-up-cart')) {
    document.querySelector('.pop-up-cart').style.display = 'none'
    document.querySelector('.pop-up-cart').innerHTML=''
  }
}