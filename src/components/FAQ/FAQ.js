import React from "react";
import SubHeader from "../shared/SubHeader";
import FAQItem from "./FAQItem";
import "../../styles/FAQ.scss";

function FAQ(props) {
  return (
    <div className="faq container">
      <SubHeader title="F.A.Q. " message="Frequently Asked Questions" />
      <div className="faq-items">
        <FAQItem
          question="How long does shipping usually take?"
          answer="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
        />
        <FAQItem
          question="How long does shipping usually take?"
          answer="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
        />
        <FAQItem
          question="How long does shipping usually take?"
          answer="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
        />
      </div>
    </div>
  );
}

export default FAQ;
<p>hi</p>;
