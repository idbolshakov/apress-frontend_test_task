const renderData = () => { 
  const productsWrapper = document.querySelector('.js-main-wrapper');
  
  const cartPopUp = document.querySelector('.js-cart-popup-wrapper');
  const cartPopUpList = document.querySelector('.js-list-product');
  const buttonCloseCartPopUp = document.querySelector('.js-close-cart-popup');

  const orderPopUp = document.querySelector('.js-order-popup');
  const buttonAddItemBusket = document.querySelector('.js-add-item-busket');
  const buttonCloseOrderPopUp = document.querySelector('.js-close-order-popup');

  let saveItemForOrder;

  productsWrapper.addEventListener('click', (e) => {
    const checkTargetButtonBusket = e.target.classList.contains('js-listener-button-busket');
    const checkTargetButtonOrder = e.target.classList.contains('js-listener-button-order');
    const idProduct = e.target.getAttribute('data-id');

    if (checkTargetButtonBusket) {
      isVisibleCartOrder(orderPopUp, cartPopUp);
      findProduct(idProduct);
      return;
    } 

    if (checkTargetButtonOrder) {
      isVisibleCartOrder(cartPopUp, orderPopUp);
      renderItemBusket(idProduct);
    }
  });

  const isVisibleCartOrder = (removeSelector, addSelector) => {
    removeSelector.classList.remove('dn');
    addSelector.classList.add('dn');
  }

  const renderItemOrder = (parentSelector, item) => {
    const imageProduct = parentSelector.querySelector(`.js-order-popup-product-image`);
    imageProduct.src = item.img;

    const titleProduct = parentSelector.querySelector(`.js-order-popup-product-title`);
    titleProduct.innerText = item.title;

    const addSpacePrice = String(item.price).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
    const priceProduct = parentSelector.querySelector(`.js-order-popup-product-price`);
    priceProduct.innerText = `${addSpacePrice} руб.`;
  };

  const findProduct = (idProduct) => {
    API.products.find((item) => {
      if (item.id === parseInt(idProduct)) {
        renderItemOrder(orderPopUp, item);
        saveItemForOrder = item;
        return;
      }
    });
  };

  const renderItemBusket = (idProduct) => {
    const checkTypeData = typeof idProduct === 'string';
    let addedItemBusket;

    if (checkTypeData) {
      addedItemBusket = API.products.find((item) => {
        if (item.id === parseInt(idProduct)) {
          return item;
        }
      });
    } 

    !checkTypeData && (addedItemBusket = idProduct);

    const addSpacePrice = String(addedItemBusket.price).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

    cartPopUpList.insertAdjacentHTML('afterbegin', `
      <div id="for-delete-${addedItemBusket.id}" class="cart-popup-product js-cart-popup-product">
        <img class="cart-pop-up-image" src="${addedItemBusket.img}" alt="${addedItemBusket.title}">
        <div class="cart-popup-data-wrapper">
          <span class="cart-popup-product-title">${addedItemBusket.title}</span>
          <span class="cart-popup-product-price">${addSpacePrice} руб.</span>
        </div>
        <div class="delete-item-cart-popup js-delete-cart-popup">
          &times;
        </div>
      </div>`
    );

    const elementBusket = document.getElementById(`for-delete-${addedItemBusket.id}`);
    const buttonDelete = elementBusket.querySelector('.js-delete-cart-popup');

    buttonDelete.onclick = () => elementBusket.remove();
  };

  buttonAddItemBusket.onclick = () => {
    renderItemBusket(saveItemForOrder);
    isVisibleCartOrder(cartPopUp, orderPopUp);
  };

  buttonCloseOrderPopUp.onclick = () => orderPopUp.classList.add('dn'); 
  buttonCloseCartPopUp.onclick = () => cartPopUp.classList.add('dn');
};

renderData();
