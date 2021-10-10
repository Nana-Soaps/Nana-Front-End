import React from "react";
import CartSummary from "../CheckoutShipping/components/CartSummary";
import Contact from "../CheckoutShipping/components/Contact";
import BillingAddressCheckbox from "./components/BillingAddressCheckbox";
import BillingAddress from "./components/BillingAddress";
import "../../styles/CheckoutPayment.scss";
import chevronLeftClose from "../../assets/chevron-left-close.svg";
import { Link } from "react-router-dom";
import {
  CardElement,
  ElementsConsumer,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

function CheckoutPayment(props) {
  const handleSubmit = () => {
    console.log("submit");
  };
  const handleBack = () => {
    console.log("back");
  };

  const handleShipping = () => {
    console.log("handle");
  };
  return (
    <div className="checkoutPayment py-5">
      <div className="container">
        <form>
          <div className="checkoutShipping">
            <h5 className="text-start">Cart Summary</h5>
            <CartSummary />
            <Contact />
            <h5 className="text-start">Billing Address</h5>
            <BillingAddressCheckbox />
            <BillingAddress />
          </div>
        </form>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form className="payment-form m-auto mt-5" onSubmit={handleSubmit}>
              <h5 className="text-start">Payment</h5>
              <div className="paymentForm">
                <CardElement />
              </div>

              <div className="btnWrap mt-5">
                <div
                  className="d-flex justify-content-center align-items-center backBtn rounded"
                  onClick={handleBack}
                >
                  <img src={chevronLeftClose} />
                  <p className="m-0 ms-2">Back</p>
                </div>
                <button className="continueBtn btn" onClick={handleShipping}>
                  Submit Payment
                </button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </div>
    </div>
  );
}

export default CheckoutPayment;
