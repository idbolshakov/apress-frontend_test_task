const API = {
  products: [
    {
      "id": 1,
      "title": "Выкатной детский диван Зайка производитель фабрика Blanes",
      "price": 11740,
      "img": "assets/images/1.jpg"
    },

    {
      "id": 2,
      "title": "Диван Банжо",
      "price": 62839,
      "img": "assets/images/2.jpg"
    },

    {
      "id": 3,
      "title": "Гостиная классика Panamar Classic",
      "price": 267593,
      "img": "assets/images/3.jpg"
    },

    {
      "id": 4,
      "title": "Chairman Диван Релакс Terra 101",
      "price": 31950,
      "img": "assets/images/4.jpg"
    },

    {
      "id": 5,
      "title": "Диван матрас прямой Верн Sleepformer",
      "price": 52450,
      "img": "assets/images/5.jpg"
    },

    {
      "id": 6,
      "title": "2 кресла и стол чайный - комплект «Виктория» (Эдем)",
      "price": 62350,
      "img": "assets/images/6.jpg"
    },

    {
      "id": 7,
      "title": "Современный стильный угловой диван Flex с декоративной столешницей",
      "price": 483000,
      "img": "assets/images/7.jpg"
    },

    {
      "id": 8,
      "title": "Белый диван Deco - Colleccion Alexandra",
      "price": 606400,
      "img": "assets/images/8.jpg"
    },

    {
      "id": 9,
      "title": "Белый диван в гостиную с цветной обивкой", //не похож на белый
      "price": 394899,
      "img": "assets/images/9.jpg"
    },

    {
      "id": 10,
      "title": "Двухместный бархатный диван",
      "price": 13240,
      "img": "assets/images/10.jpg"
    },
  ]
};
const wrapper = document.getElementsByTagName("main")[0]
API.products.forEach(listDraw)
function listDraw(item) {
  let section = document.createElement("section");
  wrapper.appendChild(section);
section.setAttribute("id", item["id"]);
let image = new Image(200, 200)
image.src = item["img"];
section.appendChild(image);
  section.insertAdjacentHTML('beforeend', '<p>' + item["title"] + '</p>' + '<h1>' + item["price"] + '</h1>' + '<button class="orderButton"> Заказать </button>' + '<button class="addToCartButton"> В корзину </button>' );

}
const cartButtons = document.querySelectorAll('.addToCartButton');
const closeButton = document.getElementById('closeButton');
const closeButtonOne = document.getElementById('closeButtonOne');
const orderButtons = document.querySelectorAll('.orderButton')
orderButtons.forEach(orderButton => orderButton.addEventListener('click', openPopUpOne))
function openPopUpOne(e) {
document.getElementById('popupperOne').style.display = 'block'
let sectionId = e.target.parentNode.id - 1
let popupText = document.getElementById('topDivOne')
 let popupImage = document.getElementById('popup-imageOne')
 let price = document.getElementById('popupPrice')
 price.innerHTML = API.products[sectionId]["price"]
 popupText.innerHTML = API.products[sectionId]["title"]
 popupImage.src = API.products[sectionId]["img"]

}
cartButtons.forEach(cartButton => cartButton.addEventListener('click', openPopUp));
function openPopUp(e) {
  document.getElementById('popupper').style.display = 'block'
  let sectionId = e.target.parentNode.id - 1
  let popupText = document.getElementById('popup-text')
   let popupImage = document.getElementById('popup-image')
  console.log(popupImage)
  console.log(sectionId)
popupText.innerHTML = API.products[sectionId]["title"] + ' ' + API.products[sectionId]["price"]
popupImage.src = API.products[sectionId]["img"]
}
closeButton.addEventListener('click', hidePopUp)
function hidePopUp() {
  document.getElementById('popupper').style.display = 'none'
}

closeButtonOne.addEventListener('click', hidePopUpOne)
function hidePopUpOne() {
  document.getElementById('popupperOne').style.display = 'none'
}
