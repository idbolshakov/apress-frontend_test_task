import React, { useRef } from 'react';

function UseBasket(selectedProduct, hideBasket) {
  const refBasket = useRef(null);

  const Basket = () => {
    const { title, price, img } = selectedProduct;

    return (
      <div className="basket" ref={refBasket}>
        <div className="basket-title">
          <div>Вы добавили в корзину:</div>
          <div className="basket-triangle"/>
        </div>
        <div className="basket-main">
          <img src={img} alt={title} className="basket-main-img"/>
          <div className="basket-right">
            <div className="basket-right-title">{title}</div>
            <div className="basket-right-price">{price}&nbsp;руб.</div>
            <button className="basket-right-close" onClick={hideBasket}>x</button>
          </div>
        </div>
        <button className="basket-send" onClick={hideBasket}>Перейти в корзину</button>
      </div>
    );
  };

  return [Basket, refBasket];
}

export default UseBasket;
