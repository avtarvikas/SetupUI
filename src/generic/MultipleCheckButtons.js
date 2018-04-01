import React from "react";
import multiSelectArrow from "../assets/multi_select_arrow.png";

const MultiSelectButtons = props => {
  return props.checked ? (
    <div
      className="check-buttons col-lg-3"
      onClick={props.onSelect(props.name)}
    >
      <div className="uncheck-multiCheck-image-container">
        <div className="uncheck-multiCheck-image" />
        <div style={{ marginTop: "15px" }}>{props.name}</div>
      </div>
    </div>
  ) : (
    <div
      className="check-buttons col-lg-3"
      onClick={props.onSelect(props.name)}
    >
      <div className="multiCheck-image-container">
        <div className="multiCheck-image">
          <img alt="icon" src={multiSelectArrow} width="40" height="40" />
        </div>
        <div style={{ marginTop: "15px" }}>{props.name}</div>
      </div>
    </div>
  );
};

export default MultiSelectButtons;
