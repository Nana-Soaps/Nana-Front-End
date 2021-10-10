import React, { useState } from "react";
import CartSummary from "../CheckoutShipping/components/CartSummary";
import Contact from "../CheckoutShipping/components/Contact";
import "../../styles/CheckoutPayment.scss";
import chevronLeftClose from "../../assets/chevron-left-close.svg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import {
  CardElement,
  ElementsConsumer,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

function CheckoutPayment(props) {
  const [success, setSuccess] = useState(false); // if payment is successful we want to show something
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
      },
      invalid: {
        iconColor: "red",
        color: "red",
      },
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    console.log(paymentMethod);

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios
          .post("http://localhost:5000/api/orders/payment", {
            amount: 1500, //charge amount in cents
            id,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });

        if (response.data.success) {
          console.log("successful payment");
          setSuccess(true);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(error.message);
    }
  };
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="checkoutPayment py-5">
      <div className="container">
        <form>
          <div className="checkoutShipping">
            <h5 className="text-start">Cart Summary</h5>
            <CartSummary />
            <Contact />
            {/* <h5 className="text-start">Billing Address</h5>
            <BillingAddressCheckbox />
            <BillingAddress /> */}
          </div>
        </form>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form className="payment-form m-auto mt-5" onSubmit={handleSubmit}>
              <h5 className="text-start">Payment</h5>
              <div className="paymentForm border">
                <CardElement options={CARD_OPTIONS} />
              </div>

              <div className="btnWrap mt-5">
                <div
                  className="d-flex justify-content-center align-items-center backBtn rounded px-2"
                  onClick={handleBack}
                >
                  <img src={chevronLeftClose} />
                  <p className="m-0 ms-2">Back</p>
                </div>
                <button className="continueBtn btn" type="submit">
                  Submit Payment
                </button>
              </div>
            </form>
          )}
        </ElementsConsumer>
        {success && <h1>Payment Successful!</h1>}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(CheckoutPayment);
