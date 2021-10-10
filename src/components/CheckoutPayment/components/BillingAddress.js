import React from "react";

function BillingAddress(props) {
  return (
    <div>
      <form>
        <div className="shippingAddress">
          <div className="doubleInput">
            <input placeholder="First Name" className="halfInput" />
            <input placeholder="First Name" className="halfInput" />
          </div>
          <input placeholder="Address" className="fullInput" />
          <input
            placeholder="Apartment, suite, etc. (optional)"
            className="fullInput"
          />
          <input placeholder="City" className="fullInput" />
          <div className="tripleInput">
            <select>
              <option>Country/Region</option>
              <option>United States</option>
            </select>
            <select>
              <option>State</option>
              <option>New Jersey</option>
              <option>Pennsylvania</option>
            </select>
            <input placeholder="ZIP Code" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default BillingAddress;
