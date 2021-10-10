import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/CheckoutInformation.scss";
import chevronLeftClose from "../../assets/chevron-left-close.svg";
import { connect } from "react-redux";
import { setOrder } from "../../actions";

function CheckoutInformation(props) {
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    shipping_city: "",
    shipping_state: "",
    shipping_address: "",
    shipping_zip: "",
    shipping_apartment: "",
    shipping_country: "",
    notes: "",
  };
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleBack = () => {
    history.goBack();
  };

  const handleShipping = (e) => {
    e.preventDefault();
    props.setOrder(formData);
    history.push("/checkout/shipping");
  };
  return (
    <div className="checkoutInformation  py-5">
      <div className="container">
        <form>
          <div className="contact">
            <h5>Contact Information</h5>
            <input
              placeholder="Email"
              className="fullInput"
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="shippingAddress">
            <h5>Shipping Address</h5>
            <div className="doubleInput">
              <input
                placeholder="First Name"
                className="halfInput"
                name="first_name"
                onChange={onChange}
              />
              <input
                placeholder="Last Name"
                className="halfInput"
                name="last_name"
                onChange={onChange}
              />
            </div>
            <input
              placeholder="Address"
              className="fullInput"
              name="shipping_address"
              onChange={onChange}
            />
            <input
              placeholder="Apartment, suite, etc. (optional)"
              className="fullInput"
              name="shipping_apartment"
              onChange={onChange}
            />
            <input
              placeholder="City"
              className="fullInput"
              name="shipping_city"
              onChange={onChange}
            />
            <div className="tripleInput">
              <select name="shipping_country" onChange={onChange}>
                <option value={null}>Country/Region</option>
                <option value="United States">United States</option>
              </select>
              <select name="shipping_state" onChange={onChange}>
                <option value={null}>State</option>
                <option value="NJ">New Jersey</option>
                <option value="PA">Pennsylvania</option>
              </select>
              <input
                placeholder="ZIP Code"
                name="shipping_zip"
                onChange={onChange}
              />
            </div>
            <h5 className="text-start">Special Notes:</h5>
            <input
              className="fullInput"
              placeholder="Notes (optional)"
              name="notes"
              onChange={onChange}
            />
            <div className="btnWrap">
              <div
                className="d-flex justify-content-center align-items-center backBtn rounded p-2"
                onClick={handleBack}
              >
                <img src={chevronLeftClose} />
                <p className="m-0 ms-2">Back</p>
              </div>
              <button className="continueBtn btn" onClick={handleShipping}>
                Continue to Shipping
              </button>
            </div>
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

export default connect(mapStateToProps, { setOrder })(CheckoutInformation);
