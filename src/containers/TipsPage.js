import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ProgressBar from "../generic/ProgressBar";
import { connect } from "react-redux";
import { getAndSetValues } from "../actions";
import MultipleCheckButtons from "../generic/MultipleCheckButtons";
import OtherEarnings from "../components/OtherEarnings";
import PageFooter from "../generic/PageFooter";
import RadioButton from "../generic/RadioButtons";
import { Tips } from "./Constants";
import _ from "underscore";

class TipsPage extends Component {
  state = {
    selectedTips: [],
    other: false,
    tipped: "Yes"
  };
  componentWillMount() {
    if (this.props.data.tips) {
      this.setState({
        ...this.props.data.tips
      });
    }
  }

  onRadioChange(e) {
    this.setState({
      tipped: e.value
    });
  }

  handleOnChange(value) {
    let arr = this.state.selectedTips;
    if (!_.contains(arr, value)) {
      arr.push(value);
    } else {
      arr = _.without(arr, value);
    }
    if (value === "Other") {
      this.setState({ selectedTips: arr, other: !this.state.other });
    } else {
      this.setState({ selectedTips: arr });
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
            <h1>Tips Plans</h1>
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
              value="No"
              onChange={k => this.onRadioChange(k)}
            />
            <p style={{ fontSize: "17px", padding: "15px 0px" }}>
              Which earnings do you want to add?
            </p>
            <div className="row check-buttons-continers">
              {Tips.map(k => {
                return (
                  <MultipleCheckButtons
                    checked={_.contains(this.state.selectedTips, k)}
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
              this.props.getAndSetValues("tips", this.state);
              this.props.history.push("/info-page");
            }}
            desc="Tips are..."
          />
        </div>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    data: state.earningSetupData
  };
};
const actionCreators = {
  getAndSetValues: getAndSetValues
};

export default withRouter(connect(stateToProps, actionCreators)(TipsPage));
