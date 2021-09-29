function createInvisiblebBackground() {
    const el = document.createElement('div');
    el.className = 'invisibleBackground';
    document.body.appendChild(el)
}
function deleteInvisibleBackground(){
    const el = document.querySelector('.invisibleBackground');
    el.parentNode.removeChild(el)
}

function check(e) {
    if(e.target.className === 'inCart') {
     inCart(e)
        }
    if(e.target.className === 'inOrder') {
        inOrder(e)
        }
}

function closeCard() {
    deleteInvisibleBackground();
    const order =  document.body.querySelector('.wrapOrder');
    const cart = document.body.querySelector('.wrapCart');

    if (order){
       order.parentElement.removeChild(order)
   }
     if(cart) {

         cart.parentElement.removeChild(cart)
   }
}

function inCart(e) {
   createInvisiblebBackground();
    const id = e.target.parentNode.parentNode.dataset.id;
    const purchase = API.products.filter((item)=>item.id == id)[0];
    const el = document.createElement('div');
    el.classList ="wrapCart";
    el.innerHTML = ` 
           
            <button class="close" onClick = "closeCard()" style="position: absolute; right: 0px" >X</button>
            <div class="inCartTitle" > <p>Вы добавили в корзину</p></div>
            <div class = "inCartMain">
                <div class="inCartImg" style=background-image:url(${purchase.img})></div>
                <div class = "inCartDescription"><p> ${purchase.title}</p> \n <p> ${purchase.price}руб</p> </div>
              </div>
            <div class = "goToCart"> <button> Перейти в корзину </button></div> 
                      `
       return document.body.appendChild(el)
}

function inOrder(e) {
createInvisiblebBackground();

    const id = e.target.parentNode.parentNode.dataset.id;
    const purchase = API.products.filter((item)=>item.id == id)[0];

    const el = document.createElement('div');
    el.classList ="wrapOrder";

    el.innerHTML = `
<div class = "topOrder">
<h4>${purchase.title}</h4>
<button class="close" onClick = "closeCard()">X</button>
</div>
    
    <div class = "mainInfo">
        <div class="descriptionOrder" >
            <div class = 'imgOrder' style=background-image:url(${purchase.img})></div>
            <div class="priceOrder"><h2 class = "textPriceOrder">${purchase.price} руб.</h2></div>
            </div>
        <div class = "vl"></div>
        <div class = "orderComment">
        <h4 class="textOrderComment">Комментарий \n к заказу</h4>
        <input type="text" class = "textComment">
        </div>
    </div>
    <div class="bottom">
        <div> 
            <h4 class="textPhone">Ваш телефон*:</h4>
        </div>
        <div class="inputPhoneNumber">
        <input type="text" class="phoneNumber">
        <button type="submit">Отправить</button>
        </div>
    </div>`
    return document.body.appendChild(el)
 }


API.products.forEach(({id, img, price, title})=> {
       const el = document.createElement('div')
       el.classList ="wrap"
       el.dataset.id = id
        el.innerHTML = `<div class="img" style=background-image:url(${img})></div>
<div class="description">
    <h4>${title}</h4>
    <h2>${price} руб.</h2>
</div>
<div class="actions">
    <button class = "inOrder">Заказать</button>
    <button class = "inCart">В корзину</button>
</div>`
    let closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach((item)=>{item.addEventListener('click',closeCard)})
   return document.body.appendChild(el)

} )

document.addEventListener('click', check)





