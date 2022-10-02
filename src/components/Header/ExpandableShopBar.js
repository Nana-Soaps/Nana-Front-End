import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function ExpandableShopBar(props) {
  const { shopBarOpen, toggleOpen } = props;
  return (
    <div className={`expandableShopBar ${shopBarOpen ? "shopBarOpen" : ""}`}>
      {props.categories.map((category) => {
        return (
          <Link to="/shop" state={{ category: category }}>
            <p onClick={toggleOpen}>{category.category_name}</p>
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
