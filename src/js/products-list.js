// Product list
const product_list = createDiv('', 'product_wrap')
// Take num and create block with info about products[num]
function product(num) {        
    // Product img
    const product_img = createImg('', '', products[num].img, products[num].title)
    // Product title
    const product_title = createSpan(products[num].title)
    // Product price
    const product_price = createP("Цена: " + price(products[num].price) + " рублей")
    // Buttons
    const order_btn = createButton('rgb(170, 170, 170)', 'Заказать', 'btn')
    const cart_btn = createButton('rgb(56, 153, 97)', 'Добавить в корзину', 'btn')
    cart_btn.onclick = function() {chooseProduct(products[num])}
    order_btn.onclick = function() {createModal(products[num])}
    // Product block
    const product = createDiv('', 'product', [product_img, product_title, product_price, cart_btn, order_btn])
    
    return product
}

// Create products is product list
for (let i = 0; i < products.length; i++) {
    product_list.appendChild(product(i));
}