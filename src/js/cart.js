"use strict";
let cartProducts = [];
const cartProductsList = document.querySelector(".cart__products");
const cartPopup = document.querySelector(".cart-popup");

const onAddProduct = (key) => {
  const product = JSON.parse(
    JSON.stringify(products.find((product) => product.id === +key))
  );
  if (product) {
    cartProducts.push(product);
    cartProductsList.innerHTML = "";
    cartProducts.map((cartProduct, index) => {
      cartProduct.index = index;
      const newCartProduct = `          <div class="cart-products__product" data-key="${index}">
            <div class="cart-products__product-img-wrapper">
              <img src="${cartProduct.img}" alt="${cartProduct.title}" class="cart-products__product-img">
            </div>
            <div class="cart-products__product-info">
              <h3 class="cart-products__product-name">${cartProduct.title}</h3>
              <div class="cart-products__product-price">${cartProduct.price} руб.</div>
            </div>
            <div class="cart-products__product-actions">
              <span class="actions__remove" onclick="onRemoveProduct(this.nextElementSibling.value)">&#10006;</span>
              <input type="hidden" value="${index}" class="product__id" >
            </div>
          </div>
`;
      cartProductsList.insertAdjacentHTML("afterBegin", newCartProduct);
    });

    cartPopup.classList.add("popup--visible");
  }
};
const onRemoveProduct = (index) => {
  cartProducts = cartProducts.filter((product) => product.index !== +index);
  cartProductsList.innerHTML = "";
  cartProducts &&
    cartProducts.map((cartProduct, index) => {
      cartProduct.index = index;
      const newCartProduct = `          <div class="cart-products__product" data-key="${index}">
            <div class="cart-products__product-img-wrapper">
              <img src="${cartProduct.img}" alt="${cartProduct.title}" class="cart-products__product-img">
            </div>
            <div class="cart-products__product-info">
              <h3 class="cart-products__product-name">${cartProduct.title}</h3>
              <div class="cart-products__product-price">${cartProduct.price} руб.</div>
            </div>
            <div class="cart-products__product-actions">
              <span class="actions__remove" onclick="onRemoveProduct(this.nextElementSibling.value)">&#10006;</span>
              <input type="hidden" value="${index}" class="product__id" >
            </div>
          </div>
`;
      cartProductsList.insertAdjacentHTML("afterBegin", newCartProduct);
    });
};
const onCloseCart = () => {
  cartPopup.classList.remove("popup--visible");
};
