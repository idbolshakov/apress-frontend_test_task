"use strict";
const products = API.products;
const productsList = document.querySelector(".product-listing");
products &&
  products.map((product, index) => {
    if (product) {
      const newProduct = `<div class="product-listing__product product">
        <img class="product__img" src="${product.img}" alt="${product.title}">
        <div class="product__info">
          <h2 class="product__name">${product.title}</h2>
          <div class="product__price">${product.price} руб.</div>
        </div>
        <div class="product__actions actions">
          <button class="actions__ordering btn btn-primary" onclick="onOrderProduct(this.nextElementSibling.value)">Заказать</button>
          <input type="hidden" value="${product.id}" class="product__id" >
          <button class="actions__add-to-cart btn btn-secondary" onclick="onAddProduct(this.nextElementSibling.value)">В корзину</button>
          <input type="hidden" value="${product.id}" class="product__id" >
        </div>
      </div>
`;
      productsList.insertAdjacentHTML("afterBegin", newProduct);
    }
  });
