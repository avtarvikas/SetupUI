import React from "react";

const SetupOption = props => {
  return (
    <div className="setup-option col-lg-3">
      <img alt="options" src={props.data.image} width="120" height="120" />
      <div className="setup-option-description">{props.data.name}</div>
      <div style={{ fontSize: "15px", color: "#929292" }}>0/2</div>
    </div>
  );
};

export default SetupOption;
