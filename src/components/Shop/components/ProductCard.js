import React from "react";
import soapImg from "../../../assets/soap-item.png";
import bagAdd from "../../../assets/bag-add.svg";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { product } = props;
  return (
    <div className="itemCard p-1">
      <div className="itemWrap">
        <Link to="/shop/item">
          <div className="imgWrap border rounded d-flex justify-content-center align-items-center">
            <img
              src={`https://nana-soaps-products.s3.us-east-2.amazonaws.com/${product.product_id}`}
              className="img-fluid"
            />
          </div>
        </Link>
        <div className="textWrap rounded">
          <Link to="/shop/item" className="text-decoration-none">
            <h5 className="name">{product.name}</h5>
            <h5 className="price">${product.price.toFixed(2)}</h5>
          </Link>
          <div className="d-flex justify-content-center addToBagWrap">
            <h5 className="me-2 addText">Add To Bag</h5>
            <img src={bagAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
