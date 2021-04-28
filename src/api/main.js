'use strict'

import {Order} from './order.js'
import {Cart} from './cart.js'
import { API } from './products.js'
import {List} from './list.js'



const OrderInstance = new Order();
const CartInstance = new Cart();
new List(API, CartInstance, OrderInstance);

window.onclick = function(event) {
  if (event.target == document.querySelector('.pop-up-cart')) {
    document.querySelector('.pop-up-cart').style.display = 'none'
    document.querySelector('.pop-up-cart').innerHTML=''
  }
}