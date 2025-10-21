function Cart (){
const cart = {
    cartItems: undefined,

    loadfromStorage(localStorageKey) {
        this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
        if (!this.cartItems) {
            this.cartItems = [
                {
                    productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
                    quantity: 1,
                    deliveryOptionId: '1'
                },
                {
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 2,
                    deliveryOptionId: '2'
                }
            ];
        }
    },

    savetoStorage() {
        localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },


    addToCart(productId) {
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
            });
        }
        this.savetoStorage();
    },

    removeFromCart(productId) {
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;
        this.savetoStorage();
    },

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });
        if (matchingItem) {
            matchingItem.deliveryOptionId = deliveryOptionId;
        }
        this.savetoStorage();
    }
};

return cart;

};


const cart = Cart('cart-oop');

const BusinessCart = Cart('businessCart')

cart.loadfromStorage();

BusinessCart.loadfromStorage()




console.log(cart);
console.log(BusinessCart)