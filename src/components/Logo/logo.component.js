import React from "react";
import Tilt from "react-tilt";
import "../Logo/logo.styles.css";
import bake from "../Logo/bake.png";

const logo = () => {
  return (
    <div className="container ">
      <Tilt
        className="Tilt shadow-6 bg-pink"
        options={{ max: 50 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner">
          <img className="img " src={bake} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default logo;
