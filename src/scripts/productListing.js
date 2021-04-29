const productListing = () => {
  const productsWrapper = document.querySelector('.js-main-wrapper');
  let allHtmlProducts = '';

  const htmlProduct = (item) => {
    const addSpacePrice = String(item.price).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '); 

    return(
      `<div class="product-wrapper"> 
        <div class="image-wrapper"> 
          <img class="product-image" src="${item.img}" alt="${item.title}">
        </div> 
        <div class="wrapper-data">
          <h2 class="product-titlte">${item.title}</h2>
          <span class="product-price">${addSpacePrice} руб.</span>
        </div>
        <div class="button-wrapper">
          <button 
            class="button-product listener-button-busket js-listener-button-busket" 
            type="button"
            data-id=${item.id}
          >
            Заказать
          </button>
          <button 
            class="button-product listener-button-order js-listener-button-order" 
            type="button"
            data-id=${item.id}
          >
            В корзину
          </button>
        </div>
      </div>`
    );
  };

  API.products.forEach((item) => allHtmlProducts += htmlProduct(item));  

  productsWrapper.insertAdjacentHTML('beforeend', allHtmlProducts);
};

productListing();