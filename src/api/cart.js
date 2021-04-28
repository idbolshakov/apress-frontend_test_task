'use strict'

import {Button} from './button.js'

export class Cart {
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