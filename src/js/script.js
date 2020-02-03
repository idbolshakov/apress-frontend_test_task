'use strict'

let catalogContainer = document.querySelector(".catalog__inner");
let catalogProductTemplate = document.querySelector("#product-template");
let orderTemplate = document.querySelector("#order-template");
let basketTemplate = document.querySelector("#basket-template");

let productData = API.products;

const formatCostValue = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
};

const createItem = (elementTemeplate, dataObject) => {

    let productTemplate = elementTemeplate.content.querySelector(".catalog__item");
    let product = productTemplate.cloneNode(true);
    let elementTitle = product.querySelector(".catalog__item-title");
    let elementCost = product.querySelector(".catalog__item-cost-value");
    let elementImage = product.querySelector(".catalog__item-img");
    let orderBtn = product.querySelector(".catalog__item-btn--order");
    let basketBtn = product.querySelector(".catalog__item-btn--basket");

    elementTitle.innerHTML = dataObject.title;
    elementCost.innerHTML = formatCostValue(Number(dataObject.price));
    elementImage.src = dataObject.img;
    product.id = dataObject.id;
    orderBtn.setAttribute('data-id', dataObject.id);
    basketBtn.setAttribute('data-id', dataObject.id);

    orderBtn.addEventListener("click", createOrder);
    basketBtn.addEventListener("click", createOrder);

    return product;
};

const generateItem = () => {
    let fragment = document.createDocumentFragment();

    productData.forEach(element => {
        let newProduct = createItem(catalogProductTemplate, element);
        fragment.appendChild(newProduct);
    });

    catalogContainer.appendChild(fragment);
};

const createOrder = () => {
    let target = event.target;
    let idTarget = Number(target.dataset.id);
    let dataElement = getElementById(productData, idTarget);

    if (target.classList.contains("catalog__item-btn--order")){
        let orderPopup = (orderTemplate.content.querySelector(".order-popup")).cloneNode(true);
        let elementTitle = orderPopup.querySelector(".order-popup__title");
        let elementCost = orderPopup.querySelector(".order-popup__item-cost-value");
        let elementImage = orderPopup.querySelector(".order-popup__img");
        let elementBtnClose = orderPopup.querySelector(".order-popup__close-btn");

        orderPopup.setAttribute("data-close-id", dataElement.id);
        elementBtnClose.setAttribute("data-close-id", dataElement.id);
        elementTitle.innerHTML = dataElement.title;
        elementCost.innerHTML = formatCostValue(Number(dataElement.price));
        elementImage.src = dataElement.img;

        orderPopup.addEventListener('click', function(evt){
            evt.preventDefault();
            let target = evt.target;

            if(target == elementBtnClose) {
                orderPopup.remove();
            }
        });

        catalogContainer.appendChild(orderPopup);
    };

    if (target.classList.contains("catalog__item-btn--basket")){
        let basketPopup = (basketTemplate.content.querySelector(".basket-popup")).cloneNode(true);
        let elementTitle = basketPopup.querySelector(".basket-popup__product-name");
        let elementCost = basketPopup.querySelector(".basket-popup__product-cost-value");
        let elementImage = basketPopup.querySelector(".basket-popup__img");
        let elementBtnClose = basketPopup.querySelector(".basket-popup__product--close");

        basketPopup.setAttribute("data-close-id", dataElement.id);
        elementBtnClose.setAttribute("data-close-id", dataElement.id);
        elementTitle.innerHTML = dataElement.title;
        elementCost.innerHTML = formatCostValue(Number(dataElement.price));
        elementImage.src = dataElement.img;
        catalogContainer.appendChild(basketPopup);

        basketPopup.addEventListener('click', function(evt){
            evt.preventDefault();
            let target = evt.target;

            if(target == elementBtnClose) {
                basketPopup.remove();
            }
        });
    }
}

const getElementById = (dataSet, idElement) => {

    for (var i = 0; i < dataSet.length; i++) {

        let elementForOrder = dataSet[i];

        if(idElement == dataSet[i].id) {
            return elementForOrder;
        }
    }
}



generateItem();



