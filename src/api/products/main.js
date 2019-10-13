window.onload = function () {
    addProductItems();
    addModalBuy();
    addModalCart();

    //Открытие и закрытие модальных окон
    let btn = document.querySelectorAll('[data-type]');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            productNumber = this.dataset.id;
            let modal = new Modal(this.dataset.type);
            switch (true) {
                case this.classList.contains('modal-close'):
                    modal.closeModal();
                    break;
                default:
                    modal.addInfo();
                    modal.openModal();
                    break;
            }
        })
    }
}