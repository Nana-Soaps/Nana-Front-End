import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/CheckoutInformation.scss";
import chevronLeftClose from "../../assets/chevron-left-close.svg";

function CheckoutInformation(props) {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  const handleShipping = () => {
    history.push("/checkout/shipping");
  };
  return (
    <div className="checkoutInformation  py-5">
      <div className="container">
        <form>
          <div className="contact">
            <h5>Contact Information</h5>
            <input placeholder="Email" className="fullInput" />
          </div>
          <div className="shippingAddress">
            <h5>Shipping Address</h5>
            <div className="doubleInput">
              <input placeholder="First Name" className="halfInput" />
              <input placeholder="First Name" className="halfInput" />
            </div>
            <input placeholder="Address" className="fullInput" />
            <input
              placeholder="Apartment, suite, etc. (optional)"
              className="fullInput"
            />
            <input placeholder="City" className="fullInput" />
            <div className="tripleInput">
              <select>
                <option>Country/Region</option>
                <option>United States</option>
              </select>
              <select>
                <option>State</option>
                <option>New Jersey</option>
                <option>Pennsylvania</option>
              </select>
              <input placeholder="ZIP Code" />
            </div>
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

export default CheckoutInformation;
