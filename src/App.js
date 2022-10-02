import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Header,
  MainDash,
  Shop,
  ItemPage,
  Cart,
  Login,
  Signup,
  CheckoutInformation,
  CheckoutShipping,
  CheckoutPayment,
  CheckoutConfirmation,
  OurStory,
  ContactUs,
  FAQ,
} from "./components";
import "./styles/Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { setCategories, setProducts } from "./actions";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./lib/stripe";

function App(props) {
  const [stripe, setStripe] = useState();
  if (!stripe) {
    stripePromise.then((res) => {
      setStripe(res);
    });
  }
  useEffect(() => {
    axios
      .get("https://nanasoapsbackend.herokuapp.com/api/products/categories")
      .then((res) => {
        console.log(res);
        props.setCategories(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  useEffect(() => {
    if (props.categories[0]) {
      const uniqueNames = [];
      const products = props.categories.flatMap((category) => {
        return category.products;
      });
      products.forEach((prod, i) => {
        if (!uniqueNames.includes(prod.name)) {
          uniqueNames.push(prod.name);
        } else {
          products.splice(i, 1);
        }
      });
      props.setProducts(products);
    }
  }, [props.categories]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<MainDash />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/shop/item" element={<ItemPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          exact
          path="/checkout/information"
          element={<CheckoutInformation />}
        />
        <Route exact path="/checkout/shipping" element={<CheckoutShipping />} />
        <Route
          exact
          path="/checkout/payment"
          element={
            <Elements stripe={stripePromise}>
              <CheckoutPayment />
            </Elements>
          }
        ></Route>
        <Route
          exact
          path="/checkout/confirmation"
          element={<CheckoutConfirmation />}
        />
        <Route exact path="/our-story" element={<OurStory />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/faq" element={<FAQ />} />
      </Routes>
      {props.cartOpen && <Cart />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { setCategories, setProducts })(App);
