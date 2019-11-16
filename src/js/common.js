// unshow popup and modal 
function unshowPopup() {
    popup.style.opacity = "0"
}
// unshow modal 
function unshowModal () {
    modal.className = ''
    backdrop.className = ''
}
// unshow modal with send order
function unshowModalSuccess() {
    unshowModal()
    success_order.style.opacity = 1
    setTimeout(function() {success_order.style.opacity = 0}, 2000)
}
// show popup
function showPopup() {
    popup.style.opacity = "1"
}
// Choose product and push in shoping cart
function chooseProduct(product) {
    createPopup(product)
    saveCart.push(product.id)
    point.textContent = saveCart.length
    showPopup()
}

// Modules
const close_btn = createButton('transparent', '&#10008;', 'close_btn') // Button for close something
const cart_btn = createButton('rgb(221, 148, 30)', 'Перейти в корзину', 'btn') // Button for go to shoping cart
const btn_order = createButton('rgb(56, 153, 97)', 'Отправить', 'btn') // Button for order
const btn_order_wrap = createDiv('', 'btn_order_wrap') // Wrappper button for order - optionally

