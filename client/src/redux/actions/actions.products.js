import { typesProducts } from "../types/types.products";

const fetchProductsStart = () => {
  return {
    type: typesProducts.FETCH_PRODUCTS_START,
  };
};
const fetchProductsSuccess = (data) => {
  return {
    type: typesProducts.FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};
const fetchProductsError = (data) => {
  return {
    type: typesProducts.FETCH_PRODUCTS_ERROR,
    payload: data,
  };
};

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsStart());
  fetch("http://127.0.0.1:5000/api/products")
    .then((res) => res.json())
    .then((data) => {
      dispatch(fetchProductsSuccess(data.products));
    })
    .catch((err) => dispatch(fetchProductsError(err)));
};
