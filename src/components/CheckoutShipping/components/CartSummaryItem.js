import React from "react";

function CartSummaryItem(props) {
  return (
    <div className="cartSummaryItem border-bottom px-3 py-5">
      <div className="left">
        <div className="imgWrap">
          <img
            src={`https://nana-soaps-products.s3.us-east-2.amazonaws.com/1`}
            alt="soap"
          />
        </div>
        <div className="ps-2">
          <p className="m-0 text-start prodName">Lemongrass</p>
          <p className="m-0 text-start prodQuantity">Quantity: 1</p>
        </div>
      </div>
      <div className="right">
        <p className="m-0 price">$8.00</p>
      </div>
    </div>
  );
}

export default CartSummaryItem;
