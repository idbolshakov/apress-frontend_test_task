const renderData = () => { 
  const cartPopUp = document.querySelector('.js-cart-popup-wrapper');
  const cartPopUpList = document.querySelector('.js-list-product');
  const buttonCartPopUpClose = document.querySelector('.js-close-order-popup');

  const orderPopUp = document.querySelector('.js-order-popup');
  const buttonAddItemBusket = document.querySelector('.js-add-item-busket');
  const buttonOrderPopUpClose = document.querySelector('.js-close-order-popup');
  const buttonAddInOrder = document.querySelectorAll('.js-listener-button-busket');

  let saveItemForOrder;

  buttonAddInOrder.forEach((item) => {
    item.addEventListener('click', () => {
      orderPopUp.classList.remove('dn');
      cartPopUp.classList.add('dn');

      const idProduct = item.getAttribute('data-id');
      findProduct(idProduct);
    });
  });

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
        <div class="close-cart-pop-up js-close-cart-popup">
          &times;
        </div>
      </div>`
    );

    const elementBusket = document.getElementById(`for-delete-${addedItemBusket.id}`);
    const buttonDelete = elementBusket.querySelector('.js-close-cart-popup');

    buttonDelete.onclick = () => elementBusket.remove();
  };

  buttonAddItemBusket.onclick = () => {
    renderItemBusket(saveItemForOrder);
    
    orderPopUp.classList.add('dn');
    cartPopUp.classList.remove('dn');
  };

  const buttonAddBasket = document.querySelectorAll('.js-listener-button-order');

  buttonAddBasket.forEach((item) => {
    item.addEventListener('click', () => {
      const idProduct = item.getAttribute('data-id');

      renderItemBusket(idProduct);

      cartPopUp.classList.remove('dn');
      orderPopUp.classList.add('dn');
    });
  });

  buttonCartPopUpClose.onclick = () => cartPopUp.classList.add('dn');
  buttonOrderPopUpClose.onclick = () => orderPopUp.classList.add('dn'); 
};

renderData();