import React, { useState, useEffect } from "react";
import CartSummary from "../CheckoutShipping/components/CartSummary";
import Contact from "../CheckoutShipping/components/Contact";
import "../../styles/CheckoutPayment.scss";
import chevronLeftClose from "../../assets/chevron-left-close.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { CircularProgress } from "@mui/material";
import {
  CardElement,
  ElementsConsumer,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

function CheckoutPayment(props) {
  const [success, setSuccess] = useState(false); // if payment is successful we want to show something
  const [postBody, setPostBody] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const push = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const body = { ...props.order };
    props.bag.forEach((product) => {
      body[product.name] = product.quantity;
    });
    setPostBody(body);
  }, []);

  const getTotal = (products) => {
    let subtotal = 0;
    products.forEach((product) => {
      subtotal = subtotal + product.price * product.quantity;
    });

    const total =
      (subtotal * (props.order.tax_rate + 1) +
        Number(props.order.shipping_cost)) *
      100;
    return Number(total.toFixed(2));
  };

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

  const postOrderToDb = () => {
    const bag = props.bag.map((item) => {
      return {
        product_id: item.product_id,
        quantity: item.quantity,
        soldFor: item.price,
      };
    });
    console.log(bag);
    const order = props.order;
    delete order.shipping_cost;
    console.log(order);
    axios
      .post("https://nana-be.up.railway.app//api/orders", { order, bag })
      .then((res) => {
        setIsFetching(false);
        push("/checkout/confirmation", { orderId: res.data });
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  const handleSubmit = async (e) => {
    console.log(postBody);
    e.preventDefault();

    console.log(postBody);
    setIsFetching(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    console.log(paymentMethod);

    if (!error) {
      const { id } = paymentMethod;
      axios
        .post("https://nanasoapsbackend.herokuapp.com/api/orders/payment", {
          amount: getTotal(props.bag),
          id,
          ...postBody,
        })
        .then((res) => {
          postOrderToDb();
          // setIsFetching(false);
          // console.log(res);
          // history.push("/checkout/confirmation");
        })
        .catch((err) => {
          setIsFetching(false);
          console.dir(err);
        });
    } else {
      setIsFetching(false);
      console.log(error.message);
    }
  };
  const handleBack = () => {
    push(-1);
  };

  return (
    <div className="checkoutPayment py-5">
      <div className="container">
        <form>
          <div className="checkoutShipping">
            <h5 className="text-start">Cart Summary</h5>
            <CartSummary />
            <Contact />
          </div>
        </form>

        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form
              className="payment-form m-auto mt-5"
              onSubmit={handleSubmit}
              style={{ position: "relative" }}
            >
              {isFetching && (
                <CircularProgress
                  style={{
                    position: "absolute",
                    margin: "auto",
                    top: "-30px",
                    left: "0px",
                    right: "0px",
                  }}
                />
              )}
              <h5 className="text-start">Payment</h5>
              <div className="paymentForm border">
                <CardElement options={CARD_OPTIONS} />
              </div>
              <p style={{ color: "red" }} className="mt-2">
                Use: 4242 4242 4242 4242, 04/24, 242, 42424 for Test Payment
              </p>

              <div className="btnWrap mt-5">
                <div
                  className="d-flex justify-content-center align-items-center backBtn rounded px-2 me-2"
                  onClick={handleBack}
                >
                  <img src={chevronLeftClose} />
                  <p className="m-0 ms-2">Back</p>
                </div>
                <button className="continueBtn btn ms-2" type="submit">
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
