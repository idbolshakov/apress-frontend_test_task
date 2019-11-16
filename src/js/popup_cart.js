// Popup
const popup = createDiv('', 'popup')
const popup_header = createHeader('', '') // Header
const popup_header_text = createDiv('', '') // Text in header
const popup_content_wrap = createDiv('', 'popup_content_wrap') // Wrapper for product info
const popup_content = createDiv('', '') // Product info
const popup_info_wrap = createDiv('', 'popup_info_wrap') // Text wrap
const popup_info_img = createImg('', '') // Image
const popup_content_info = createDiv('', '') // Text
const popup_span = createSpan('', '') // Title
const popup_p = createP('', '') // Price

function createPopup(product) {
    // Text in header 
    popup_header_text.textContent = 'Вы добавили в корзину:'
    // Image
    popup_info_img.src = product.img
    popup_info_img.alt = product.title
    // Title
    popup_span.className = 'title'
    popup_span.textContent = product.title
    // Price
    popup_p.textContent = "Цена: " + price(product.price) + " рублей"

    popup_header.appendChild(popup_header_text)
    close_btn.onclick = unshowPopup // hide popup --- button from common.js
    popup_header.appendChild(close_btn)

    popup_content_info.appendChild(popup_span)
    popup_content_info.appendChild(popup_p)
    popup_info_wrap.appendChild(popup_info_img)
    popup_info_wrap.appendChild(popup_content_info)
    popup_content.appendChild(popup_info_wrap)
    popup_content.appendChild(cart_btn)

    popup_content_wrap.appendChild(popup_content)

    popup.appendChild(popup_header)
    popup.appendChild(popup_content_wrap)

    return popup
}