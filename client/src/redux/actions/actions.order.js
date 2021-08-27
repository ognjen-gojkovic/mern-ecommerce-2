import { typesOrder } from "../types/types.order";
import { typesCart } from "../types/types.cart";

export const createOrderFetch = (order) => (dispatch) => {
  fetch("http://127.0.0.1:5000/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: typesOrder.CREATE_ORDER,
        payload: data.order,
      });
      localStorage.clear("cartItems");
      dispatch({
        type: typesCart.CLEAR_CART,
      });
    });
};

export const clearOrder = () => (dispatch) => {
  dispatch({ type: typesOrder.CLEAR_ORDER });
};
