import React, { useState, useEffect } from "react";
import CartSummaryItem from "./CartSummaryItem";
import { connect } from "react-redux";

function CartSummary(props) {
  const [subtotal, setSubtotal] = useState(0);

  const getSubtotal = (products) => {
    let subtotal = 0;
    products.forEach((product) => {
      subtotal = subtotal + product.price * product.quantity;
    });
    return subtotal;
  };

  useEffect(() => {
    const newSubtotal = getSubtotal(props.bag);
    setSubtotal(newSubtotal);
  }, []);

  return (
    <div className="cartSummary mb-2">
      {props.bag.map((product) => (
        <CartSummaryItem product={product} />
      ))}
      <div className="border-bottom lineItems">
        <div className="d-flex justify-content-between align-items-center lineItem px-3">
          <p className="m-0">Subtotal</p>
          <p className="m-0 price">${subtotal.toFixed(2)}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center lineItem px-3">
          <p className="m-0">Shipping</p>
          <p className="m-0 price">
            {props.order.shipping_id
              ? `$${Number(props.order.shipping_cost).toFixed(2)}`
              : "N/A"}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center lineItem px-3">
          <p className="m-0">Taxes</p>
          <p className="m-0 price">${subtotal * 0.07}</p>
        </div>
      </div>
      <div className="lineTotal d-flex justify-content-between align-items-center px-3 border-bottom">
        <p className="m-0 totalTitle">Total</p>
        <p className="m-0 totalPrice">
          ${subtotal * 1.07 + Number(props.order.shipping_cost)}
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(CartSummary);
