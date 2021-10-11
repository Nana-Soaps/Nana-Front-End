import React from "react";

function ShippingCheckbox(props) {
  const { onChange } = props;

  return (
    <div className="checkboxWrap d-flex justify-content-between align-items-center px-3 border mb-2">
      <label className="d-flex flex-row-reverse justify-content-start align-items-center inputWrap">
        <div className="ps-3">
          <p className="m-0 shippingName text-start">Standard Shipping</p>
          <p className="m-0 shippingDescription text-start">
            3-7 Business Days
          </p>
        </div>
        <input
          type="checkbox"
          onChange={onChange}
          value={1}
          name="shipping_id"
          data-cost={7}
        />
      </label>
      <p className="m-0 cost">$7.00</p>
    </div>
  );
}

export default ShippingCheckbox;
