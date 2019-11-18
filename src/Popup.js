import { update } from "./index";
export class OrderPopup {
  popupContainer = document.createElement("div");
  popup = document.createElement("div");
  product = document.createElement("div");
  info = document.createElement("p");
  container = document.createElement("div");
  containerImg = document.createElement("div");
  divImg = document.createElement("div");
  img = document.createElement("img");
  price = document.createElement("p");
  comment = document.createElement("div");
  commentContainer = document.createElement("div");
  commentText = document.createElement("p");
  commentInput = document.createElement("textarea");
  phoneText = document.createElement("p");
  phoneInput = document.createElement("input");
  send = document.createElement("button");
  closeButton = document.createElement("div");

  constructor() {
    this.createDOMNode();
    this.setAttribute();
  }

  setProductInformation(imgProduct, descriptionProduct, priceProduct) {
    this.img.src = imgProduct;
    this.info.innerText = descriptionProduct;
    this.price.innerText = priceProduct;
    this.popupContainer.classList.remove("none");
    this.imgProduct = imgProduct;
    this.descriptionProduct = descriptionProduct;
    this.priceProduct = priceProduct;
  }

  handleClick = () => {
    update(this.imgProduct, this.descriptionProduct, this.priceProduct);
    this.popupContainer.classList.add("none");
  };

  close = () => {
    this.popupContainer.classList.add("none");
  };

  setAttribute = () => {
    this.send.addEventListener("click", this.handleClick);
    this.popupContainer.className = "popupContainer none";
    this.popup.classList.add("popup");
    this.product.className = " product";
    this.divImg.className = "divImg";
    this.info.className = "inform";
    this.container.className = "container";
    this.containerImg.className = "containerImg";
    this.comment.className = "comment";
    this.commentText.className = "commentText";
    this.phoneText.className = "phoneText";
    this.send.className = "send";
    this.commentInput.className = "commentInput";
    this.phoneInput.className = "phoneInput";
    this.price.className = "popupPrice";
    this.commentContainer.className = "commentContainer";
    this.closeButton.className = "closeButton";
    this.commentText.innerText = "Комментарий к заказу:";
    this.phoneText.innerText = "Ваш телефон *:";
    this.send.innerText = "Отправить";
    this.commentInput.setAttribute("type", "text");
    this.phoneInput.setAttribute("type", "text");
    this.closeButton.addEventListener("click", this.close);
    this.popupContainer.addEventListener("click", this.close);
    this.closeButton.setAttribute(
      "style",
      'background-image:url("assets/images/11.jpg")'
    );
  };

  createDOMNode() {
    this.product.appendChild(this.info);
    this.product.appendChild(this.closeButton);
    this.container.appendChild(this.containerImg);
    this.container.appendChild(this.comment);
    this.commentContainer.appendChild(this.commentText);
    this.commentContainer.appendChild(this.commentInput);
    this.comment.appendChild(this.commentContainer);
    this.comment.appendChild(this.phoneInput);
    this.comment.appendChild(this.send);
    this.containerImg.appendChild(this.divImg);
    this.divImg.appendChild(this.img);
    this.containerImg.appendChild(this.price);
    this.containerImg.appendChild(this.phoneText);
    this.popup.appendChild(this.product);
    this.popup.appendChild(this.container);
    this.popupContainer.appendChild(this.popup);
    this.popup.addEventListener("click", e => e.stopPropagation());
  }
}
