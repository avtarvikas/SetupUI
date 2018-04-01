import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ProgressBar from "../generic/ProgressBar";
import MultipleCheckButtons from "../generic/MultipleCheckButtons";
import OtherEarnings from "../components/OtherEarnings";
import PageFooter from "../generic/PageFooter";
import { baseEarning, footerDescription } from "./Constants";
import _ from "underscore";

class EarningsSetup extends Component {
  state = {
    selectedBaseEarnings: [],
    other: false
  };

  handleOnChange(value) {
    let arr = this.state.selectedBaseEarnings;
    if (!_.contains(arr, value)) {
      arr.push(value);
    } else {
      arr = _.without(arr, value);
    }
    if (value === "Other") {
      this.setState({ selectedBaseEarnings: arr, other: !this.state.other });
    } else {
      this.setState({ selectedBaseEarnings: arr });
    }
  }
  render() {
    return (
      <div>
        <div className="page-title">Earnings Setup</div>
        <div className="row m-0 page-container main-container">
          <div style={{ padding: "0px 60px" }}>
            <ProgressBar bar="20%" />
          </div>
          {this.state.other ? (
            <div className="row">
              <div className="page-content">
                <h1>Choose base earnings</h1>
                <p style={{ fontSize: "17px" }}>
                  Select from the list of earnings below ones you would like to
                  add to your company.
                </p>
              </div>
              <div className="row" style={{ padding: "0px 85px" }}>
                <div className="col-lg-6">
                  <div className="row check-buttons-continers">
                    {baseEarning.map(k => {
                      return (
                        <MultipleCheckButtons
                          checked={_.contains(
                            this.state.selectedBaseEarnings,
                            k
                          )}
                          key={k}
                          name={k}
                          style={{ marginLeft: "40px" }}
                          onSelect={k => {
                            this.handleOnChange(k);
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="col-lg-5 other-container">
                  <OtherEarnings />
                </div>
              </div>
            </div>
          ) : (
            <div className="page-content">
              <h1>Choose base earnings</h1>
              <p style={{ fontSize: "17px" }}>
                Select from the list of earnings below ones you would like to
                add to your company.
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
          )}
        </div>
        <div className="page-footer-container">
          <PageFooter
            onBack={() => {
              this.props.history.push("/");
            }}
            onContinue={() => {
              this.props.history.push("/accural-page");
            }}
            desc={footerDescription}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(EarningsSetup);
