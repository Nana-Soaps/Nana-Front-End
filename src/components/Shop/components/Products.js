import ProductCard from "./ProductCard";
import React from "react";

function Products(props) {
  const { category } = props;
  return (
    <div className="itemsWrap d-flex flex-wrap">
      {category.products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}

export default Products;
