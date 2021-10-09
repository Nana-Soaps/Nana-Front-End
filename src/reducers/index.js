import {
  TOGGLE_CART_OPEN,
  SET_CATEGORIES,
  SET_PRODUCTS,
  SET_BAG,
} from "../actions";

const initialState = {
  cartOpen: false,
  categories: [],
  products: [],
  bag: [],
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
    case SET_BAG: {
      return {
        ...state,
        bag: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
