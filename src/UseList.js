import React, { useState } from 'react';

function UseList(API, showOrder, showBasket) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOrder = (product) => {
    setSelectedProduct(product);
    showOrder();
  }

  const handleBusket = (product) => {
    setSelectedProduct(product);
    showBasket();
  }

  const List = () => {
    return (
      <div className="list">
        { API.products.map(( product, index) =>
          <div key={index} className="list-item">
            <div className="list-item-left">
              <img src={product.img} alt={product.title} className="list-item-image"/>
              <div className="list-item-text">
                <div className="list-item-text-title">{product.title}</div>
                <div className="list-item-text-price">{product.price}&nbsp;руб.</div>
              </div>
            </div>
            <div className="list-item-right">
              <button className="list-item-order" onClick={() => handleOrder(product)}>Заказать</button>
              <button className="list-item-busket" onClick={() => handleBusket(product)}>В&nbsp;корзину</button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return [List, selectedProduct];
}


export default UseList;
