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

/**
 * FETCH PRODUCTS
 */
export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsStart());
  fetch("http://127.0.0.1:5000/api/products")
    .then((res) => res.json())
    .then((data) => {
      dispatch(fetchProductsSuccess(data.products));
    })
    .catch((err) => dispatch(fetchProductsError(err)));
};

/**
 * FILTERING PRODUCTS
 */
export const filterProductsFetch = (products, size) => (dispatch) => {
  dispatch({
    type: typesProducts.FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size,
      items:
        size === ""
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  });
};

/**
 * SORTING PRODUCTS
 */
export const sortProductsFetch = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();

  if (sort === "latest") return sortedProducts;
  else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }

  dispatch({
    type: typesProducts.ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort,
      items: sortedProducts,
    },
  });
};
