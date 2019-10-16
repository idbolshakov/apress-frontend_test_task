import 'nodelist-foreach-polyfill';
import 'element-closest-polyfill';
import 'array-find-polyfill';
import 'element-remove-polyfill';
import renderProducst from './render-products';
import showOrder from './show-order';
import showCart from './show-cart';

const domOnLoad = () => {
  showOrder();
  showCart();
};
renderProducst();

document.addEventListener('DOMContentLoaded', domOnLoad);
