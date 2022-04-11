let initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            let itemIndex = state.cartItems.findIndex(item => item.product.id === action.payload.id)
            if (itemIndex !== -1) {
                let tempCart = [...state.cartItems];
                tempCart[itemIndex].amount++;
                return {
                    cartItems: tempCart,
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + action.payload.price
                }
            } else {
                return {
                    cartItems: [...state.cartItems, {
                        product: action.payload,
                        amount: 1,
                    }],
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + action.payload.price
                }
            }
        case 'REMOVE_ITEM':
            let index = state.cartItems.findIndex(item => item.product.id === action.payload.id)
            let tempCart = [...state.cartItems];
            if(tempCart[index].amount > 1){
                tempCart[index].amount--;
                return {
                    cartItems: tempCart,
                    totalItems: state.totalItems - 1,
                    totalPrice: state.totalPrice - action.payload.price
                }
            }
            else{
                tempCart.splice(index, 1)
                return{
                    cartItems: tempCart,
                    totalItems: state.totalItems - 1,
                    totalPrice: state.totalPrice - action.payload.price
                }
            }
            
        default:
            return state;
    }
}


export default cartReducer;