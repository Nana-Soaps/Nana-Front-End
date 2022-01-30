import React from "react";
import OrderItem from "./OrderItem";
import CostSummary from "./CostSummary.js";
import ContactSummary from "./ContactSummary.js";
import OrderInfo from "./OrderInfo.js";

function OrderDetails({ order }) {
  return (
    <div className="orderDetails">
      <div>
        {order.products.map((product) => (
          <OrderItem product={product} />
        ))}
        <CostSummary order={order} />
        <ContactSummary order={order} />
      </div>
      <div>
        <OrderInfo order={order} />
      </div>
    </div>
  );
}

export default OrderDetails;
