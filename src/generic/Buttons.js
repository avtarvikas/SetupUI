import React from "react";

const Buttons = props => {
  return (
    <div>
      <button
        className="footer-buttons secondary-button"
        type="button"
        onClick={() => props.onBack}
      >
        <i className="fa fa-chevron-left" style={{ marginRight: "10px" }} />
        Back
      </button>
      <button
        className="footer-buttons primary-button"
        type="button"
        onClick={() => props.onContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default Buttons;
