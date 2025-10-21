

export let cart;


 loadfromStorage();

 
export function loadfromStorage(){
   cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
  cart = 
[ {
    productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
    quantity: 1,
    deliveryOptionId: '1'
}, {
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '2'
}];

}

}
function savetoStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))
}









export function addToCart(productId){
     let matchingItem;
              cart.forEach((cartItem)=>{
                if (productId === cartItem.productId){
                    matchingItem = cartItem
                }
              })

              if(matchingItem){
                matchingItem.quantity +=1;
              }else {
                 cart.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
              })

              }
              savetoStorage()
    
};

   export function  getCartLength(cart) {
        return cart.length;
    }






export function removeFromCart(productI) {
  const index = cart.findIndex(cartItem => cartItem.productId === productI);

  if (index !== -1) {
    cart.splice(index, 1); 
  }

  savetoStorage();
}


export function updateDeliveryOption(productId, deliveryOptionId){
       let matchingItem;
              cart.forEach((cartItem)=>{
                if (productId === cartItem.productId){
                    matchingItem = cartItem
                }
              })
              matchingItem.deliveryOptionId = deliveryOptionId;

savetoStorage(); }