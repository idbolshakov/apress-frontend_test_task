"use strict"
const isEscEvent = evt => evt.key === ('Escape' || 'Esc');

const getProductById = (item, classParent) => {
    const id = item.closest(classParent).getAttribute('id');
    return API.products.find(element => element.id === +id);
};

const getPrice = price =>  price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
