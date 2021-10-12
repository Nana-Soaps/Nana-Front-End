import React from "react";
import { connect } from "react-redux";

function Contact(props) {
  console.log(props.order);
  return (
    <div className="mb-5">
      <div className="contact contactItem border-bottom d-flex">
        <p className="title">Contact: </p>
        <p className="ps-4">{props.order.email}</p>
      </div>
      <div className="contact contactItem border-bottom d-flex">
        <p className="title">Ship To:</p>
        <p className="ps-4">{`${props.order.shipping_address}, ${props.order.shipping_city}, ${props.order.shipping_state} ${props.order.shipping_zip}, ${props.order.shipping_country}`}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Contact);
