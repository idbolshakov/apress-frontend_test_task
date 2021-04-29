const listener = () => {
  const productsWrapper = document.querySelector('.js-main-wrapper');

  API.products.forEach((item) => {
    const addSpacePrice = String(item.price).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

    productsWrapper.insertAdjacentHTML('beforeend',`
      <div class="product-wrapper"> 
        <div class="image-wrapper"> 
          <img class="product-image" src="${item.img}" alt="${item.title}">
        </div> 
        <div class="wrapper-data">
          <h2>${item.title}</h2>
          <span class="product-price">${addSpacePrice} руб.</span>
        </div>
        <div class="button-wrapper">
          <button 
            class="button-product listener-button-basket js-listener-button-busket" 
            data-id=${item.id}
          >
            Заказать
          </button>
          <button 
            class="button-product listener-button-order js-listener-button-order" 
            data-id=${item.id}
          >
            В корзину
          </button>
        </div>
      </div>`
    );
  });  
}

listener();