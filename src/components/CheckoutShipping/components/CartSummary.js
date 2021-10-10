import React from "react";
import CartSummaryItem from "./CartSummaryItem";

function CartSummary(props) {
  return (
    <div className="cartSummary mb-5">
      <CartSummaryItem />
      <CartSummaryItem />
      <CartSummaryItem />
      <div className="border-bottom lineItems">
        <div className="d-flex justify-content-between align-items-center lineItem px-3">
          <p className="m-0">Subtotal</p>
          <p className="m-0 price">$24.00</p>
        </div>
        <div className="d-flex justify-content-between align-items-center lineItem px-3">
          <p className="m-0">Shipping</p>
          <p className="m-0 price">$7.00</p>
        </div>
        <div className="d-flex justify-content-between align-items-center lineItem px-3">
          <p className="m-0">Taxes</p>
          <p className="m-0 price">$2.68</p>
        </div>
      </div>
      <div className="lineTotal d-flex justify-content-between align-items-center px-3 border-bottom">
        <p className="m-0 totalTitle">Total</p>
        <p className="m-0 totalPrice">$33.68</p>
      </div>
    </div>
  );
}

export default CartSummary;
