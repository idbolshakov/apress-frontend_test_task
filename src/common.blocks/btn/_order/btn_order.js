const orderProduct = _io_qall('.btn_order');
orderProduct.forEach(elem => elem.onclick = () => {
    let buttonId = elem.id.slice(16);
    const product = API.products.find((element) => element.id == buttonId)
    _io_q('.popup__img').src = product.img
    _io_q('.popup__cost').innerHTML = `${numberWithSpaces(product.price)} руб.`
    _io_q('.popup__title').innerHTML = product.title
    _io_q('.popup').style = 'display: flex'
})
