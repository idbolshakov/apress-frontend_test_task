console.log(API.products);
for (i=0;i<API.products.length;i++){
    document.getElementById("main").insertAdjacentHTML('beforeend', '<div class="item"> <img src="'+ API.products[i].img+ '"> <div class="info"> <p class="description">'+ API.products[i].title+'</p> <p class="price">'+ API.products[i].price+ '</p> </div> <div class="btns"> <button onclick="order('+i+')" class="order">Заказать</button> <button onclick="busket('+i+')" class="basket">В корзину</button> </div> </div>');
}

function order(id){
    console.log(id);
    document.getElementById("main").insertAdjacentHTML('beforeend','<div id="popup"> <div class="popup-content"> <div class="modal-header"> <p>'+API.products[id].title+'</p> <button id="closePopup" onclick="closePopup()">X</button> </div> <div class="modal-content"> <div> <img src="'+ API.products[id].img+ '"> <p class="price">'+ API.products[id].price+ '</p> </div> <div class="input"> <p>Коментарий к заказу:</p> <textarea> </textarea> </div> </div> <div class="modal-footer"> <p>Ваш телефон</p> <input type="text"/> </div> <div> <button class="btn">Отправить</button> </div> </div> </div>');
    document.getElementById("popup").style.display = "block";
};
function closePopup(){
    document.getElementById("popup").style.display = "none";
    document.getElementById('popup').remove();
};
function busket(id){
    document.getElementById("main").insertAdjacentHTML('beforeend', '<div id="popup-busket"> <div class="popup-content-busket"> <div class="popup-header"> <p>Вы добавили товар в корзину</p> </div> <div class="modal-content"> <img src="'+API.products[id].img+'"> <div class="text"> <p>'+API.products[id].title+'</p> <p>'+API.products[id].price+'</p> </div> </div> <div class="modal-footer"> <button onclick="btnclose()" id="btnclose">Перейти в корзину</button> </div> </div> </div>')
    document.getElementById("popup-busket").style.display = "block";
};
function btnclose(){
    document.getElementById("popup-busket").style.display="none";
    document.getElementById('popup-busket').remove();
}
