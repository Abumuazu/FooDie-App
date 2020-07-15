import React from "react";
import Tilt from "react-tilt";
import "../Logo/logo.styles.css";
import bake from "../Logo/bake.png";

const logo = () => {
  return (
    <div className="LogoContainer ">
      <Tilt
        className="Tilt shadow-6 bg-pink"
        options={{ max: 50 }}
        style={{ height: 50, width: 50 }}
      >
        <div className="Tilt-inner">
          <img className="img " src={bake} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default logo;
