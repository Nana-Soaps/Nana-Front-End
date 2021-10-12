import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ShippingCheckbox from "./components/ShippingCheckbox";
import CartSummary from "./components/CartSummary";
import Contact from "./components/Contact";
import "../../styles/CheckoutShipping.scss";
import chevronLeftClose from "../../assets/chevron-left-close.svg";
import { connect } from "react-redux";
import { setOrder, setShippingOptions } from "../../actions";

function CheckoutShipping(props) {
  useEffect(() => {
    axios
      .get("https://nanasoapsbackend.herokuapp.com/api/orders/shipping-options")
      .then((res) => {
        console.log(res);
        props.setShippingOptions(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);
  const history = useHistory();
  const onChange = (e) => {
    const { name, value, checked } = e.target;
    const currentOrder = props.order;
    const cost = e.target.getAttribute("data-cost");
    if (checked) {
      props.setOrder({ ...currentOrder, [name]: value, shipping_cost: cost });
    } else {
      props.setOrder({ ...currentOrder, [name]: null, shipping_cost: 0 });
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
          {props.shippingOptions.map((option) => (
            <ShippingCheckbox onChange={onChange} option={option} />
          ))}

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

export default connect(mapStateToProps, { setOrder, setShippingOptions })(
  CheckoutShipping
);
