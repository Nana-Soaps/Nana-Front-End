import { TOGGLE_CART_OPEN, SET_CATEGORIES } from "../actions";

const initialState = {
  cartOpen: false,
  categories: [],
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
    default:
      return state;
  }
};
export default reducer;
