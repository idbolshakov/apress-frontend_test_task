window.onload = function () {
    addProductItems();

    productListingWrapper.addEventListener('click', function (e) {
        productNumber = e.target.dataset.number;
        const modal = new Modal(e.target.dataset.type);
        switch (true) {
            case e.target.classList.contains('product-item__btn'):
                modal.openModal();
                break;
            case e.target.classList.contains('modal-close'):
                modal.closeModal();
                break;
        }
    });
}

