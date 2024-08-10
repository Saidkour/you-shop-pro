import { combineReducers, createStore } from "redux";
import { ProductReducer } from "../ProductReducer/productReducer";
import { OrderReducer } from "../OrdersReducer/orderReducer";

const rootRedures = combineReducers({
    products : ProductReducer,
    orders : OrderReducer
});

export const store = createStore(rootRedures)

