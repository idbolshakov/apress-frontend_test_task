'use strict'

import {Button} from './button.js'

export class Order {
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