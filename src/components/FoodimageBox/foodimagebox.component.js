import React from "react";
import "../FoodimageBox/foodimagebox.styles.css";

const FoodImageBox = ({ imageUrl }) => {
  return (
    <div className=" container">
      <div className="wrapper ">
        <div className="image">
          <img alt="imageUrl" src={imageUrl} width="500px" height="auto" />
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default FoodImageBox;
