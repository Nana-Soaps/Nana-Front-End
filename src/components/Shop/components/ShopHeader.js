import React from "react";

function ShopHeader(props) {
  const { category } = props;
  return (
    <div className="shopHeader py-5">
      <div className="container">
        <div className="content">
          <h1 className="mb-3">{category.category_name.toUpperCase()}</h1>
          <p>One of life's simplest pleasures is a bar of handmade soap</p>
        </div>
      </div>
    </div>
  );
}

export default ShopHeader;
