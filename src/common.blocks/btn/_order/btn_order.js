_io_q('.main-page__list').onclick = function(event) {
    const target = event.target
    if (target.className === 'btn btn_contrast btn_order') {
        const buttonId = target.id.slice(16);
        const product = API.products.find((element) => element.id == buttonId)
        _io_q('.popup__img').src = product.img
        _io_q('.popup__cost').innerHTML = `${numberWithSpaces(product.price)} руб.`
        _io_q('.popup__title').innerHTML = product.title
        _io_q('.popup').style = 'display: flex'
    }
}