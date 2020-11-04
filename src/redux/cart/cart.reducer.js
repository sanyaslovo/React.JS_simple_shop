import cartActionTypes from "./cart.types";

const INITIAL_STATE = {
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_ITEM_TO_CART:
            const existingCartItem = state.cartItems.find(
                cartItem => cartItem.id === action.payload.id
            );
            if (existingCartItem){
                const cartItems = state.cartItems.map(cartItem =>
                      cartItem.id === action.payload.id
                          ? { ...cartItem, quantity: cartItem.quantity + 1 }
                          : cartItem
                )
                return {
                    ...state,
                    cartItems: [ ...cartItems ]
                }
            }
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case cartActionTypes.REMOVE_ITEM_FROM_CART:
            const newCartItems = state.cartItems.filter(product => product.id !== action.payload)
            return {
                ...state,
                cartItems: [...newCartItems]
            }
        case cartActionTypes.ENCREASE_CART_ITEM:
            const encreaseItem = state.cartItems.map(product => {
                if (product.id === action.payload) {
                    product.quantity += 1
                    return product
                }
                return product
            })
            return {
                ...state,
                cartItems: [...encreaseItem]
            }
        case cartActionTypes.DESCREASE_CART_ITEM:
            const descreaseItem = state.cartItems.map(product => {
                if (product.id === action.payload && product.quantity>0) {
                    product.quantity -= 1
                    return product
                }
                return product
            })
            return {
                ...state,
                cartItems: [...descreaseItem]
            }

        default:
            return state;
    }
};

export default cartReducer;
