const productList = new Section(
  {
    renderer: (item) => {
      createProduct(item);
    },
  },
  ".products__list"
);

const createProduct = (item) => {
  const product = new Product(
    {
      data: item,
    },
    "#product-template"
  );
  const productElement = product.generateProduct();
  productList.addItem(productElement);
};

productList.renderItems(API.products);
