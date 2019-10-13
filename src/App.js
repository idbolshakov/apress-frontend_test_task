import React, { Component } from 'react';
import './App.scss';

import API from './api/products';
import OrderPopup from './OrderPopup';
import CartPopup from './CartPopup';
import {ProductsList, ProductsItem} from './Products';


class App extends Component {

  constructor() {
    super();
    this.state = {
      showOrderPopup: false,
      showCartPopup: false,
      orderProductId: 1,
      cartorderProductId: 1
    };
  }

  toggleOrderPopup(productId) {
    const issetProduct = Number.isInteger(productId);
    this.setState({
      orderProductId: issetProduct ? --productId : 0,
      showOrderPopup: issetProduct
    });
  }

  toggleCartPopup(productId) {
    const issetProduct = Number.isInteger(productId);
    this.setState({
      cartorderProductId: issetProduct ? --productId : 0,
      showCartPopup: issetProduct
    });
  }


  render() {
    return (
      <div className="App">
        <ProductsList
          products={API.products}
          showOrderPopup={this.toggleOrderPopup.bind(this)}
          showCartPopup={this.toggleCartPopup.bind(this)}
        />
        {this.state.showOrderPopup ? 
          <OrderPopup
            product={API.products[this.state.orderProductId]}
            closePopup={this.toggleOrderPopup.bind(this)}
          />
          : null
        }
        {this.state.showCartPopup ? 
          <CartPopup
            product={API.products[this.state.cartorderProductId]}
            closePopup={this.toggleCartPopup.bind(this)}
          />
          : null
        }
      </div>
    )
  };
}

export default App;
