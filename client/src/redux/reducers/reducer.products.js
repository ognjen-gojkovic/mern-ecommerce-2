import { typesProducts } from "../types/types.products";

const INITIAL_STATE = {
  products: [],
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
        error: null,
      };

    case typesProducts.FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    }

    case typesProducts.FETCH_PRODUCTS_ERROR: {
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
