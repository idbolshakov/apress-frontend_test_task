const productList = new Section(
  {
    renderer: (item) => {
      createProduct(item);
    },
  },
  ".products__list"
);

const popupWithCart = new Popup(".popup_type_cart");
const popupWithOrder = new Popup(".popup_type_order");
const createProduct = (item) => {
  const product = new Product(
    {
      data: item,
      handleClickCartBtn: (item) => {
        popupWithCart.open(item);
      },
      handleClickOrderBtn: (item) => {
        popupWithOrder.open(item);
      },
    },
    "#product-template"
  );
  const productElement = product.generateProduct();
  productList.addItem(productElement);
};

productList.renderItems(API.products);
popupWithCart.setEventListeners();
popupWithOrder.setEventListeners();
