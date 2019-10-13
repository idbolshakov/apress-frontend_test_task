import React, { Component } from 'react';
import './CartPopup.scss'

class CartPopup extends React.Component {
  render = () => {
    const product = this.props.product
    return (
      <div className="cart-popup">
        <button className="cp-close" onClick={this.props.closePopup}></button>
        <div className="cp-title">Вы добавили в корзину:</div>

        <img className="cp-image" src={product.img}/>        
        <div className="cp-details">
          <div className="cp-product">{product.title}</div>
          <div className="cp-price">{product.price} руб.</div>
        </div>
        <a className="cp-link btn" href="/cart">Перейти в корзину</a>
      </div>
    )
  }
}

export default CartPopup;
