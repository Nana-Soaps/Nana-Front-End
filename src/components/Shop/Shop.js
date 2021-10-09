import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ShopHeader from "./components/ShopHeader";
import SidePanel from "./components/SidePanel";
import Products from "./components/Products";
import sliders from "../../assets/sliders.svg";
import "../../styles/Shop.scss";

function Shop(props) {
  const location = useLocation();
  const { category } = location.state;
  const [filterBarActive, setFilterBarActive] = useState(false);
  console.log(category);

  const handleFilterBtn = () => {
    setFilterBarActive(() => !filterBarActive);
  };

  console.log(category);
  return (
    <div className="shop">
      <ShopHeader category={category} />
      <div className="shopBtnsContainer container">
        <div className="sliderBtn" onClick={handleFilterBtn}>
          <img src={sliders} alt="filter logo" />
        </div>
        <div className="d-flex flex-column justify-content-start align-items-start sortWrap">
          <label>Sort By:</label>
          <select className="sortBtn" name="cars" id="cars">
            <option>Featured</option>
            <option>Best Selling</option>
            <option>Name A-Z</option>
            <option>Price, low to high</option>
            <option>Price, high to low</option>
          </select>
        </div>
      </div>
      <div className="container mainContentWrap">
        <SidePanel filterBarActive={filterBarActive} />
        <Products category={category} />
        {/* <div style={{ width: "100rem", height: "100vh" }}></div> */}
      </div>
    </div>
  );
}

export default Shop;
