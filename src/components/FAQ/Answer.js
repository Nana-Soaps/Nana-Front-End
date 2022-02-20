import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";

const AnswerWrap = styled.div`
  max-height: ${(props) => (props.open ? "200px" : "0px")};
  overflow: hidden;
  transition: max-height 0.2s;
  text-align: left;
`;

function Answer({ answer, expanded }) {
  const [height, setHeight] = useState(0);
  const [element, setElement] = useState({ current: { clientHeight: 10 } });
  return (
    <AnswerWrap open={expanded}>
      <p>{answer}</p>
    </AnswerWrap>
  );
}

export default Answer;
