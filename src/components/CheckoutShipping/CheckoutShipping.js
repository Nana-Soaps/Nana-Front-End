import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ShippingCheckbox from "./components/ShippingCheckbox";
import CartSummary from "./components/CartSummary";
import Contact from "./components/Contact";
import "../../styles/CheckoutShipping.scss";
import chevronLeftClose from "../../assets/chevron-left-close.svg";
import { connect } from "react-redux";
import { setOrder } from "../../actions";

function CheckoutShipping(props) {
  const history = useHistory();
  const onChange = (e) => {
    const { name, value, checked } = e.target;
    const currentOrder = props.order;
    if (checked) {
      props.setOrder({ ...currentOrder, [name]: value });
    } else {
      props.setOrder({ ...currentOrder, [name]: null });
    }
  };
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
          <ShippingCheckbox onChange={onChange} />

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

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { setOrder })(CheckoutShipping);
