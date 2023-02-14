class Modal {
  constructor() {
    const self = this;
  }

  init() {
    this.#addEventListeners();
  }

  show(catalogItem) {
    const modal = document.querySelector(".modal");
    modal.querySelector(".modal-header__title").innerText = catalogItem.title;

    const body = modal.querySelector(".modal-body");
    while (body.firstChild && body.removeChild(body.firstChild));
    body.insertAdjacentHTML("beforeend", this.getTemplateBody(catalogItem));
    this.modalShow();
  }

  getTemplateBody(catalogItem) {
    return `
      <form action="#" class="modal-body__catalog">
        <div class="modal-body__catalog-main">
          <aside class="modal-body__catalog-aside">
            <div class="modal-body__catalog__img-block">
              <img src="../${catalogItem.img}" class="modal-body__catalog__img" />
            </div>
            <p class="modal-body__catalog__price">
              ${catalogItem.priceToFront} руб.
            </p>
          </aside>
          <div class="modal-body__catalog-content catalog-content-modal">
            <div class="catalog-content-modal__comment">
              <p>Комментарий к<br/> заказу:</p>
              <textarea></textarea>
            </div>
          </div>
        </div>
        <div class="modal-body__catalog-submit">
          <div class="modal-body__catalog-submit__phone">
            <label>Ваш телефон*:</label>
            <input type="text" name="phone" />
          </div>
          <button class="button-confirm">Отправить</button>
        </div>
      </form>
    `;
  }

  modalShow() {
    const modal = document.querySelector(".modal");
    const modalBg = document.querySelector(".modal-bg");
    modal.classList.add("modal-active");
    modalBg.classList.add("modal-active");
    modal.classList.remove("modal-hide");
    modalBg.classList.remove("modal-hide");
  }

  modalHide() {
    const modal = document.querySelector(".modal");
    const modalBg = document.querySelector(".modal-bg");
    modal.classList.add("modal-hide");
    modalBg.classList.add("modal-hide");
    modal.classList.remove("modal-active");
    modalBg.classList.remove("modal-active");
  }

  #addEventListeners() {
    const self = this;
    document.querySelector(".modal-bg").addEventListener("click", self.modalHide);
  }
}

const modal = new Modal();
modal.init();
