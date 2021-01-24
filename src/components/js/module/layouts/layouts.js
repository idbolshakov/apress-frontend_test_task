// Рендер списка товаров
const getTemplateList = (data = []) => {
  const items = data.map(({ img, title, price, id }) => {
    return ` 
		<div class="product-listing-item">
			<div class="product-listing-item-content">
				<div class="product-listing-item__img">
					<img src="${img}" alt="product-img"/>
				</div>
				<div class="product-listing-item-content-text">
					<span class="product-listing-item-content-text__title">
						${title}
					</span>
					<span class="product-listing-item-content-text__price">
						${price} руб.
					</span>
				</div>
			</div>
			<div class="product-listing-item-actions">
				<button
					class="product-listing-item-actions__order_btn"
					type="button"
					data-type="order"
					data-img="${img}"
					data-title="${title}"
					data-price="${price}"
					data-id="${id}"
				>
					Заказать
				</button>
				<button
					class="product-listing-item-actions__to_card_btn"
					type="button"
					data-type="cart"
					data-img="${img}"
					data-title="${title}"
					data-price="${price}"
					data-id="${id}"
				>
					В корзину
				</button>
			</div>
		</div>
	`;
  });

  return ` 
		<div class="product-listing-wrapper-items">
			${items.join("")}
		</div>
	`;
};

// Рендер корзины
const getTemplateCart = (data = [], sum = null) => {
  if (data.length === 0) {
    return `
			<div class="cart-items empty">
					Вы ничего не купили
			</div>
		`;
  }

  const items = data.map((item, index) => {
    return ` 
		<div class="cart-item">
		<div class="cart-item__img">
			<img src="${item.img}" alt="product-img" />
		</div>
		<div class="cart-item-content">
			<div class="cart-item-content__title">${item.title}</div>
			<div class="cart-item-content__price">${item.price} руб.</div>
		</div>
		<div id="cart-delete" class="cart-item__close" >
			<img src="assets/icons/cancel.svg" alt="delete" data-type="delete" data-id="${index}"/>
		</div>
    </div>
	`;
  });

  const endpoint =
    sum === null
      ? `
			<div class="cart-items">
			<span>Вы добавили в корзину:</span>
				${items.join("")}
				<button type="button" class="cart__btn">Перейти в корзину</button>
			</div>`
      : ` 
			<div class="cart-items">
			<span class="cart-items__title">Вы добавили в корзину:</span>
				${items.join("")}
				<span class="cart__sum">Итого: ${sum} руб.</span>
				<button type="button" class="cart__btn">Перейти в корзину</button>
			</div>`;

  return endpoint;
};

// Рендер ордера
const getTemplateOrder = (data = {}) => {
  const item = ` 
	<div class="order-item">
		<div class="order-item-left">
			<div class="order-item-left__img">
				<img src="${data.img}" alt="product-img" />
			</div>
			<div class="order-item-left__price">
				${data.price} руб.
			</div>
		</div>
		<div class="order-item-right">
			<div class="order-item-right-comment">
				<div class="order-item-rigth-comment__text">Комментарии к заказу:</div>
				<textarea name="comment"></textarea>
			</div>
			<div class="order-item-right-phone">
				<div class="order-item-right-phone__text">Ваш телефон:</div>
				<input type="text" name="phone" placeholder="+79991112223"/>
			</div>
			<button class="order-item-right__btn">Отправить</button>
		</div>
	</div>
`;

  return `
		<div class="order-wrapper">
			<div class="order-item__title">${data.title}</div>
			${item}
			<div id="order-delete" class="order-item__close" >
				<img src="assets/icons/cancel.svg" alt="close" data-type="order-close" />
			</div>
		</div>`;
};

export { getTemplateList, getTemplateCart, getTemplateOrder };
