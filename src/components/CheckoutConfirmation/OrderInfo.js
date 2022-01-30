import React from "react";

function OrderInfo({ order }) {
  return (
    <div className="orderInfo">
      <div className="block">
        <div className="item border-bottom">
          <p className="title">Name:</p>
          <p>{`${order.first_name} ${order.last_name}`}</p>
        </div>
        <div className="item border-bottom">
          <p className="title">Shipping:</p>
          <p>{`${order.shipping.shipping_name} (${order.shipping.shipping_description}) `}</p>
        </div>
      </div>
      <div className="block">
        <div className="item border-bottom">
          <p className="title">Tax Rate:</p>
          <p>{`${(order.tax_rate * 100).toFixed(2)}%`}</p>
        </div>
      </div>
      <div className="block">
        <div className="item border-bottom">
          <p className="title">Address:</p>
          <p>{order.shipping_address}</p>
        </div>
        <div className="item border-bottom">
          <p className="title">Apartment:</p>
          <p>{order.shipping_apartment}</p>
        </div>
        <div className="item border-bottom">
          <p className="title">City:</p>
          <p>{order.shipping_city}</p>
        </div>
        <div className="item border-bottom">
          <p className="title">State:</p>
          <p>{order.shipping_state}</p>
        </div>
        <div className="item border-bottom">
          <p className="title">Zip:</p>
          <p>{order.shipping_zip}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
