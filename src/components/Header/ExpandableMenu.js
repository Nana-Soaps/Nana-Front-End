import React, { useState, useRef } from "react";
import ExpandableShopBar from "./ExpandableShopBar";
import chevronRight from "../../assets/chevron-right.svg";
import chevronDown from "../../assets/chevron-down.svg";

function ExpandableMenu(props) {
  const shopChevron = useRef(null);
  const { toggleOpen } = props;
  const [shopBarOpen, setShopBarOpen] = useState(false);
  const handleShop = () => {
    shopChevron.current.style.transform = `${
      shopBarOpen ? "" : "rotate(90deg)"
    }`;
    setShopBarOpen(() => !shopBarOpen);
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
          <li>
            <p>Our Story</p>
            <img src={chevronRight} />
          </li>
          <li>
            <p>Contact Us</p>
            <img src={chevronRight} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExpandableMenu;
