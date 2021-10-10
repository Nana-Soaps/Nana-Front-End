import React from "react";

function QuantityBar(props) {
  const { handleQuantity } = props;

  return (
    <div className="quantityWrap py-2 mb-3">
      <h5 className="label">Quantity:</h5>
      <div className="d-flex ">
        <h5 className="option" data-value={1} onClick={handleQuantity}>
          1 Bar
        </h5>
        <h5 className="option" data-value={2} onClick={handleQuantity}>
          2 Bars
        </h5>
        <h5 className="option" data-value={3} onClick={handleQuantity}>
          3 Bars
        </h5>
      </div>
    </div>
  );
}

export default QuantityBar;
