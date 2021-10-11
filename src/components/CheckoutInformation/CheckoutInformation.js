import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/CheckoutInformation.scss";
import chevronLeftClose from "../../assets/chevron-left-close.svg";
import { connect } from "react-redux";
import { setOrder } from "../../actions";
import * as yup from "yup";

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
    shipping_cost: 0,
    shipping_id: null,
  };
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
    shipping_id: yup.number().nullable(true),
  });
  const [formData, setFormData] = useState(initialState);
  const [isDisbaled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [mainError, setMainError] = useState(false);
  const history = useHistory();

  const checkIfValid = async () => {
    const valid = await formSchema.isValid(formData);
    return valid;
    // formSchema.isValid(formData).then((valid) => {
    //   console.log(valid);
    //   return valid;
    // setIsDisabled(!valid);
    // });
  };

  const setFormErrors = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
  };

  const onChange = (e) => {
    setMainError(false);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    checkIfValid();
    setFormErrors(name, value);
    console.log(formData);
    console.log(errors);
  };
  const handleBack = () => {
    history.goBack();
  };

  const handleShipping = async (e) => {
    e.preventDefault();
    const valid = await checkIfValid();
    if (valid) {
      props.setOrder(formData);
      history.push("/checkout/shipping");
    } else {
      setMainError(true);
    }
  };
  return (
    <div className="checkoutInformation  py-5">
      <div className="container">
        <form>
          <div className="contact">
            <h5>Contact Information</h5>
            <div className="fullDiv">
              <input
                placeholder="Email"
                className={`${
                  errors.email ? "fullInput redBorder" : "fullInput"
                }`}
                name="email"
                onChange={onChange}
              />
              <p
                className="m-0"
                style={{
                  position: "absolute",
                  color: "red",
                  fontSize: "12px",
                  bottom: "0px",
                  height: "19px",
                }}
              >
                {errors.email}
              </p>
            </div>
          </div>
          <div className="shippingAddress">
            <h5>Shipping Address</h5>
            <div className="doubleInput">
              <div className="halfDiv">
                <input
                  placeholder="First Name"
                  className={`${
                    errors.first_name ? "fullInput redBorder" : "fullInput"
                  }`}
                  name="first_name"
                  onChange={onChange}
                />
                <p
                  className="m-0"
                  style={{
                    position: "absolute",
                    color: "red",
                    fontSize: "12px",
                    bottom: "0px",
                    height: "19px",
                  }}
                >
                  {errors.first_name}
                </p>
              </div>
              <div className="halfDiv">
                <input
                  placeholder="Last Name"
                  className={`${
                    errors.last_name ? "fullInput redBorder" : "fullInput"
                  }`}
                  name="last_name"
                  onChange={onChange}
                />
                <p
                  className="m-0"
                  style={{
                    position: "absolute",
                    color: "red",
                    fontSize: "12px",
                    bottom: "0px",
                    height: "19px",
                  }}
                >
                  {errors.last_name}
                </p>
              </div>
            </div>
            <div className="fullDiv">
              <input
                placeholder="Address"
                className={`${
                  errors.shipping_address ? "fullInput redBorder" : "fullInput"
                }`}
                name="shipping_address"
                onChange={onChange}
              />
              <p
                className="m-0"
                style={{
                  position: "absolute",
                  color: "red",
                  fontSize: "12px",
                  bottom: "0px",
                  height: "19px",
                }}
              >
                {errors.shipping_address}
              </p>
            </div>
            <input
              placeholder="Apartment, suite, etc. (optional)"
              className="fullInput"
              name="shipping_apartment"
              onChange={onChange}
            />
            <div className="fullDiv">
              <input
                placeholder="City"
                className={`${
                  errors.shipping_city ? "fullInput redBorder" : "fullInput"
                }`}
                name="shipping_city"
                onChange={onChange}
              />
              <p
                className="m-0"
                style={{
                  position: "absolute",
                  color: "red",
                  fontSize: "12px",
                  bottom: "0px",
                  height: "19px",
                }}
              >
                {errors.shipping_city}
              </p>
            </div>
            <div className="tripleInput">
              <div className="selectWrap">
                <select
                  name="shipping_country"
                  onChange={onChange}
                  className={`${errors.shipping_country ? "redBorder" : ""}`}
                >
                  <option value="">Country/Region</option>
                  <option value="United States">United States</option>
                </select>
                <p
                  className="m-0"
                  style={{
                    position: "absolute",
                    color: "red",
                    fontSize: "12px",
                    bottom: "0px",
                    height: "19px",
                  }}
                >
                  {errors.shipping_country}
                </p>
              </div>
              <div className="selectWrap">
                <select
                  name="shipping_state"
                  onChange={onChange}
                  className={`${errors.shipping_state ? "redBorder" : ""}`}
                >
                  <option value="">State</option>
                  <option value="NJ">New Jersey</option>
                  <option value="PA">Pennsylvania</option>
                </select>
                <p
                  className="m-0"
                  style={{
                    position: "absolute",
                    color: "red",
                    fontSize: "12px",
                    bottom: "0px",
                    height: "19px",
                  }}
                >
                  {errors.shipping_state}
                </p>
              </div>
              <div className="selectWrap">
                <input
                  placeholder="ZIP Code"
                  name="shipping_zip"
                  onChange={onChange}
                  className={`${errors.shipping_zip ? "redBorder" : ""}`}
                />
                <p
                  className="m-0"
                  style={{
                    position: "absolute",
                    color: "red",
                    fontSize: "12px",
                    bottom: "0px",
                    height: "19px",
                  }}
                >
                  {errors.shipping_zip}
                </p>
              </div>
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
              <button
                className="continueBtn btn"
                onClick={handleShipping}
                // disabled={isDisbaled}
              >
                Continue to Shipping
              </button>
            </div>
          </div>
        </form>
        {mainError && (
          <p className="m-auto pt-4" style={{ color: "red" }}>
            Please fill out all fields correctly
          </p>
        )}
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
