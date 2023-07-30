import { API } from './api/products.js';
 var orderbuttons ;
 let modal = document.querySelector('.modal');
 let modalImage = document.querySelector('.modal_image');
 let modalTittle = document.querySelector('.modal__tittle');
 let modalPrice  = document.querySelector('.modal__price'); 
 let modalClose = document.querySelector('.modal__close'); 
 let bucketClose = document.querySelector('.popup__close');
 let bucket = document.querySelector('.bucket');  
 let buckketOpenList; 

 let popupImage =  document.querySelector('.popup__image');
 let popupOrdername = document.querySelector('.popup__ordername'); 
 let popupOrderprice = document.querySelector('.popup__orderprice'); 



document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.querySelector('.orderlist');

  API.products.forEach(product => {
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
 
  });
 
  bucketClose.addEventListener('click',()=> {
    bucket.style.display = "none";

  })

 
  orderbuttons = document.querySelectorAll('.order__button'); 
  orderbuttons.forEach((element, index)=> { 
    element.addEventListener('click', (evt)=> {   
     modal.style.display = "block";
      modalImage.src = API.products[index].img;
      modalTittle.innerHTML = API.products[index].title; 
      modalPrice.innerHTML = API.products[index].price + ' руб.'; 
    })
  })
  buckketOpenList = document.querySelectorAll('.order__bucket');
  console.log(buckketOpenList);
  buckketOpenList.forEach((element, index)=> {
    element.addEventListener('click', ()=> { 
      bucket.style.display=  "block"; 
     popupImage.src = API.products[index].img;
      popupOrdername.innerHTML = API.products[index].title; 
      popupOrderprice.innerHTML = API.products[index].price + ' руб.'; 
    })
  })

});

modalClose.addEventListener('click', ()=> { 
  
  modal.style.display = "none";
})
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'order__item';

  const informationDiv = document.createElement('div');
  informationDiv.className = 'order__information';

  const productImage = document.createElement('img');
  productImage.src = product.img;
  productImage.alt = product.title;
  productImage.className = 'order__image';
  const productDiv = document.createElement('div');
  const productTitle = document.createElement('span');
  productTitle.className = 'order__tittle';
  productTitle.textContent = product.title;

  const productPrice = document.createElement('span');
  productPrice.className = 'order__price';
  productPrice.textContent = product.price + ' руб.';

  informationDiv.appendChild(productImage);
  informationDiv.appendChild(productDiv)
  productDiv.appendChild(productTitle);  
  productDiv.appendChild(document.createElement('br'));
  productDiv.appendChild(productPrice);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'order__buttons';

  const orderButton = document.createElement('button');
  orderButton.className = 'order__button';
  orderButton.textContent = 'Заказать';

  const bucketButton = document.createElement('button');
  bucketButton.className = 'order__bucket';
  bucketButton.textContent = 'В корзину';

  buttonsDiv.appendChild(orderButton);
  buttonsDiv.appendChild(document.createElement('br'));
  buttonsDiv.appendChild(bucketButton);

  card.appendChild(informationDiv);
  card.appendChild(buttonsDiv);

  return card;
}


  