class Basket {
  constructor() {
    this.prodoctsList = [];
    this.block = document.querySelector('.items');
    this.basket = document.querySelector('.product-listing-wrapper-basket');
    this.basket.style.display = 'none';
  }

  renderList() {
    this.block.innerHTML = '';
    if (this.prodoctsList.length > 0) {
      this.basket.style.display = 'block';
    } else {
      this.basket.style.display = 'none';
    }
    this.prodoctsList.forEach((item, index) => {
      const block = document.createElement('div');
      block.classList.add('product-listing-wrapper-basket-item');

      const blockImg = document.createElement('div');
      blockImg.classList.add('product-listing-wrapper-basket-item-img');
      const img = document.createElement('img');
      img.src = item.img;
      img.alt = item.title;
      blockImg.appendChild(img);

      const blockPrice = document.createElement('div');
      blockPrice.classList.add('product-listing-wrapper-basket-item-price');
      const span = document.createElement('span');
      span.innerText = item.title;
      const p = document.createElement('p');
      p.innerText = `${item.price.toLocaleString()} руб.`;
      blockPrice.append(span, p);

      const blockDelete = document.createElement('div');
      blockDelete.classList.add('product-listing-wrapper-basket-item-delete');
      blockDelete.innerText = 'X';
      blockDelete.addEventListener('click', () => this.removeFromList(index));

      block.append(blockImg, blockPrice, blockDelete);
      this.block.append(block);
    });
  }

  addToList(title, img, price) {
    this.prodoctsList.push({ title, img, price });
    this.renderList();
  }

  removeFromList(index) {
    this.prodoctsList.splice(index, 1);
    this.renderList();
  }
}
{
  /* <div class="product-listing-wrapper-basket-item">
          <div class="product-listing-wrapper-basket-item-img">
            <img src="./assets/images/4.jpg" alt="">
          </div>
          <div class="product-listing-wrapper-basket-item-price">
            <span>2 кресла и стол чайный комплект - сегодня утром</span>
            <p>62 320 руб.</p>
          </div>
          <div class="product-listing-wrapper-basket-item-delete">
            &#10008;
          </div>
    </div> */
}
