import React from "react";
import FoodBlock from "../foodBlock/foodBlock";
import "../ListFoodContent/ListFoodContent.css";

const ListFoodContent = (props) => {
  return (
    <div>
      <div className="food-content ">
        <ul className="model-container-tag-list">
          <li className="model-container-tag-list-column bg-pink  shadow-5 ">
            <p>
              <span className="predicted-concept-name f6 f5-ns fw6 lh-title black mv0 ">
                Predicted Contents
              </span>
            </p>
            <p>
              <span className="tag-prob f6 f5-ns fw6 lh-title black mv0 ">
                {" "}
                Assurance
              </span>
            </p>
          </li>
        </ul>

        <div className="card-list">
          {props.foodContents.map((foodContent) => (
            <FoodBlock key={foodContent.id} foodContent={foodContent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListFoodContent;
