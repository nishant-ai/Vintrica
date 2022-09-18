import React from "react";
import flag from "./UKFLag.webp";
import CartIcon from "./Icons/CartIcon";

export default function header(props) {
  const dialogueOpen = () => {
    document.querySelector(".dialogue").classList.remove("hidden");
  };
  const dialogueClose = () => {
    document.querySelector(".dialogue").classList.add("hidden");
  };
  return (
    <>
      <div className="nav">
        <img
          src={require("../../../assets/logo.png")}
          className="logo"
          alt="logo"
        />
        <div className="navItems">
          <div className="money" onClick={dialogueOpen}>
            <p>USD $</p>
          </div>
          <div className="flag">
            <img src={flag} alt="UKFLag" />
          </div>
          <div className="cart">
            <CartIcon />
          </div>
        </div>
      </div>
      <div className="dialogue hidden" onClick={dialogueClose}></div>
    </>
  );
}
