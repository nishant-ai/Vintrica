import React from "react";
import "./Navbar.css";
import LangaugeSelect from "../../assets/en.svg";
import HomeIcon from "./Icons/HomeIcon";
import CarIcon from "./Icons/CarIcon";
import FaqIcon from "./Icons/FaqIcon";
import CartIcon from "./Icons/CartIcon";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="LeftNav">
        <img
          className="NavLogo"
          src={require("../../assets/logo.png")}
          alt="VINTRICA"
        />
        <a href="/" className="LinkContainer LinkActive">
          <HomeIcon />
          <p className="NavLink">HOMEPAGE</p>
        </a>
        <a href="/" className="LinkContainer">
          <CarIcon />
          <p className="NavLink">HOW IT WORKS</p>
        </a>
        <a href="/" className="LinkContainer">
          <FaqIcon />
          <p className="NavLink">FAQS</p>
        </a>
      </div>
      <div className="RightNav">
        <div className="Currency RightNavItem">USD $</div>
        <img
          className="Language RightNavitem"
          src={LangaugeSelect}
          alt="Langauge"
        />
        <CartIcon className="Cart RightNavItem" src={""} alt="Cart" />
      </div>
    </div>
  );
}

export default Navbar;
