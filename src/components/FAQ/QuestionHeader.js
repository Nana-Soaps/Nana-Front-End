import React from "react";
import plus from "../../assets/plus_dark.svg";

function QuestionHeader({ question }) {
  return (
    <div className="question-header">
      <div className="logoWrap">
        <img src={plus} alt="plus logo" />
      </div>
      <p>{question}</p>
    </div>
  );
}

export default QuestionHeader;
