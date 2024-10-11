import { createStore, combineReducers } from "redux";
import cardRedcure from "./reducers/cardReducer";
import productReducer from "./reducers/productReducer";
import orderReducers from "./reducers/orderReducer";
import userReducer from "./reducers/userReducer";

//combine all reducers
const rootReducer = combineReducers({
  card: cardRedcure,
  products: productReducer,
  orders: orderReducers,
  user: userReducer,
});
//create store
const store = createStore(rootReducer);
export default store;
