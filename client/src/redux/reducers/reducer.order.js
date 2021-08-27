import { typesOrder } from "../types/types.order";

const INITIAL_STATE = {
  order: null,
};

export const reducerOrder = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typesOrder.CREATE_ORDER:
      return {
        ...state,
        order: action.payload,
      };

    case typesOrder.CLEAR_ORDER:
      return {
        ...state,
        order: null,
      };

    default:
      return state;
  }
};
