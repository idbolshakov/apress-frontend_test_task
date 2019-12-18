var i, cln;
var countProducts = API.products.length;
var itemList = document.getElementById("item0");
for ( i = 0; i < (countProducts); i++ ) {
    document.querySelector('#item' + i).querySelector('.product-listing__img').src = API.products[i]['img'];
    document.querySelector('#item' + i).querySelector('.product-listing__img').dataset.src = API.products[i]['img'];
    document.querySelector('#item' + i).querySelector('.product-listing__name').innerHTML = API.products[i]['title'];
    document.querySelector('#item' + i).querySelector('.product-listing__name').dataset.name = API.products[i]['title'];
    document.querySelector('#item' + i).querySelector('.product-listing__price-number').innerHTML = API.products[i]['price'];
    document.querySelector('#item' + i).querySelector('.product-listing__price-number').dataset.price = API.products[i]['price'];
    if(i!==(countProducts-1)){
        cln = itemList.cloneNode(true);
        cln.setAttribute( 'id', 'item' + (i+1) );
        document.querySelector("#product-listing").appendChild(cln);
    }
}

var popupOrder = document.querySelector('#popup-order');
var basketOrder = document.querySelector('#popup-basket');
var idThis, thisParent;
function order(el) {
    popupOrder.style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
    thisParent = el.parentNode.parentNode;
    idThis = thisParent.id;
    popupOrder.querySelector('.product-listing__img').src = document.getElementById(idThis).querySelector('.product-listing__img').dataset.src;
    popupOrder.querySelector('.product-listing__name').innerHTML = document.getElementById(idThis).querySelector('.product-listing__name').dataset.name;
    popupOrder.querySelector('.product-listing__price-number').innerHTML = document.getElementById(idThis).querySelector('.product-listing__price-number').dataset.price;
}

function basket(el) {
    basketOrder.style.display = 'block';
    thisParent = el.parentNode.parentNode;
    idThis = thisParent.id;
    basketOrder.querySelector('.product-listing__img').src = document.getElementById(idThis).querySelector('.product-listing__img').dataset.src;
    basketOrder.querySelector('.product-listing__name').innerHTML = document.getElementById(idThis).querySelector('.product-listing__name').dataset.name;
    basketOrder.querySelector('.product-listing__price-number').innerHTML = document.getElementById(idThis).querySelector('.product-listing__price-number').dataset.price;
}

function closePopup() {
    var coll = document.getElementsByClassName('popup');
    for ( i = 0; i < coll.length; i++ ) {
        document.getElementsByClassName('popup')[i].style.display = 'none'
    }
    document.querySelector('.overlay').style.display = 'none';
}



