import React, { useState } from "react";
import soapImg from "../../../assets/soap-item.png";
import remove from "../../../assets/remove.svg";
import plus from "../../../assets/plus.svg";
import minus from "../../../assets/minus.svg";
import { connect } from "react-redux";
import { setBag, toggleCartOpen } from "../../../actions";

function CartItem(props) {
  let { product } = props;

  const handleRemove = () => {
    const index = props.bag.indexOf(product);
    const newProducts = props.bag;
    newProducts.splice(index, 1);
    const final = [...newProducts];
    props.setBag(final);
  };

  const handleIncreaseQuantity = () => {
    const index = props.bag.indexOf(product);
    const currentProducts = props.bag;
    const changedProduct = { ...product, quantity: (product.quantity += 1) };
    currentProducts[index] = changedProduct;
    const final = [...currentProducts];
    props.setBag(final);
  };

  const handleDecreaseQuantity = () => {
    if (product.quantity > 1) {
      const index = props.bag.indexOf(product);
      const currentProducts = props.bag;
      const changedProduct = { ...product, quantity: (product.quantity -= 1) };
      currentProducts[index] = changedProduct;
      const final = [...currentProducts];
      props.setBag(final);
    }
  };

  return (
    <div className="cartItem">
      <div className="imgWrap d-flex justify-content-center align-items-center">
        <img
          src={`https://nana-soaps-products.s3.us-east-2.amazonaws.com/${product.product_id}`}
          alt={`product.product_name`}
        />
      </div>
      <div className="itemMid">
        <h5 className="text-start">{product.name}</h5>
        <div className="quantityWrap">
          <div className="minusWrap" onClick={handleDecreaseQuantity}>
            <img src={minus} />
          </div>
          <div className="quantityNumberWrap">
            <p className="quantity">{product.quantity}</p>
          </div>
          <div className="plusWrap" onClick={handleIncreaseQuantity}>
            <img src={plus} />
          </div>
        </div>
      </div>
      <div className="itemRight" style={{ width: "4.5rem" }}>
        <div className="removeWrap" onClick={handleRemove}>
          <img src={remove} />
        </div>
        <h5 className="totalPrice">
          ${(product.price * product.quantity).toFixed(2)}
        </h5>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { setBag, toggleCartOpen })(CartItem);
