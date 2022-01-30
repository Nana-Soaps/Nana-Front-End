import React from "react";

function CostSummary({ order }) {
  const tax = order.subtotal * order.tax_rate;
  return (
    <div className="costSummary mt-2 mb-2">
      <div className="breakdown border-bottom">
        <div className="subtotal d-flex justify-content-between">
          <p>Subtotal</p>
          <p className="price">${order.subtotal.toFixed(2)}</p>
        </div>
        <div className="shipping d-flex justify-content-between">
          <p>Shipping</p>
          <p className="price">${order.shipping.cost.toFixed(2)}</p>
        </div>
        <div className="taxes d-flex justify-content-between">
          <p>Taxes</p>
          <p className="price">${tax.toFixed(2)}</p>
        </div>
      </div>
      <div className="total d-flex justify-content-between border-bottom">
        <h3>Total</h3>
        <h3 className="price">
          ${(order.subtotal + order.shipping.cost + tax).toFixed(2)}
        </h3>
      </div>
    </div>
  );
}

export default CostSummary;
