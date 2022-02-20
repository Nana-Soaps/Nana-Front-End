import ProductCard from "./ProductCard";
import React from "react";

function Products({ products }) {
  return (
    <div className="itemsWrap d-flex flex-wrap">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}

export default Products;
