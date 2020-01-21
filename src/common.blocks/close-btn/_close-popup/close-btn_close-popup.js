const closePopup = _io_q('.close-btn_close-popup');
closePopup.onclick = () => {
    _io_q('.popup__img').src = '#'
    _io_q('.popup__cost').innerHTML = null
    _io_q('.popup__title').innerHTML = null
    _io_q('.popup').style = 'display: none'
}