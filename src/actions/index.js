export const TOGGLE_CART_OPEN = "TOGGLE_CART_OPEN";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_BAG = "SET_BAG";
export const SET_ORDER = "SET_ORDER";

export const toggleCartOpen = (value) => {
  return { type: TOGGLE_CART_OPEN, payload: value };
};

export const setCategories = (value) => {
  return { type: SET_CATEGORIES, payload: value };
};

export const setProducts = (value) => {
  return { type: SET_PRODUCTS, payload: value };
};

export const setBag = (value) => {
  return { type: SET_BAG, payload: value };
};

export const setOrder = (value) => {
  return { type: SET_ORDER, payload: value };
};
