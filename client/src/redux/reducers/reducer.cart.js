import { typesCart } from "../types/types.cart";

const INITIAL_STORE = {
  cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
};

export const reducerCart = (state = INITIAL_STORE, action) => {
  switch (action.type) {
    case typesCart.ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
      };

    case typesCart.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
      };

    default:
      return state;
  }
};
