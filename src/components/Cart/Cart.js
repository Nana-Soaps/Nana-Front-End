import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/Cart.scss";
import { connect } from "react-redux";
import { toggleCartOpen } from "../../actions";
import { enableBodyScroll } from "body-scroll-lock";
import CartItem from "./components/CartItem";

function Cart(props) {
  const { push } = useHistory();
  const [subtotal, setSubtotal] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  let cartWrap = useRef(null);
  const handleCloseCart = () => {
    props.toggleCartOpen(false);
    enableBodyScroll(document);
  };

  const handleCheckout = () => {
    handleCloseCart();
    push("/checkout/information");
  };

  useEffect(() => {
    cartWrap.classList.add("cartOpen");
    let total = 0;
    props.bag.forEach((product) => {
      total += product.price * product.quantity;
    });
    setSubtotal(total);
  }, []);

  useEffect(() => {
    let total = 0;
    props.bag.forEach((product) => {
      total += product.price * product.quantity;
    });
    setSubtotal(total);

    if (props.bag.length > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [props.bag]);

  return (
    <div className="cartPageWrap">
      <div className="blankSpace" onClick={handleCloseCart}></div>
      <div
        className="cartWrap"
        ref={(el) => {
          cartWrap = el;
        }}
      >
        <div className="cartHeader">
          <h1>My Bag</h1>
          <h5 onClick={handleCloseCart}>CLOSE</h5>
        </div>
        {!props.bag.length && (
          <p className="text-danger mt-4">Your Bag is Empty</p>
        )}
        <div className="cartBody">
          {props.bag.map((product) => {
            return <CartItem product={product} />;
          })}
        </div>
        <div className="subtotal">
          <h5>Subtotal:</h5>
          <h5>${subtotal.toFixed(2)}</h5>
        </div>
        <div className="d-flex justify-content-end btnWrap">
          <button
            className="btn checkoutBtn"
            disabled={btnDisabled}
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, { toggleCartOpen })(Cart);
