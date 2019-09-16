var API=new Object();
document.addEventListener("DOMContentLoaded", ready);
function ready(){
	API.products=JSON.parse(`[{
	"id": "a269d441-5cd9-4a03-b0cc-5504eee7a452",
	"name": "Диван Честер - классика вне времени!",
	"price": "97 523 руб.",
	"img": "1.png"
}, {
	"id": "c4ed336c-3e9b-40fe-8b82-5632476472b4",
	"name": "Угловой диван Винчи",
	"price": "42 660 руб.",
	"img": "2.png"
}, {
	"id": "1627ae75-6967-40db-bbbe-c65b4b6df653",
	"name": "Диван Бруклин",
	"price": "29 940 руб.",
	"img": "3.png"
}, {
	"id": "f8b5df86-441e-45cf-9971-c8213524265e",
	"name": "Диван Лагуна",
	"price": "34 990 руб.",
	"img": "4.png"
}, {
	"id": "0d70b824-221c-43ad-9bcd-92ee9778be99",
	"name": "MOON 007. Целый мир уюта на одном диване.",
	"price": "59 120 руб.",
	"img": "5.png"
}]`)
let products=API.products;
products.forEach(function(item,i,products){
let productsList=document.getElementById('mainframe');
productsList.innerHTML+=`  <div class="Card_div" id="Card_div${i}">
        <table class="card">
            <tr>
                <td>
                    <img src="img/${item.img}" id="img${i}" class="photo" />
                </td>
                <td class="description">
                    <h1 id="name${i}" class="name">${item.name}</h1>
                    <h2 id="price${i}" class="price">${item.price}</h2>
                </td>
                <td class="buttons">
                    <a id="order${i}" class="order" onclick="showQuickOrder(${i});">Заказать</a>
                   <br><br><br>
                    <a id="ToCart${i}" class="ToCart" onclick="AddToCart(${i});">В корзину</a>
                </td>
            </tr>
        </table>
    </div>`
});

}


//POPUP//
function closeQuickOrder(){
	let modalWin = document.getElementById('QuickOrder_popup');
	
		 let darkLayer=document.getElementById("shadow");
 darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
                    modalWin.style.display = 'none'; 
}
function showQuickOrder(id) {
	let img = document.getElementById(`img${id}`).src;
let title=document.getElementById(`name${id}`).innerText;
let price=document.getElementById(`price${id}`).innerText;
 document.getElementById("QuickOrder_popup").innerHTML = "";
document.getElementById("QuickOrder_popup").innerHTML=
`        <img src="img/close.png" class="closeQuickOrder" onclick="closeQuickOrder();"/>
 <h1 class="QuickOrder_title">${title} </h1>
        <table class="QuickOrder">
            <tr>
                <td class="QuickOrder_sell">
                    <img src="${img}" class="QuickOrder_photo" />
                    <h2 id="price" class="QuickOrder_price">${price}</h2>
                </td>
                <td class="QuickOrder_comment">
                  Комментарий к заказу:
                    <textarea class="QuickOrder_comment_textarea" cols="60" rows="10"></textarea>

                </td>
            </tr>

            <tr class="border" >
                <td colspan="2">Ваш телефон* <input type="phone" id="QuickOrder_number"/>
<a href="#" class="send" onclick="sendQuickOrder();">Отправить</a>
                </td>
                <!-- <label for="QuickOrder_number">Ваш телефон</label>
<input type="phone" id="QuickOrder_number"/>-->
            </tr>
        </table>
`
                var darkLayer = document.createElement('div'); // слой затемнения
                darkLayer.id = 'shadow'; // id чтобы подхватить стиль
                document.body.appendChild(darkLayer); // включаем затемнение
 
                var modalWin = document.getElementById('QuickOrder_popup'); // находим наше "окно"
                modalWin.style.display = 'block'; // "включаем" его
 
                darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
                    darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
                    modalWin.style.display = 'none'; // делаем окно невидимым
                    return false;
                };
            }
/*End POPUP*/






/* Quick Order*/
function sendQuickOrder(){

};
function CartClear(id){
	//document.getElementById(`t${id}`).remove();
	let modalWin = document.getElementById('CartPopup');
		 document.getElementById("CartPopup").innerHTML = "";
		 let darkLayer=document.getElementById("shadow");
 darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
                    modalWin.style.display = 'none'; // делаем окно невидимым
                    
             
}
/*AddToCartPopup*/
function AddToCart(id) {
	// document.getElementById("CartPopup").innerHTML = "";
 	let img = document.getElementById(`img${id}`).src;
let title=document.getElementById(`name${id}`).innerText;
let price=document.getElementById(`price${id}`).innerText;
document.getElementById('CartPopup').innerHTML=`

   <table id="t${id}">
     <tr>
      <td><img src="${img}" class="Cart_photo" /></td>
      <td>
        <p class="Cart_title"><b>${title}</b> <img src="img/close.png" class="close" onclick="CartClear(${id});"/></p>
        <p class="Cart_price">${price}</p>
      </td>
     </tr>
   </table>

 <a id="OpenCart" class="OpenCart" onclick="OpenCart();">Перейти в корзину</a>
   `;
                var darkLayer = document.createElement('div'); // слой затемнения
                darkLayer.id = 'shadow'; // id чтобы подхватить стиль
                document.body.appendChild(darkLayer); // включаем затемнение
 
                var modalWin = document.getElementById('CartPopup'); // находим наше "окно"
                modalWin.style.display = 'block'; // "включаем" его
 
                darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
                    darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
                    modalWin.style.display = 'none'; // делаем окно невидимым
                    return false;
                };
            }
