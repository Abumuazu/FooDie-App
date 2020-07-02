import React from "react";
import "../FoodLinkForm/Foodlinkform.styles.css";
const foodLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className=" bigContainer">
      <div className="input-con">
        <div className=" ">
          <label className="" htmlFor="image">
            Image Url
          </label>
          <input
            name="image"
            id="image"
            onChange={onInputChange}
            className=" input  br-pill shadow-5"
            type="text"
            placeholder="paste your URL here"
          ></input>
        </div>
      </div>
      <div class="btn tc mt3">
        <button
          class="f10 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black"
          onClick={onButtonSubmit}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default foodLinkForm;
