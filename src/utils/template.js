
export const productTemplate = (data) => {
  return `
            <div class="product__container">
              <img class="product__image" src="${data.img}" alt="${data.title} купить по цене ${data.price} руб.">
              <div class="product__content">
                <h2 class="product__heading">${data.title}</h2>
                <span class="product__price">${data.price} руб.</span>
              </div>
              <div class="product__controls">
                <button class="btn btn_order-btn">Заказать</button>
                <button class="btn btn_add-to-cart-btn">В корзину</button>
              </div>
            </div>
            `;
}


export const addToCartPopupTemplate = (data) => {
  return `   
    <div class="add-to-cart-popup__row">
        <img class="popup__image add-to-cart-popup__image"
            src="${data.img}" alt="${data.title} купить по цене ${data.price}">
        <div class="add-to-cart-popup__info">
            <h3 class="add-to-cart-popup__name">${data.title}</h3>
            <span class="popup__price add-to-cart-popup__price">${data.price} руб.</span>
            <img class="add-to-cart-popup__remover"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCAzMzkuMTc3IDMzOS4xNzciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMzOS4xNzcgMzM5LjE3NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgk8cGF0aCBkPSJNMjQ3LjI0NCwxNjkuNTlsODMuOTM4LTgzLjkzOGM1LjMzMi01LjMyNyw3Ljk5NC0xMS43OTgsNy45OTQtMTkuNDE0YzAtNy42MTQtMi42NjktMTQuMDg0LTcuOTk0LTE5LjQxNEwyOTIuMzU1LDcuOTkzICAgQzI4Ny4wMjYsMi42NjUsMjgwLjU1NiwwLDI3Mi45NDQsMGMtNy42MTcsMC0xNC4wODUsMi42NjUtMTkuNDE3LDcuOTkzTDE2OS41OSw5MS45MzFMODUuNjUxLDcuOTkzICAgQzgwLjMyNSwyLjY2NSw3My44NTQsMCw2Ni4yMzcsMGMtNy42MTEsMC0xNC4wODMsMi42NjUtMTkuNDE0LDcuOTkzTDcuOTk0LDQ2LjgyNEMyLjY2Nyw1Mi4xNSwwLDU4LjYyNCwwLDY2LjIzOCAgIGMwLDcuNjE2LDIuNjY0LDE0LjA4NCw3Ljk5NCwxOS40MTRsODMuOTM3LDgzLjkzOEw3Ljk5NCwyNTMuNTI4QzIuNjY3LDI1OC44NTksMCwyNjUuMzI3LDAsMjcyLjk0NSAgIGMwLDcuNjEsMi42NjQsMTQuMDgyLDcuOTk0LDE5LjQxbDM4LjgzLDM4LjgyOGM1LjMzLDUuMzMyLDExLjgwMyw3Ljk5NCwxOS40MTQsNy45OTRjNy42MTYsMCwxNC4wODQtMi42NjksMTkuNDE0LTcuOTk0ICAgbDgzLjkzOS04My45MzhsODMuOTQ0LDgzLjkzOGM1LjMyOCw1LjMzMiwxMS43OTMsNy45OTQsMTkuNDE3LDcuOTk0YzcuNjExLDAsMTQuMDgyLTIuNjY5LDE5LjQxMS03Ljk5NGwzOC44Mi0zOC44MjggICBjNS4zMzItNS4zMjQsNy45OTQtMTEuOCw3Ljk5NC0xOS40MWMwLTcuNjE4LTIuNjYyLTE0LjA4Ni03Ljk5NC0xOS40MTdMMjQ3LjI0NCwxNjkuNTl6IiBmaWxsPSIjY2YyMTU4Ii8%2BPC9nPjxnPjwvZz48Zz48L2c%2BPGc%2BPC9nPjxnPjwvZz48Zz48L2c%2BPGc%2BPC9nPjxnPjwvZz48Zz48L2c%2BPGc%2BPC9nPjxnPjwvZz48Zz48L2c%2BPGc%2BPC9nPjxnPjwvZz48Zz48L2c%2BPGc%2BPC9nPjwvc3ZnPgo%3D">
        </div>
    </div>
    `;
}

