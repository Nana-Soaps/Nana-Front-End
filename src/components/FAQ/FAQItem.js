import React, { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import Answer from "./Answer";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleOpen = (e) => {
    console.log(expanded);
    e.preventDefault();
    setExpanded(() => !expanded);
  };

  return (
    <div className="faq-item" onClick={handleOpen}>
      <QuestionHeader question={question} />
      <Answer expanded={expanded} answer={answer} />
    </div>
  );
}

export default FAQItem;
