import cartActionTypes from "./cart.types";

const INITIAL_STATE = {
    cartItems: [],
    isOpened: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };

        case "TOGGLE_CART":
            return {
                ...state,
                isOpened: !state.isOpened
            };

        default:
            return state;
    }
};

export default cartReducer;
