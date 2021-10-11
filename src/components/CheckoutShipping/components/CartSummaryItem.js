import React from "react";

function CartSummaryItem(props) {
  const { product } = props;
  return (
    <div className="cartSummaryItem border-bottom px-3 py-5">
      <div className="left">
        <div className="imgWrap">
          <img
            src={`https://nana-soaps-products.s3.us-east-2.amazonaws.com/${product.product_id}`}
            alt="soap"
          />
        </div>
        <div className="ps-2">
          <p className="m-0 text-start prodName">{product.name}</p>
          <p className="m-0 text-start prodQuantity">
            Quantity: {product.quantity}
          </p>
        </div>
      </div>
      <div className="right">
        <p className="m-0 price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartSummaryItem;
