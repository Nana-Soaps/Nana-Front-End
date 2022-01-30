import React from "react";

function ContactSummary({ order }) {
  return (
    <div className="contactSummary mb-2">
      <div className="contactItem border-bottom d-flex justify-content-between">
        <div className="titleWrap">
          <p className="title">Contact:</p>
        </div>
        <p className="text-end">{order.email}</p>
      </div>
      <div className="contactItem border-bottom d-flex justify-content-between">
        <div className="titleWrap">
          <p className="title">Ship To:</p>
        </div>
        <p className="text-end">{`${order.shipping_address}${
          order.shipping_apartment ? " " + order.shipping_apartment : ""
        }, ${order.shipping_city}, ${order.shipping_state}, ${
          order.shipping_zip
        }`}</p>
      </div>
      <div className="contactItem border-bottom d-flex justify-content-between">
        <div className="titleWrap">
          <p className="title">Notes:</p>
        </div>
        <p className="text-end">{`${order.notes ? order.notes : "N/A"}`}</p>
      </div>
    </div>
  );
}

export default ContactSummary;
