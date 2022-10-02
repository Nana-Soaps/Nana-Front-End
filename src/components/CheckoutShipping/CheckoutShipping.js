import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShippingCheckbox from "./components/ShippingCheckbox";
import CartSummary from "./components/CartSummary";
import Contact from "./components/Contact";
import "../../styles/CheckoutShipping.scss";
import chevronLeftClose from "../../assets/chevron-left-close.svg";
import * as yup from "yup";
import { connect } from "react-redux";
import { setOrder, setShippingOptions } from "../../actions";

function CheckoutShipping(props) {
  const formSchema = yup.object().shape({
    first_name: yup.string().trim().required("Required"),
    last_name: yup.string().trim().required("Required"),
    email: yup.string().email("Must be valid email").required("Required"),
    shipping_city: yup.string().trim().required("Required"),
    shipping_state: yup.string().trim().min(1, "Required").required("Required"),
    shipping_address: yup.string().trim().required("Required"),
    shipping_zip: yup
      .string()
      .trim()
      .min(5, "Must be 5 characters")
      .max(5, "Must be 5 characters")
      .required("Required"),
    shipping_apartment: yup.string(),
    shipping_country: yup
      .string()
      .trim()
      .min(1, "Required")
      .required("Required"),
    notes: yup.string(),
    shipping_cost: yup.number(),
    shipping_id: yup.number(),
  });
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
  const push = useNavigate();
  const [mainError, setMainError] = useState(false);
  const checkIfValid = async (data) => {
    const valid = await formSchema.isValid(data);
    return valid;
  };
  const onChange = (e) => {
    setMainError(false);
    const { name, value, checked } = e.target;
    const currentOrder = props.order;
    const cost = e.target.getAttribute("data-cost");
    if (checked) {
      props.setOrder({ ...currentOrder, [name]: value, shipping_cost: cost });
    } else {
      props.setOrder({ ...currentOrder, [name]: null, shipping_cost: 0 });
    }
  };
  const handleBack = (e) => {
    e.preventDefault();
    push(-1);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    const valid = await checkIfValid(props.order);
    console.log(valid);
    if (valid) {
      push("/checkout/payment");
    } else {
      setMainError(true);
    }
  };
  return (
    <div className="checkoutShipping py-5">
      <div className="container">
        <form style={{ position: "relative" }}>
          <h5 className="text-start">Cart Summary</h5>
          <CartSummary />
          <Contact />
          {mainError && (
            <p
              style={{
                position: "absolute",
                color: "red",
                width: "100%",
                transform: "translateY(-20px)",
              }}
            >
              Please select a shipping option
            </p>
          )}

          <h5 className="text-start">Shipping Options</h5>
          {props.shippingOptions.map((option) => (
            <ShippingCheckbox onChange={onChange} option={option} />
          ))}

          <div className="btnWrap">
            <div
              className="d-flex justify-content-center align-items-center backBtn rounded p-2 me-2"
              onClick={handleBack}
            >
              <img src={chevronLeftClose} />
              <p className="m-0 ms-2">Back</p>
            </div>
            <button className="continueBtn btn ms-2" onClick={handlePayment}>
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
