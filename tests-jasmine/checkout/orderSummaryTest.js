// import { renderOrderSummary } from '../../script/checkout/ordersummary.js';
// import { loadfromStorage } from '../../data/cart.js';


// describe('test suite: renderOrderSummary', () => {
//     it('displays the cart', () => {
//         document.querySelector('.js-test-container').innerHTML = `
        
//         <div class="js-order-summary"></div>

//         `
//       const  productId1 =  '83d4ca15-0f35-48f5-b7a3-1ea210004f2e';
//       const productId2 =   'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';

//         spyOn(localStorage, 'getItem').and.callFake(() => {
//             return JSON.stringify([{
//                 productId: productId1,
//                 quantity: 1,
//                 deliveryOptionId: '1'

//             }, {
//                 productId: productId2,
//                 quantity: 1,
//                 deliveryOptionId: '1'
//             }])
//         })
//         loadfromStorage();
//         renderOrderSummary()


//         expect(
//             document.querySelectorAll('.js-cart-item-container').length
//         ).toEqual(3);

//         expect(document.querySelector(`.js-roduct-quantity-${productId1}`).innerText).toContain('Quantity: 1');


//          expect(document.querySelector(`.js-roduct-quantity-${productId2}`).innerText).toContain('Quantity: 2');

//     });

//     it('removes a product', ()=>{
//         document.querySelector('.js-test-container').innerHTML = `
        
//         <div class="js-order-summary"></div>
//         <div class="js-summary-payment"></div>

//         `
//       const  productId1 =  '83d4ca15-0f35-48f5-b7a3-1ea210004f2e';
//       const productId2 =   'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';

//         spyOn(localStorage, 'getItem').and.callFake(() => {
//             return JSON.stringify([{
//                 productId: productId1,
//                 quantity: 1,
//                 deliveryOptionId: '1'

//             }, {
//                 productId: productId2,
//                 quantity: 1,
//                 deliveryOptionId: '1'
//             }])
//         })
//         loadfromStorage();
//         renderOrderSummary();

//         document.querySelector(`.js-delete-ink-${productId1}`).click()
//     })


// });

