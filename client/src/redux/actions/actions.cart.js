import { typesCart } from "../types/types.cart";

export const addToCart = (product) => (dispatch, getState) => {
  console.log("getState", getState());
  let alreadyInCart = false;
  const cartItems = getState().reducerCart.cartItems.slice();
  cartItems.forEach((x) => {
    if (x._id === product._id) {
      alreadyInCart = true;
      x.count++;
    }
  });

  if (!alreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }

  dispatch({
    type: typesCart.ADD_TO_CART,
    payload: { cartItems },
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .reducerCart.cartItems.slice()
    .filter((x) => {
      return x._id !== product._id;
    });

  dispatch({
    type: typesCart.REMOVE_FROM_CART,
    payload: { cartItems },
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
