import {Cart} from './module/cart/cart.js'
import {List} from './module/list/list.js'
import {Order} from './module/order/order.js'

const list = new List('#products-items', {
  data: API.products,
  onSelect(item) {
    order.select(item)
  },
  toCart(item) {
    cart.select(item)
  },
})

const cart = new Cart('#product-cart')
const order = new Order('#order-popup')