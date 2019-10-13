import React, { Component } from 'react';
import './ProductItem.scss';

class ProductsList extends React.Component {
  render = () => {
    const products = this.props.products
    return (
      <div className="products-list">
        {products.map((product) => (
          <ProductItem product={product} showOrderPopup={this.props.showOrderPopup} showCartPopup={this.props.showCartPopup}/>
        ))}
      </div>
    )
  }
}

class ProductItem extends React.Component {
  render = () => {
    const product = this.props.product
    return (
      <div className="pl-item">
        <div className="pl-image">
          <img className="pl-img" src={product.img} alt={product.title} />
        </div>
        <div className="pl-info">
          <div className="pl-title">{product.title} {product.id}</div>
          <div className="pl-price">{product.price} руб.</div>
        </div>
        <div className="pl-order">
          <button className="btn" onClick={() => { this.props.showOrderPopup(product.id); }}>
            Заказать
          </button>
          <button className="btn second" onClick={() => { this.props.showCartPopup(product.id); }}>
            В корзину
          </button>
        </div>
      </div>
    )
  }
}

export {ProductsList, ProductItem};
