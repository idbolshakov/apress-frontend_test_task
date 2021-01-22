const toCartButton = document.querySelectorAll('.products-element-cart-button');
const orderButton = document.querySelectorAll('.products-element-order-button');

toCartButton.forEach((btn) => {
    btn.addEventListener("click", function () {
        idOfListing = btn.getAttribute("id") -1;
        showPopupCart(idOfListing)
    });
})
orderButton.forEach((btn) => {
    btn.addEventListener("click", function () {
        idOfListing = btn.getAttribute("id") -1;
        showPopupOrder(idOfListing)
    });
});