import React, { useState } from 'react';
import './App.sass';

import API from './api/products';

import UseBasket from './UseBasket';
import UseOrder from './UseOrder';
import UseList from './UseList';

function App() {
  const [isOrder, setIsOrder] = useState(false);
  const [isBasket, setIsBasket] = useState(false);

  const showOrder = () => {
    setIsOrder(true);
  }

  const hideOrder = () => {
    setIsOrder(false);
  }

  const showBasket = () => {
    setIsBasket(true);
  }

  const hideBasket = () => {
    setIsBasket(false);
  }

  const appClickHandler = (e) => {
    if (!refBasket.current || refBasket.current.contains(e.target)) {
      return;
    }
    hideBasket();
  }

  const [List, selectedProduct] = UseList(API, showOrder, showBasket);
  const [Basket, refBasket] = UseBasket(selectedProduct, hideBasket);
  const [Order] = UseOrder(selectedProduct, hideOrder);

  return (
    <div className="app" onClick={appClickHandler}>
      { isBasket ? <Basket/> : null }
      { isOrder ? <Order/> : null }
      <List/>
    </div>
  );
}

export default App;
