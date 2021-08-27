import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "../redux/rootReducer";

const middlewares = [thunk];

export const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
