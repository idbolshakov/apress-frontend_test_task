_io_q('.main-page__list').onclick = function(event) {
    const target = event.target
    if (target.className === 'btn btn_secondary btn_add-to-cart') {
        const buttonId = elem.id.slice(15);
        const product = API.products.find((element) => element.id == buttonId)
        _io_q('.cart__img').src = product.img
        _io_q('.cart__cost').innerHTML = `${numberWithSpaces(product.price)} руб.`
        _io_q('.cart__title').innerHTML = product.title
        _io_q('.cart').style = 'display: block'
    }
}