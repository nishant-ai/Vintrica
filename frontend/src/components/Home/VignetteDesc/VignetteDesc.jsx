import React from "react";
import CheckIcon from "./Icons/CheckIcon";
import "./VignetteDesc.css";

function VignetteDesc() {
  return (
    <div className="DescContainer">
      <div className="LeftSection">
        <div className="Title">E-vignette: here’s how it works</div>
        <div className="Description">
          With vintrica it’s easy to register your number plate online for all
          <span className="HighLight">
            &nbsp; motorways and main roads that require a vignette
          </span>
          . You can simply buy a vignette either from home before you start your
          journey or on the spur of the moment during your journey on your
          smartphone before you get on the motorway.
        </div>
        <ul className="FeatureList">
          <li className="Feature">
            <CheckIcon />
            Quick to use
          </li>
          <li className="Feature">
            <CheckIcon />
            Instant activation
          </li>
          <li className="Feature">
            <CheckIcon />
            Vignette directly on your mobile phone
          </li>
          <li className="Feature">
            <CheckIcon />
            Secure online payment
          </li>
        </ul>
      </div>
      <div className="RightSection">
        <img
          src={require("../../../assets/vintrica_splash.jpeg")}
          alt=""
          className="SplashImage"
        />
      </div>
    </div>
  );
}

export default VignetteDesc;
