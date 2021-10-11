import React from "react";
import soapImg from "../../../assets/soap-item.png";
import bagAdd from "../../../assets/bag-add.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setBag, toggleCartOpen } from "../../../actions";
import { disableBodyScroll } from "body-scroll-lock";

function ProductCard(props) {
  const { product } = props;

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
          item.quantity += 1;
        }
        return item;
      });
      console.log(newBag);
      props.setBag(newBag);
    } else {
      props.setBag([...props.bag, { ...product, quantity: 1 }]);
    }
    props.toggleCartOpen(true);
    disableBodyScroll(true);
  };
  return (
    <div className="itemCard p-1">
      <div className="itemWrap">
        <Link
          to={{ pathname: "/shop/item", state: { product: product } }}
          className="text-decoration-none"
        >
          <div className="imgWrap border rounded d-flex justify-content-center align-items-center">
            <img
              src={`https://nana-soaps-products.s3.us-east-2.amazonaws.com/${product.product_id}`}
              className="img-fluid"
              alt={`${product.name}`}
            />
          </div>
        </Link>
        <div className="textWrap rounded">
          <Link
            to={{ pathname: "/shop/item", state: { product: product } }}
            className="text-decoration-none"
          >
            <h5 className="name">{product.name}</h5>
            <h5 className="price">${product.price.toFixed(2)}</h5>
          </Link>
          <div
            className="d-flex justify-content-center addToBagWrap"
            onClick={handleAddToBag}
          >
            <h5 className="me-2 addText">Add To Bag</h5>
            <img src={bagAdd} />
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
export default connect(mapStateToProps, { setBag, toggleCartOpen })(
  ProductCard
);
