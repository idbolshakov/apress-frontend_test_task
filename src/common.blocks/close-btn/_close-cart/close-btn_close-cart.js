const closeCart = _io_q('.close-btn_close-cart');
closeCart.onclick = () => {
    _io_q('.cart__img').src = '#'
    _io_q('.cart__cost').innerHTML = null
    _io_q('.cart__title').innerHTML = null
    _io_q('.cart').style = 'display: none'

}

