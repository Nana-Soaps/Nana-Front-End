import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Hero(props) {
  return (
    <div className="hero-wrap-wrap">
      <div className="hero-wrap">
        <div className="text-wrap">
          <h1 class="hero-text">All Natural Handmade Soaps</h1>
          <Link
            to={{
              pathname: "/shop",
              state: {
                category: {
                  category_name: "Full Catalog",
                  products: props.products,
                },
              },
            }}
            className="text-decoration-none"
          >
            <button className="btn btn-light shopBtn btn-lg">Shop Now</button>
          </Link>
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

export default connect(mapStateToProps)(Hero);
