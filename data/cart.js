

export const cart =[ {
    productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
    quantity: 1
}, {
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
}];





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
                quantity: 1
              })

              }
    
}