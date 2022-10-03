import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import OrderDetails from "./OrderDetails.js";
import "../../styles/CheckoutConfirmation.scss";

CheckoutConfirmation.propTypes = {};

function CheckoutConfirmation(props) {
  const [order, setOrder] = useState(null);
  const location = useLocation();
  const orderId = location.state.orderId;

  // get the order info based on order ID
  useEffect(() => {
    axios
      .get(`https://nanasoapsbackend.herokuapp.com/api/orders/${orderId}`)
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);
  return (
    <div className="checkoutConfirmation py-5">
      <div className="container">
        <div className="checkout-head">
          <h3 className="mb-4">Congratulations!</h3>
          <h3>
            Your payment has been submitted, and your order has been confirmed.
          </h3>
        </div>
        {order && <OrderDetails order={order} />}
      </div>
    </div>
  );
}

export default CheckoutConfirmation;
