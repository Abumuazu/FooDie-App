import React from "react";

const navigation = ({ onRouteChange }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={() => onRouteChange("signin")}
        className=" f3 dim pointer underline white pointer"
      >
        SignOut
      </p>
    </div>
  );
};

export default navigation;
