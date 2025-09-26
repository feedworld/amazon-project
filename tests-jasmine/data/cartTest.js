import {addToCart, cart,  loadfromStorage
} from '../../data/cart.js';

describe('test suite: Add To Cart', ()=>{

  it('add an existing product to the cart',()=>{
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([{
        productId: 'b86ddc8b-3501-4b17-9889-a3bad6fb585f',
    quantity: 1,
    deliveryOptionId: '1'

      }])
    })
    loadfromStorage();
     addToCart('b86ddc8b-3501-4b17-9889-a3bad6fb585f');
    expect(cart.length).toEqual(3);
    expect(cart[2].productId).toEqual('b86ddc8b-3501-4b17-9889-a3bad6fb585f');
    expect(cart[0].quantity).toEqual(1)

    




  });



  it('adds a new product to the cart', ()=>{
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([])
    });



    
     loadfromStorage();
     


    addToCart('b86ddc8b-3501-4b17-9889-a3bad6fb585f');
    expect(cart.length).toEqual(3);
    expect(cart[2].productId).toEqual('b86ddc8b-3501-4b17-9889-a3bad6fb585f');
    expect(cart[0].quantity).toEqual(1)

  });

});


