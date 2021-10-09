export const TOGGLE_CART_OPEN = "TOGGLE_CART_OPEN";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTS = "SET_PRODUCTS";

export const toggleCartOpen = (value) => {
  return { type: TOGGLE_CART_OPEN, payload: value };
};

export const setCategories = (value) => {
  return { type: SET_CATEGORIES, payload: value };
};

export const setProducts = (value) => {
  return { type: SET_PRODUCTS, payload: value };
};
