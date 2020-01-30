let orderButtons = document.querySelectorAll('.button-order');
let buttonBasket = document.querySelectorAll('.button-basket');
let closePopup = document.querySelector('.close-popup');
let overlay = document.querySelector('.overlay');
let carts = document.querySelectorAll('.cart');
let popupSmall = document.querySelector('.small-popup');


for (let i = 0; i < orderButtons.length; i++) {
  orderButtons[i].addEventListener('click', () => {
    overlay.style.display = 'block';
    document.querySelector('.product-listing-wrapper').style.filter = 'blur(5px)';
    document.querySelector('#popup-title').innerHTML = carts[i].childNodes[1].firstChild.textContent;
    document.querySelector('#popup-image').src = carts[i].childNodes[0].firstChild.src;
    document.querySelector('#popup-price').innerHTML = carts[i].childNodes[1].lastChild.textContent;
  });
}

for (let i = 0; i < orderButtons.length; i++) {
  buttonBasket[i].addEventListener('click', () => {
    popupSmall.style.display = 'block';
    document.querySelector('#small-popup-title').innerHTML = carts[i].childNodes[1].firstChild.textContent;
    document.querySelector('#small-popup-image').src = carts[i].childNodes[0].firstChild.src;
    document.querySelector('#small-popup-price').innerHTML = carts[i].childNodes[1].lastChild.textContent;
  });
}

closePopup.addEventListener('click', () => {
  overlay.style.display = 'none';
  document.querySelector('.product-listing-wrapper').style.filter = 'none';
});

document.addEventListener('keydown',(e)=>{
  if(e.keyCode == 27){
    overlay.style.display = 'none';
    popupSmall.style.display = 'none';
    document.querySelector('.product-listing-wrapper').style.filter = 'none';
  }
});