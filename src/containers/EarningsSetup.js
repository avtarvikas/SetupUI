import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ProgressBar from "../generic/ProgressBar";
import MultipleCheckButtons from "../generic/MultipleCheckButtons";
import { baseEarning } from "./Constants";

class EarningsSetup extends Component {
  render() {
    return (
      <div>
        <div className="page-title">Earnings Setup</div>
        <div className="row m-0 page-container main-container">
          <div style={{ padding: "0px 60px" }}>
            <ProgressBar />
          </div>
          <div className="page-content">
            <h1>Choose base earnings</h1>
            <p style={{ fontSize: "17px" }}>
              Select from the list of earnings below ones you would like to add
              to your company.
            </p>
            <div className="check-buttons-continers">
              {baseEarning.map(k => {
                return (
                  <MultipleCheckButtons
                    checked
                    key={k}
                    name={k}
                    onSelect={name => {
                      console.log(name);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EarningsSetup);
