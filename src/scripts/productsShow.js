class Products {

  render() {
    let htmlProduct = '';

    API.products.forEach(({id, title, price, img}) => {
      
      htmlProduct += `
        <div class="product">
          <img src="${img}" alt="Product Image" class="product-img">
          <div class="product-info">
            <span class="product-name">${title}</span>
            <span class="product-price">${price.toLocaleString().replace(',', ' ')} руб.</span>
          </div>
          <div class="product-buttons">
            <button class="order btn" onclick="order('${title}', '${img}', ${price})">Заказать</button>
            <button class="to-cart btn" onclick="toCart('${title}', '${img}', ${price})">В корзину</button>
          </div>
        </div>
      `
    });
    PRODUCT_LIST.innerHTML = htmlProduct;
  }
}

const productPage = new Products();
productPage.render();