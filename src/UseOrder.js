import React, { useRef, useLayoutEffect } from 'react';

function UseOrder(selectedProduct, hideOrder) {
  const refOrderOverlay = useRef(null);

  const overlayHide = (e) => {
    if (e.target === refOrderOverlay.current) {
      hideOrder();
    }
  }

  const Order = () => {
    const { title, price, img } = selectedProduct;

    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = '16px';
      return () => {
        document.body.style.overflow = originalStyle;
        document.body.style.marginRight = '0';
      }
      }, []
    );

    return (
      <div className="order-overlay" onClick={overlayHide} ref={refOrderOverlay}>
        <div className="order">
          <div className="order-title">{title}</div>
          <div className="order-main">
            <div className="order-main-left">
              <img src={img} alt={title} className="order-main-left-img"/>
              <div className="order-main-left-price">{price}&nbsp;руб.</div>
            </div>
            <div className="order-main-right">
              <div className="order-main-right-title">Комментарий к&nbsp;заказу:</div>
              <textarea className="order-main-right-input" rows="10"/>
            </div>
          </div>
          <div className="order-phone">
            <div className="order-phone-title">Ваш телефон *:</div>
            <input type="tel" className="order-phone-input"/>
          </div>
          <button className="order-send" onClick={hideOrder}>Отправить</button>
          <button className="order-close" onClick={hideOrder}>x</button>
        </div>
      </div>
    );
  };

  return [Order];
}

export default UseOrder;
