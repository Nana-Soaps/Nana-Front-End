import React, { useState, useRef } from "react";
import ExpandableShopBar from "./ExpandableShopBar";
import chevronRight from "../../assets/chevron-right.svg";
// import chevronDown from "../../assets/chevron-down.svg";
import { useNavigate } from "react-router-dom";

function ExpandableMenu(props) {
  const push = useNavigate();
  const shopChevron = useRef(null);
  const { toggleOpen } = props;
  const [shopBarOpen, setShopBarOpen] = useState(false);
  const handleShop = () => {
    shopChevron.current.style.transform = `${
      shopBarOpen ? "" : "rotate(90deg)"
    }`;
    setShopBarOpen(() => !shopBarOpen);
  };

  const handleOurStory = () => {
    push("/our-story");
    toggleOpen();
  };
  const handleContactUs = () => {
    push("/contact");
    toggleOpen();
  };

  return (
    <div className={`nav-menu ${props.menuClass}`}>
      <div className="container">
        <ul className="container">
          <li className="first-item d-flex flex-column" onClick={handleShop}>
            <div className="d-flex justify-content-between">
              <p>Shop</p>
              <img
                src={chevronRight}
                ref={shopChevron}
                className="chevron"
                alt="chevron"
              />
            </div>
            <ExpandableShopBar
              shopBarOpen={shopBarOpen}
              toggleOpen={toggleOpen}
            />
          </li>
          <li onClick={handleOurStory}>
            <p>Our Story</p>
            <img src={chevronRight} alt="chevron right" />
          </li>
          <li onClick={handleContactUs}>
            <p>Contact Us</p>
            <img src={chevronRight} alt="chevron left" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExpandableMenu;
