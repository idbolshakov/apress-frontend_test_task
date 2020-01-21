const addToCart = _io_qall('.btn_add-to-cart');
addToCart.forEach(elem => elem.onclick = () => {
    let buttonId = elem.id.slice(15);
    const product = API.products.find((element) => element.id == buttonId)
    _io_q('.cart__img').src = product.img
    _io_q('.cart__cost').innerHTML = `${numberWithSpaces(product.price)} руб.`
    _io_q('.cart__title').innerHTML = product.title
    _io_q('.cart').style = 'display: block'
})