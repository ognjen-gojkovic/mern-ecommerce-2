import { combineReducers } from "redux";
import { reducerProducts } from "./reducers/reducer.products";
import { reducerCart } from "./reducers/reducer.cart";
import { reducerOrder } from "./reducers/reducer.order";

export const rootReducer = combineReducers({
  reducerProducts,
  reducerCart,
  reducerOrder,
});
