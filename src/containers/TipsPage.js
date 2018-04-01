import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ProgressBar from "../generic/ProgressBar";
import MultipleCheckButtons from "../generic/MultipleCheckButtons";
import OtherEarnings from "../components/OtherEarnings";
import PageFooter from "../generic/PageFooter";
import RadioButton from "../generic/RadioButtons";
import { Tips } from "./Constants";
import _ from "underscore";

class TipsPage extends Component {
  state = {
    selectedBaseEarnings: [],
    other: false,
    tipped: "Yes"
  };

  onRadioChange(e) {
    this.setState({
      tipped: e.value
    });
  }

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
            <ProgressBar bar="60%" />
          </div>
          <div className="page-content">
            <h1>Accural Plans</h1>
            <p style={{ fontSize: "17px", padding: "15px 0px" }}>
              Do you have Tipped employees?
            </p>
            <RadioButton
              id="test"
              name="test"
              checked={this.state.tipped === "Yes"}
              label="Yes"
              value="Yes"
              onChange={k => this.onRadioChange(k)}
            />
            <RadioButton
              id="test"
              name="test"
              checked={this.state.tipped === "No"}
              label="No"
            />
            <p style={{ fontSize: "17px", padding: "15px 0px" }}>
              Which earnings do you want to add?
            </p>
            <div className="row check-buttons-continers">
              {Tips.map(k => {
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
          <PageFooter
            onBack={() => {
              this.props.history.push("/accural-page");
            }}
            onContinue={() => {
              this.props.history.push("/info-page");
            }}
            desc="Tips are..."
          />
        </div>
      </div>
    );
  }
}

export default withRouter(TipsPage);
