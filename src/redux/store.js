import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cartReducer";

const combinedReducer = combineReducers({
    product: cartReducer,
    // user: userReducer,
})

export const store = createStore(combinedReducer, composeWithDevTools())