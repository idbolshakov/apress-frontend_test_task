class OrderPopup {
  constructor(title, price, image, id = null) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
  }

  static removePopup() {
    document.querySelector(".popup-wrapper").remove();
  }

  static removeFromBusket() {}
}
