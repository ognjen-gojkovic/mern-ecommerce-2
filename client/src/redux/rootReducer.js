import { combineReducers } from "redux";
import { reducerProducts } from "./reducers/reducer.products";

export const rootReducer = combineReducers({
  reducerProducts,
});
