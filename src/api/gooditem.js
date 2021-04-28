'use strict'

import {Button} from './button.js'

export class GoodItem {
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