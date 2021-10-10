import React from "react";
import PropTypes from "prop-types";

CheckoutConfirmation.propTypes = {};

function CheckoutConfirmation(props) {
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
