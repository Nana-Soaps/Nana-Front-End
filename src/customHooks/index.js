import { useState, useEffect } from "react";

// {priceLow: 0, priceHight: 8}
export const useFilteredProducts = (initialState, priceLow, priceHigh) => {
  const [products, setProducts] = useState(initialState);
  const filtered = products.filter((product) => {
    if (product.price > priceLow && product.price <= priceHigh) {
      return product;
    }
  });
  setProducts(filtered);

  return [products, setProducts];
};
