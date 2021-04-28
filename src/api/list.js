'use strict'

import {GoodItem} from './gooditem.js'

export class List {
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