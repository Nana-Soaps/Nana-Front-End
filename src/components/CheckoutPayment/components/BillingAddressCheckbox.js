import React from "react";

function BillingAddressCheckbox(props) {
  return (
    <div className="mb-3">
      <div className="item border mb-2">
        <label className="d-flex flex-row-reverse justify-content-end align-items-center">
          Same as shipping address
          <input type="checkbox" className="me-3" />
        </label>
      </div>
      <div className="item border">
        <label className="d-flex flex-row-reverse justify-content-end align-items-center">
          Use a different billing address
          <input type="checkbox" className="me-3" />
        </label>
      </div>
    </div>
  );
}

export default BillingAddressCheckbox;
