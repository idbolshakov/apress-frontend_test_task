export function splitPrice(price) {
  return price
    .toString()
    .replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}

export function getProduct(className, data, target) {
  const id = target.closest(`.${className}`)?.dataset.id;
  const [product] = data.filter(product => product.id === Number(id));
  return product;
}
