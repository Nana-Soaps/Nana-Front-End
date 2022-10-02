import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function ShopBar(props) {
  const { shopBarOpen, clickShop } = props;
  return (
    <div className="header shopBarWrap shopBar">
      <div className="container">
        <div
          className={`shopBar ${
            shopBarOpen ? "shopBarOpen " : "shopBarClosed"
          }`}
        >
          <li className="me-2" onClick={clickShop}>
            <Link
              to="/shop"
              state={{
                category: {
                  category_name: "Full Catalog",
                  products: props.products,
                },
              }}
              className="text-decoration-none"
            >
              <p className="text-dark">Full Catalog</p>
            </Link>
          </li>
          {props.categories.map((category) => {
            return (
              <li className="me-2" onClick={clickShop}>
                <Link
                  to="/shop"
                  state={{ category: category }}
                  className="text-decoration-none"
                >
                  <p className="text-dark">{category.category_name}</p>
                </Link>
              </li>
            );
          })}
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

export default connect(mapStateToProps)(ShopBar);
