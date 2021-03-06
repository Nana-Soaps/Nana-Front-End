import {
  TOGGLE_CART_OPEN,
  SET_CATEGORIES,
  SET_PRODUCTS,
  SET_BAG,
  SET_ORDER,
  SET_SHIPPING_OPTIONS,
} from "../actions";

const initialState = {
  cartOpen: false,
  categories: [],
  products: [],
  bag: [],
  order: {},
  shippingOptions: [],
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
    case SET_ORDER: {
      return {
        ...state,
        order: action.payload,
      };
    }
    case SET_SHIPPING_OPTIONS: {
      return {
        ...state,
        shippingOptions: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
