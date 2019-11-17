var divans = API.products
var template = document.querySelector('[data-template=product]');
window.onload = function () {
    divans.forEach(function(item) {
        document.getElementById('list_product').appendChild(res(item));
    });
    function res(item){
        var templateClone = template.cloneNode(true);
        templateClone.removeAttribute('data-template', '');
        templateClone.querySelector('.title').textContent = item.title;
        templateClone.querySelector('.price').textContent = item.price + ' руб.';
        templateClone.querySelector('.photo').setAttribute('src', item.img);
        templateClone.querySelector('.photo').setAttribute('alt', item.title);
        templateClone.querySelector('.PopUp').setAttribute('data-name', item.id);
        templateClone.querySelector('.BasketPop').setAttribute('data-name', item.id);
        return templateClone;
    }
};
// рендер попапа заказа
function MyPopUp(el){
    var id_element = +el.dataset.name;
    var divan = divans.find(function(item) {
        return item.id === id_element
    });
    var order = document.querySelector("#order");
    document.querySelector('.cover').classList.remove('none');
    order.querySelector('.photo').setAttribute('src', divan.img);
    order.querySelector('.title').innerHTML = divan.title;
    order.querySelector('.price').innerHTML = divan.price + ' руб.';
}
// закрытие окна заказа
function closePopUp(){
    document.querySelector('.cover').classList.add('none');
}
// закрытие попапа корзины
function closeBasket(){
    document.querySelector('.BasketCover').classList.add('none');
}
// рендер попапа корзины
function BasketPopUp(el){
    var id_element = +el.dataset.name;
    var divan = divans.find(function(item) {
        return item.id === id_element
    });
    var basket = document.querySelector(".BasketPopUp");
    document.querySelector('.BasketCover').classList.remove('none');
    basket.querySelector('.photo').setAttribute('src', divan.img);
    basket.querySelector('.title').innerHTML = divan.title;
    basket.querySelector('.price').innerHTML = divan.price + ' руб.';
    setTimeout(closeBasket, 5000);
}
// polifill "find" https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function(predicate) {
       // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
  
        var o = Object(this);
  
        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;
  
        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
  
        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];
  
        // 5. Let k be 0.
        var k = 0;
  
        // 6. Repeat, while k < len
        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return kValue.
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          // e. Increase k by 1.
          k++;
        }
  
        // 7. Return undefined.
        return undefined;
      },
      configurable: true,
      writable: true
    });
  }