import { typesProducts } from "../types/types.products";

const INITIAL_STATE = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
};

export const reducerProducts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typesProducts.FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
        products: [],
        filteredProducts: [],

        error: null,
      };

    case typesProducts.FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        loading: false,
      };
    }

    case typesProducts.FETCH_PRODUCTS_ERROR: {
      return {
        ...state,
        products: [],
        filteredProducts: [],
        loading: false,
        error: action.payload,
      };
    }

    case typesProducts.FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        size: action.payload.size,
        filteredProducts: action.payload.items,
      };

    case typesProducts.ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredProducts: action.payload.items,
      };

    default:
      return state;
  }
};
