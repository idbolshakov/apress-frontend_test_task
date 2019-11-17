// Modal
const modal = createDiv('', '')
const modal_header = createHeader('', 'modal_header') // Header
const modal_content = createDiv('', 'modal_content_wrapper') // Wapper for product info 
const modal_product = createDiv('', 'product') // Product info
const modal_product_img = createImg('', '') // Image
const modal_product_title = createSpan('', '') // Title
const modal_product_price = createP('', '') // Price
const modal_product_comment = createTextarea('', 'comment_textarea') // Textarea for customer's comment
const modal_product_phone = createInput('+79xxxxxxxxx', 'phone_input') // Input for customer's phone
// Support for customer
const text1 = createDiv('Комментарий к заказу:', 'comment_text') // Info about 'modal_product_comment'
const text2 = createDiv('Ваш телефон *:', 'phone_text') // Info about 'modal_product_phone'
// Without libs I don't know how make required field is nice
const warning = createDiv('Поля, отмечанные * - обязательны', 'warning')
// Dark background when modal order is active
const backdrop = createDiv('', '')

function createModal(product) {
    smoothScrollToTop()
    // If popup is active - hide it
    popup.style.opacity = '0'
    // Dark background is active
    backdrop.className = 'backdrop'
    // Modal order is active
    modal.className = 'modal'
    // Header
    modal_header.textContent = 'Оформление заказа:'
    // Buttons
    close_btn.onclick = unshowModal // hide modal --- button from common.js
    btn_order.onclick = valueCheck // hide modal and make order --- button from common.js 
    // Image
    modal_product_img.src = product.img
    modal_product_img.alt = product.title
    // Title
    modal_product_title.textContent = product.title
    // Price
    modal_product_price.textContent = "Цена: " + price(product.price) + " рублей"

    modal_header.appendChild(close_btn)

    btn_order_wrap.appendChild(btn_order)

    modal_product.appendChild(modal_product_img)
    modal_product.appendChild(modal_product_title)
    modal_product.appendChild(modal_product_price)
    modal_product.appendChild(text1)
    modal_product.appendChild(modal_product_comment)
    modal_product.appendChild(text2)
    modal_product.appendChild(modal_product_phone)
    modal_product.appendChild(btn_order_wrap)
    modal_product.appendChild(warning)

    modal_content.appendChild(modal_product)

    modal.appendChild(modal_header)
    modal.appendChild(modal_content)

    return modal
}