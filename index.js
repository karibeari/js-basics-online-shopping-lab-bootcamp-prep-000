var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 20) + 1);
  var addItem = {itemName: item, itemPrice: price};
  cart.push(addItem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length > 0){
    var viewCart = [];
    for(var i = 0; i < cart.length-1; i++){
      viewCart.push(`${cart[addItem][i][itemName]} at $${cart[addItem][i][itemPrice]}`);
    }
    return `In your cart, you have ${viewCart.join(', ')}.`;
  }
  else{
    return `Your shopping cart is empty.`;
  }
}

function total() {


}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
