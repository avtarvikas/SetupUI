import React from "react";
import tipsIcon from "../assets/Helpful_tips_icon.png";
import bettyIcon from "../assets/Payroll_Betty_icon.png";

const Tips = props => {
  return (
    <div className="tips">
      <div className="tips-image-container">
        <div className="tips-image">
          <img alt="icon" src={tipsIcon} width="55" height="55" />
        </div>
        <div>Helpful Tips</div>
      </div>
      <div className="betty-icon">
        <img alt="icon" src={bettyIcon} width="55" height="55" />
        <div className="betty-text">Payroll Betty</div>
      </div>
      {props.page2 ? (
        <div className="tips-description">
          <p>
            ...<br />
            Our main goal is to find out if you have more than one physical
            location to make sure we setup taxes correctly if the locations are
            in more than one state.
          </p>
        </div>
      ) : (
        <div className="tips-description">
          <p>
            ...<br />
            Hello, we are happy to be here to help guide you through the setup
            process and offer tips throughout the process to save time.
          </p>
          <p>
            Remember to have these items ready to reference:
            <li>Form #1</li>
            <li>Form #2</li>
            <li>Form #3</li>
          </p>

          <p>Great to have you aboard and lets get started</p>
        </div>
      )}
    </div>
  );
};

export default Tips;
