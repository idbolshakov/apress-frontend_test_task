const productsContainer = document.querySelector('.products-container');

productsContainer.onclick = function (event) {
    let target = event.target;
    if (target.tagName != 'BUTTON') return;
    if (target.classList.contains('products-element-cart-button')) {
        idOfListing = target.getAttribute("id") - 1;
        showPopupCart(idOfListing)
    } else {
        idOfListing = target.getAttribute("id") - 1;
        showPopupOrder(idOfListing)
    }
}
