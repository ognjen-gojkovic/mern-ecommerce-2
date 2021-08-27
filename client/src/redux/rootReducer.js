import { combineReducers } from "redux";
import { reducerProducts } from "./reducers/reducer.products";
import { reducerCart } from "./reducers/reducer.cart";

export const rootReducer = combineReducers({
  reducerProducts,
  reducerCart,
});
