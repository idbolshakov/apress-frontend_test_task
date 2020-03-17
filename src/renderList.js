const container = document.querySelector('.thing-list');

const getCorrectPrice = (price) => {
  const string = String(price);
  const invertArr = string.split('').reverse();
  const length = invertArr.length;
  let separator = 0;
  const arrWithSpace = invertArr.reduce((acc, item, i) => {
    separator += 1;
    if (separator === 3 && i !== length - 1) {
      const space = ' ';
      separator = 0;
      return [...acc, item, space];
    }
    return [...acc, item];
  }, []).reverse();
  const correctPrice = arrWithSpace.join('');
  const currency = 'руб.';
  return `${correctPrice} ${currency}`;
};

const getImg = (path) => {
  const div = document.createElement('div');
  div.classList.add('img');
  const img = document.createElement('img');
  img.setAttribute('src', `./${path}`);
  img.setAttribute('width', '250');
  img.setAttribute('height', '250');
  div.appendChild(img);
  return div;
};

const getMainText = (text, price) => {
  const div = document.createElement('div');
  div.classList.add('text');
  div.textContent = text;
  const correctPrice = getCorrectPrice(price);
  const h2 = document.createElement('h2');
  h2.textContent = correctPrice;
  div.appendChild(h2);
  return div;
};

const getButtons = (id) => {
  const div = document.createElement('div');
  div.classList.add('buttons');
  const orderBtn = document.createElement('button');
  orderBtn.classList.add('order');
  orderBtn.textContent = 'Заказать';
  orderBtn.setAttribute('id', id);
  const basketBtn = document.createElement('button');
  basketBtn.classList.add('basket');
  basketBtn.textContent = 'В корзину';
  basketBtn.setAttribute('id', id);
  div.append(orderBtn, basketBtn);
  return div;
};

const getThing = (item) => {
  const { id, title, price, img } = item;
  const div = document.createElement('div');
  div.classList.add('thing');
  const image = getImg(img);
  const mainText = getMainText(title, price);
  const buttons = getButtons(id);
  div.append(image, mainText, buttons);
  return div;
};

API.products.map((item) => {
  const thing = getThing(item);
  container.append(thing);
});

