const modalOrderTmp = (item) => `<section class="modal-order">
  <h2 class="modal-order__title">${item.title}</h2>
  <form action="" class="modal-order__form">
    <div class="modal-order__top">
      <div class="modal-order__left">
        <img class="modal-order__img" src="${item.img}">
        <div class="modal-order__price">${item.price.toLocaleString('ru-RU')} руб.</div>
      </div>
      <div class="modal-order__right">
        <label for="modal-order__message">Комментарий к заказу:</label>
        <textarea name="" id="modal-order__message" cols="30" rows="10"></textarea>
      </div>
    </div>
    <div class="modal-order__bottom">
      <div class="modal-order__left">
        <label for="modal-order__phone">Ваш телефон *:</label>
      </div>
      <div class="modal-order__right">
        <input class="modal-order__input" id="modal-order__phone">
        <input class="modal-order__submit btn btn-reset" type="submit" value="Отправить">
      </div>
    </div>
  </form>
</section>`;


const render = (template) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = template.trim();
  document.body.appendChild(wrapper.firstElementChild);
};


render(modalOrderTmp(API.products[1]));