const main = document.querySelector('.product-listing-wrapper');

class Products {
  constructor(products) {
    this.products = products;
    this.popUp = new PopUp();
    this.basket = new Basket();
    window.addEventListener('click', (e) => {
      this.checkDataset(e);
    });
  }

  renderProducts() {
    this.products.forEach((item) => {
      // создал контейнер
      const block = document.createElement('div');
      block.classList.add('product-listing-wrapper-block');
      block.dataset.price = item.price;
      block.dataset.title = item.title;
      block.dataset.img = item.img;

      // блок с картинкой и названием
      const blockTitle = document.createElement('div');
      blockTitle.classList.add('product-listing-wrapper-block-title');

      // блок с картинкой
      const blockTitleImg = document.createElement('div');
      blockTitleImg.classList.add('product-listing-wrapper-block-title-img');
      const img = document.createElement('img');
      img.src = item.img;
      img.alt = item.title;
      blockTitleImg.appendChild(img);

      //блок с названием и ценой
      const blockTitlePrice = document.createElement('div');
      blockTitlePrice.classList.add('product-listing-wrapper-block-title-price');
      const title = document.createElement('h1');
      title.innerText = item.title;
      const price = document.createElement('p');
      price.innerText = `${item.price.toLocaleString()} руб.`;
      blockTitlePrice.append(title, price);

      // закончил с блоком title
      blockTitle.append(blockTitleImg, blockTitlePrice);

      // блок с кнопками
      const blockBtns = document.createElement('div');
      blockBtns.classList.add('product-listing-wrapper-block-btns');

      const btnOrder = document.createElement('button');
      btnOrder.classList.add('product-listing-wrapper-block-btns-order');
      btnOrder.innerText = 'Заказать';
      btnOrder.dataset.price = item.price;
      btnOrder.dataset.title = item.title;
      btnOrder.dataset.img = item.img;

      const btnBasket = document.createElement('button');
      btnBasket.classList.add('product-listing-wrapper-block-btns-basket');
      btnBasket.dataset.price = item.price;
      btnBasket.dataset.title = item.title;
      btnBasket.dataset.img = item.img;
      btnBasket.innerText = 'В корзину';

      //закончил с блоком btns
      blockBtns.append(btnOrder, btnBasket);

      block.append(blockTitle, blockBtns);
      main.append(block);
    });
  }

  checkDataset(e) {
    if (e.target.classList.contains('product-listing-wrapper-block-btns-order')) {
      this.popUp.openPopUp(
        e.path[2].dataset.title,
        e.path[2].dataset.img,
        Number(e.path[2].dataset.price).toLocaleString(),
      );
    }
    if (e.target.classList.contains('product-listing-wrapper-block-btns-basket')) {
      this.basket.addToList(
        e.path[2].dataset.title,
        e.path[2].dataset.img,
        Number(e.path[2].dataset.price).toLocaleString(),
      );
    }
  }
}

const products = new Products(API.products);
products.renderProducts();
