import React from "react";
import SubHeader from "../shared/SubHeader.js";
import OurStoryUpper from "./OurStoryUpper.js";
import "../../styles/OurStory.scss";

function OurStory(props) {
  return (
    <div className="our-story">
      <div className="container">
        <SubHeader title="Our Story" message="Welcome to Nana's Soaps" />
        <OurStoryUpper />
      </div>
    </div>
  );
}

export default OurStory;
