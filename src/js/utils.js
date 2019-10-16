const getOrder = (id, data) => data.find(product => Number(product.id) === Number(id));


// eslint-disable-next-line import/prefer-default-export
export { getOrder };
