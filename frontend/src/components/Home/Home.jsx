import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import VignetteSelect from "./VignetteSelect/VignetteSelect";
import VignetteDesc from "./VignetteDesc/VignetteDesc";

function Home() {
  return (
    <div className="Home">
      <div className="Header">
        <Navbar />
        <VignetteSelect />
      </div>
      <VignetteDesc />
    </div>
  );
}

export default Home;
