import "core-js";
import "./style.css";
import { API } from "./api/products.js";
import { OrderPopup } from "./Popup";

let i = 0;
let timeoutId;
const basket = document.querySelector(".containerProduct");
export function update(imgProduct, descriptionProduct, priceProduct) {
  clearTimeout(timeoutId);
  const basketPopup = document.querySelector(".basket");
  basketPopup.classList.remove("none");
  basket.appendChild(
    createProductBasket(imgProduct, descriptionProduct, priceProduct + " руб.")
  );

  timeoutId = setTimeout(() => {
    basketPopup.classList.add("none");
  }, 5000);
}
function createProductBasket(imgProduct, descriptionProduct, priceProduct) {
  const index = i;
  const containerBasket = document.createElement("div");
  const containerImgBasket = document.createElement("div");
  const containerText = document.createElement("div");
  const info = document.createElement("p");
  const price = document.createElement("p");
  const img = document.createElement("img");
  const deleteButton = document.createElement("div");
  img.src = imgProduct;
  info.innerText = descriptionProduct;
  price.innerText = priceProduct;
  deleteButton.setAttribute(
    "style",
    'background-image:url("assets/images/12.jpg")'
  );
  containerImgBasket.className = "containerImgBasket";
  deleteButton.className = "closeButton";
  containerBasket.className = "product containerBasket";
  containerText.className = "containerText";
  containerBasket.id = index;
  containerImgBasket.appendChild(img);
  containerText.appendChild(info);
  containerText.appendChild(price);
  containerBasket.appendChild(containerImgBasket);
  containerBasket.appendChild(containerText);
  containerBasket.appendChild(deleteButton);
  deleteButton.addEventListener("click", e => {
    document.getElementById(`${index}`).remove();
  });
  i++;
  return containerBasket;
}

function createProduct(
  imgProduct,
  descriptionProduct,
  priceProduct,
  popup,
  basket
) {
  let product = document.createElement("div");
  let containerImg = document.createElement("div");
  let img = document.createElement("img");
  img.src = imgProduct;
  let info = document.createElement("div");
  let description = document.createElement("p");
  description.innerText = descriptionProduct;
  let price = document.createElement("p");
  price.innerText = priceProduct + " руб.";
  let buttons = document.createElement("div");
  let orderButton = document.createElement("button");
  orderButton.innerText = "Заказать";
  let basketButton = document.createElement("button");
  basketButton.innerText = "В корзину";
  product.className = "product";
  containerImg.className = "containerImg";
  info.className = "info";
  description.className = "description";
  price.className = "price";
  buttons.className = "buttons";
  orderButton.className = "orderButton";
  basketButton.className = "basketButton";
  containerImg.appendChild(img);
  buttons.appendChild(orderButton);
  buttons.appendChild(basketButton);
  product.appendChild(containerImg);
  info.appendChild(description);
  info.appendChild(price);
  product.appendChild(info);
  product.appendChild(buttons);
  orderButton.addEventListener("click", () =>
    popup.setProductInformation(
      imgProduct,
      descriptionProduct,
      priceProduct + " руб.",
      timeoutId
    )
  );
  basketButton.addEventListener("click", () =>
    update(imgProduct, descriptionProduct, priceProduct)
  );

  return product;
}

function productListing(API) {
  const popup = new OrderPopup();

  const popupContainer = document.body;
  popupContainer.appendChild(popup.popupContainer);

  const listing = document.querySelector(".product-listing-wrapper");
  API.forEach(element => {
    const product = createProduct(
      element.img,
      element.title,
      element.price,
      popup,
      basket
    );
    listing.appendChild(product);
  });
}

productListing(API.products);
