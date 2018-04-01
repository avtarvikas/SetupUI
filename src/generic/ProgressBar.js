import React from "react";
import logo from "../assets/netchex_logo.png";

const ProgressBar = props => {
  return (
    <div className="progress">
      <div className="determinate" style={{ width: props.bar }} />
    </div>
  );
};

export default ProgressBar;
