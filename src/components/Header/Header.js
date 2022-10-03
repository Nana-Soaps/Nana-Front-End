import React, { useState } from "react";
import HeaderSmall from "./HeaderSmall";
import ShopBar from "./ShopBar";
import shoppingBag from "../../assets/bag.svg";
import user from "../../assets/user.svg";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { toggleCartOpen } from "../../actions";
import { disableBodyScroll } from "body-scroll-lock";

function Header(props) {
  const [shopBarOpen, setShopBarOpen] = useState(false);
  const push = useNavigate();
  const clickShop = () => {
    setShopBarOpen(() => !shopBarOpen);
  };

  const handleOpenCart = () => {
    props.toggleCartOpen(true);
  };

  const handleOurStory = () => {
    push("/our-story");
    setShopBarOpen(false);
  };

  const handleContactUs = () => {
    push("/contact");
    setShopBarOpen(false);
  };
  return (
    <>
      <div className="header py-3">
        <div className="container">
          <div className="logo-container">
            <Link to="/" onClick={() => setShopBarOpen(false)}>
              <h1>Nana's Soaps</h1>
            </Link>
          </div>
          <ul>
            <li className="me-2" onClick={clickShop}>
              <p className="text">Shop</p>
            </li>
            <li className="mx-2" onClick={handleOurStory}>
              <p className="text">Our Story</p>
            </li>
            <li className="ms-2" onClick={handleContactUs}>
              <p className="text">Contact Us</p>
            </li>
          </ul>
          <div className="icon-container">
            {/* <Link to="/login">
              <div className="img-container me-2">
                <img src={user} />
              </div>
            </Link> */}
            <div className="img-container ms-2" onClick={handleOpenCart}>
              <img src={shoppingBag} />
            </div>
          </div>
        </div>
      </div>
      <ShopBar shopBarOpen={shopBarOpen} clickShop={clickShop} />

      <HeaderSmall />
    </>
  );
}

export default connect(null, { toggleCartOpen })(Header);
