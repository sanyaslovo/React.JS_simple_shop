import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist"

const persistConfig = {
    key: 'root',            // where in our reducer do  we want to store
    storage,

    whitelist: ["cart"]  // a list that specifies which state props we want to persist

}

const rootReducer = combineReducers({
    cart: cartReducer
});
export default persistReducer(persistConfig, rootReducer)