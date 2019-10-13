import React, { Component } from 'react';
import './OrderPopup.scss';

class OrderPopup extends React.Component {
  render = () => {
    const product = this.props.product
    return (
      <div className="order-popup-wrapper">
        <div className="order-popup">
          <button className="op-close" onClick={this.props.closePopup}></button>
          <form method="POST">
            <input type="hidden" name="product" value={product.id} />
            <div className="op-title">{product.title}</div>
            <div className="op-left-col">
              <img className="op-image" src={product.img}/>
              <div className="op-price">{product.price} руб.</div>
            </div>
            <div className="op-right-col">
              <div className="op-comment-label">Комментарий к заказу:</div>
              <div className="op-comment-wrapper">
                <textarea className="op-comment" name="comment"></textarea>
              </div>
            </div>
            <div className="op-phone-wrapper">
              <span className="op-phone-label">Ваш телефон *:</span>
              <input className="op-phone" type="text" name="phone"/>
            </div>
            <input className="op-submit btn" type="submit" name="submit" value="Отправить"/>
          </form>
        </div>
      </div>
    )
  }
}

export default OrderPopup;
