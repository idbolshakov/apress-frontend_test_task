window.onload=function(){
	document.getElementById("order_popup").style.display='none';
	document.getElementById("basket_popup").style.display='none';
	var spisok="";
	for(var i=0;i<API.products.length;i++){		
		spisok+="<div class='item_row'><div class='item_column'><div class='item'><img src='"+API.products[i].img+"'></img></div><div class='item_price'><h2>"+API.products[i].title+"</h2><br>"+API.products[i].price+" руб.</div><div class='item'><input type='button' value='Заказать'  onclick=orderclick("+API.products[i].id+") class='red'><br><input type='button' value='В корзину'  onclick=basketclick("+API.products[i].id+")></div></div></div><br>";
	}
	document.getElementById("container").innerHTML=spisok;
};

let basket=new Set();

function search(id){
	for(var i=0;i<API.products.length;i++){
		if (API.products[i].id===id) {
									return API.products[i];
									}
	}
};

function orderclick(id){
	var selectproduct=search(id);
	document.getElementById("order_popup_content").innerHTML="<h2>"+selectproduct.title+"</h2><br><div class='order_popup_item'><div><img src='"+selectproduct.img+"'></img><br>"+selectproduct.price+" руб.</div><div><label>Комментарий к заказу:</label><input type='text' id='comment'></div>"+"<div id='phone'>Ваш телефон*:</div><div><input type='text'><br><input type='button' value='Отправить' class='red'></div></div>";
	document.getElementById("order_popup").style.display='grid';
};

function basketrenew(){
	var basketcontent="";
	for(var item of basket){
		basketcontent+="<div><img src='"+item.img+"'></img></div><div>"+item.title+"<br>"+item.price+"руб.</div><div class='xx'><label onclick=basketdelete("+item.id+")>x</label></div>";
	}
	document.getElementById("basket_popup_content").innerHTML=basketcontent;	
	document.getElementById("basket_popup").style.display='grid';
	if (basket.size==0){document.getElementById("basket_popup").style.display='none';}
};

function basketclick(id){
	var item=search(id);
		basket.add(item);
		basketrenew();
};

function orderclose(){
	document.getElementById("order_popup").style.display='none';
};

function basketdelete(id){
	var elem;
	for(var item of basket){if(item.id===id)elem=item;}
	basket.delete(elem);
	basketrenew();
};


//https://github.com/idbolshakov/apress-frontend_test_task