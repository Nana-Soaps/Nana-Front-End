import React from "react";
import SubHeader from "../shared/SubHeader";
import ContactUsForm from "./ContactUsForm";
import "../../styles/ContactUs.scss";

function ContactUs(props) {
  return (
    <div className="container">
      <SubHeader title="Contact Us" message="Let us know what you're feeling" />
      <ContactUsForm />
    </div>
  );
}

export default ContactUs;
