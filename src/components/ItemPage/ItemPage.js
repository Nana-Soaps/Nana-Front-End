import React, { useState } from "react";
import TraitsBar from "./components/TraitsBar";
import QuantityBar from "./components/QuantityBar";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setBag, toggleCartOpen } from "../../actions";
import { disableBodyScroll } from "body-scroll-lock";
import "../../styles/ItemPage.scss";

function ItemPage(props) {
  const location = useLocation();
  const product = location.state.product;
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (e) => {
    const value = Number(e.target.dataset.value);
    setQuantity(value);
  };

  const handleAddToBag = (e) => {
    e.preventDefault();
    let itemExists = false;
    let currentProduct = null;
    props.bag.forEach((item) => {
      if (item.name == product.name) {
        itemExists = true;
        currentProduct = item;
      }
    });

    if (itemExists) {
      const newBag = props.bag.map((item) => {
        if (item.name == currentProduct.name) {
          item.quantity += quantity;
        }
        return item;
      });
      console.log(newBag);
      props.setBag(newBag);
    } else {
      props.setBag([...props.bag, { ...product, quantity: quantity }]);
    }
    props.toggleCartOpen(true);
  };
  return (
    <div className="py-5 itemPage">
      <div className="container">
        <div className="contentWrap">
          <div className="imgWrap border" style={{ overflow: "hidden" }}>
            <img
              src={`https://nana-soaps-products.s3.us-east-2.amazonaws.com/${product.product_id}`}
              alt={`${product.name}`}
            />
          </div>
          <div className="textContent d-flex flex-column align-items-start justify-content-start">
            <h1>{product.name}</h1>
            <h5 className="text-start lead mb-3">{product.description}</h5>
            <h5 className="price mb-3">${product.price.toFixed(2)} / Bar</h5>
            {product.smells_like && product.exfoliation && (
              <TraitsBar product={product} />
            )}
            <QuantityBar handleQuantity={handleQuantity} />
            <button className="btn btn-lg addCartBtn" onClick={handleAddToBag}>
              ${(product.price * quantity).toFixed(2)} | Add To Bag
            </button>
          </div>
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
export default connect(mapStateToProps, { setBag, toggleCartOpen })(ItemPage);
