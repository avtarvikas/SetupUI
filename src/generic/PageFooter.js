import React from "react";
import Buttons from "./Buttons";
import bettyIcon from "../assets/Payroll_Betty_icon.png";

const PageFooter = props => {
  return (
    <div className="button-group" onClick={() => {}}>
      <div className="row m-0">
        <div className="col-lg-8">
          <div className="row footer-Icon">
            <div className="col-lg-1" style={{ padding: "0px" }}>
              <img alt="icon" src={bettyIcon} width="55" height="55" />
            </div>
            <div
              className="col-lg-8"
              style={{ padding: "0px", width: "fit-content" }}
            >
              <div>...</div>
              <div className="footer-text">
                Holiday,Overtime, and Regular earnings will be added to your
                company by default.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="footer-button-container">
            <Buttons onBack={() => {}} onContinue={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
