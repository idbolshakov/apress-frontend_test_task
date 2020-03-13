// Get the Order modal
var orderModal = document.getElementById("orderModal");
// Get the Cart modal
var cartModal = document.getElementById("cartModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function MakeOrder(id) {
  orderModal.style.display = "block";
  
  var orderImg = document.getElementById('order-img');
  var orderTitle = document.getElementById('order-title');
  var orderPrice = document.getElementById('order-price');
  
  let obj = API.products.find(obj => obj.id == id);
  
  orderTitle.innerHTML = obj.title;
  orderPrice.innerHTML = obj.price.toLocaleString();
  orderImg.src = obj.img;
}

function AddToCart(id) {
  cartModal.style.display = "block";
  
  var cartImg = document.getElementById('cart-img');
  var cartTitle = document.getElementById('cart-title');
  var cartPrice = document.getElementById('cart-price');
  
  let obj = API.products.find(obj => obj.id == id);
  
  cartTitle.innerHTML = obj.title;
  cartPrice.innerHTML = obj.price.toLocaleString();
  cartImg.src = obj.img;
}

// When the user clicks on (x), close the modal
function closeOrderModal() {
  orderModal.style.display = "none";
}
function closeCartModal() {
  cartModal.style.display = "none";
}