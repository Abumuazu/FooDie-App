import React from "react";

const FoodBlock = (props) => {
  return (
    <div className="content-container">
      <ul className="model-container-tag-list">
        <li className="model-container-tag-list-column content-container shadow-5">
          <p>
            <span className="predicted-concept-name f6 f5-ns fw6 lh-title black mv0">
              {props.foodContent.name}
            </span>
          </p>
          <p>
            <span className="tag-prob"> {props.foodContent.val} </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FoodBlock;
