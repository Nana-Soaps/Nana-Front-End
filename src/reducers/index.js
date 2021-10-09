import { TOGGLE_CART_OPEN, SET_CATEGORIES, SET_PRODUCTS } from "../actions";

const initialState = {
  cartOpen: false,
  categories: [],
  products: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_OPEN: {
      return {
        ...state,
        cartOpen: action.payload,
      };
    }
    case SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
