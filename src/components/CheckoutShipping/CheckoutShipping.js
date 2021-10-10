import React from "react";
import { useHistory } from "react-router-dom";
import ShippingCheckbox from "./components/ShippingCheckbox";
import CartSummary from "./components/CartSummary";
import Contact from "./components/Contact";
import "../../styles/CheckoutShipping.scss";
import chevronLeftClose from "../../assets/chevron-left-close.svg";

function CheckoutShipping(props) {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
    // console.log("back");
  };

  const handlePayment = () => {
    history.push("/checkout/payment");
  };
  return (
    <div className="checkoutShipping py-5">
      <div className="container">
        <form>
          <h5 className="text-start">Cart Summary</h5>
          <CartSummary />
          <Contact />
          <h5 className="text-start">Shipping Options</h5>
          <ShippingCheckbox />
          <ShippingCheckbox />
          <div className="btnWrap">
            <div
              className="d-flex justify-content-center align-items-center backBtn rounded p-2"
              onClick={handleBack}
            >
              <img src={chevronLeftClose} />
              <p className="m-0 ms-2">Back</p>
            </div>
            <button className="continueBtn btn" onClick={handlePayment}>
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutShipping;
