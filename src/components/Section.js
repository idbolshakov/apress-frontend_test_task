class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.append(element);
  }

  renderItems(renderedItems) {
    renderedItems.forEach((product) => {
      this._renderer(product);
    });
  }
}
