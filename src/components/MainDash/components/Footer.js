import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="footerTabs">
          <Link to="/contact" style={{ "text-decoration": "none" }}>
            <h5>Contact</h5>
          </Link>
          <Link to="/faq" style={{ "text-decoration": "none" }}>
            <h5>FAQ</h5>
          </Link>
          {/* <Link to="/shipping" style={{ "text-decoration": "none" }}>
            <h5>Shipping</h5>
          </Link>
          <Link to="/returns" style={{ "text-decoration": "none" }}>
            <h5>Returns</h5>
          </Link> */}
        </div>
        <p className="copyright">© 2021 Nana's Soaps</p>
      </div>
    </div>
  );
}

export default Footer;
