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
          {props.categories.map((category) => {
            return (
              <div>
                <li className="me-2" onClick={clickShop}>
                  <Link
                    to={{ pathname: "/shop", state: { category: category } }}
                    className="text-decoration-none"
                  >
                    <a className="text">{category.category_name}</a>
                  </Link>
                </li>
              </div>
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
