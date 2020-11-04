import cartActionTypes from "./cart.types";

export const addItemToCart = (item) => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
});
export const removeItemFromCart = (id) => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: id,
});
export const increaseItem = (id) => ({
    type: cartActionTypes.ENCREASE_CART_ITEM,
    payload: id,
});
export const descreaseItem = (id) => ({
    type: cartActionTypes.DESCREASE_CART_ITEM,
    payload: id,
});