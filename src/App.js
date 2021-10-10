import React, { useEffect } from "react";
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
} from "./components";
import "./styles/Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setCategories, setProducts } from "./actions";

function App(props) {
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
      <Switch>
        <Route exact path="/">
          <MainDash />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/shop/item">
          <ItemPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/checkout/information">
          <CheckoutInformation />
        </Route>
        <Route exact path="/checkout/shipping">
          <CheckoutShipping />
        </Route>
      </Switch>
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
