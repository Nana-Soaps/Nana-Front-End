import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function ExpandableShopBar(props) {
  const { shopBarOpen, toggleOpen } = props;
  return (
    <div className={`expandableShopBar ${shopBarOpen ? "shopBarOpen" : ""}`}>
      {props.categories.map((category) => {
        return (
          <Link to={{ pathname: "/shop", state: { category: category } }}>
            <a onClick={toggleOpen}>{category.category_name}</a>
          </Link>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(ExpandableShopBar);
