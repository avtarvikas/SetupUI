import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ProgressBar from "../generic/ProgressBar";
import MultipleCheckButtons from "../generic/MultipleCheckButtons";
import PageFooter from "../generic/PageFooter";
import { baseEarning } from "./Constants";
import _ from "underscore";

class EarningsSetup extends Component {
  state = {
    selectedBaseEarnings: []
  };

  handleOnChange(value) {
    let arr = this.state.selectedBaseEarnings;
    if (!_.contains(arr, value)) {
      arr.push(value);
    } else {
      arr = _.without(arr, value);
    }
    this.setState({ selectedBaseEarnings: arr });
  }
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
            <div className="row check-buttons-continers">
              {baseEarning.map(k => {
                return (
                  <MultipleCheckButtons
                    checked={_.contains(this.state.selectedBaseEarnings, k)}
                    key={k}
                    name={k}
                    onSelect={k => {
                      this.handleOnChange(k);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="page-footer-container">
          <PageFooter />
        </div>
      </div>
    );
  }
}

export default withRouter(EarningsSetup);
