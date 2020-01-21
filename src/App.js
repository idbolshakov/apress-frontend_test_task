const createElem = (elem, className, innerHtml, id = (undefined), src, alt) => {
    const element = document.createElement(elem)
    element.className = className
    if (innerHtml !== undefined) {
        element.innerHTML = innerHtml
    }
    if (id !== undefined) {
        element.id = id
    }  
    element.src = src
    element.alt = alt
    return element
}

const createBlock = (...args) => {
    let block = args[0]
    for (let i = 1; i < args.length; i++) {
        block.appendChild(args[i])
    }
    return block
}

const createListItem = (imgSrc, price, title, id) => {
    const divListItem = createElem('div', 'list-item')
    const img = createElem('img', 'img', undefined, undefined, imgSrc, title)
    const divListTxt = createElem('div', 'list-item__txt')
    const divListButton = createElem('div', 'list-item__button')
    const divTxtGrey = createElem('div', 'txt txt_grey', title)
    const divCost = createElem('div', 'txt txt_grey txt_bold mg_t', `${numberWithSpaces(price)} руб.`)
    const btOrder = createElem('button', 'btn btn_contrast btn_order', 'Заказать', `buttonToOrderId-${id}`)
    const btCart = createElem('button', 'btn btn_secondary btn_add-to-cart', 'В корзину', `buttonToCartId-${id}`)

    const listItem = createBlock(
        divListItem, 
        img, 
        createBlock(divListTxt, divTxtGrey, divCost), 
        createBlock(divListButton, btOrder, btCart)
    )
    return listItem
}

API.products.forEach(product =>  _io_q('.main-page__list')
    .appendChild(createListItem(product.img, product.price, product.title, product.id)))

