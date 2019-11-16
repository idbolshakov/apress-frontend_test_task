// Create html
const main = document.getElementById('main')
// Order notification
const success_order = createDiv('Заказ отправлен &#10004;', 'success_order')
const order_notification = createDiv('', 'order_notification_wrap', [success_order])
// App
const app = createDiv('', 'app')
// Cart
const cart_img = createImg('', '', './assets/icons/cart.svg', 'Shoping Cart')
    // Product's counter
    const point = createDiv(saveCart.length, 'point')
const cart = createDiv('', 'cart', [cart_img, point])

// App header
const app_header = createHeader('', 'app_header', [cart, popup])

main.appendChild(app)
main.appendChild(order_notification)
main.appendChild(modal)
main.appendChild(backdrop) // Dark background when modal order is active
app.appendChild(app_header)
app.appendChild(product_list)


