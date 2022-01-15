import React, { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

CheckoutConfirmation.propTypes = {};

function CheckoutConfirmation(props) {
  useEffect(() => {
    axios
      .post("https://nanasoapsbackend.herokuapp.com/api/emails")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.dir(err);
      });
  });
  return (
    <div className="checkoutConfirmation py-5">
      <div className="container">
        <h3 className="mb-4">Congratulations!</h3>
        <h3>
          Your payment has been submitted, and your order has been confirmed.
        </h3>
      </div>
    </div>
  );
}

export default CheckoutConfirmation;
