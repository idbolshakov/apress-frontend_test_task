'use strict';

(function () {
    const setCartData = (obj) => {
        localStorage.setItem('cart', JSON.stringify(obj));
    }

    window.getCartData = () => JSON.parse(localStorage.getItem('cart'));

    window.addToCart = (obj) => {
        let cartData;
        if (getCartData()) {
            cartData = getCartData();
        } else {
            cartData = [];
        }
        cartData.push(obj);
        setCartData(cartData);
    }

    window.deleteFromCart = (itemId) => getCartData().filter((obj) => obj.id == itemId);
})();