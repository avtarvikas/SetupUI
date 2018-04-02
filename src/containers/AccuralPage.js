import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAndSetValues } from "../actions";
import ProgressBar from "../generic/ProgressBar";
import MultipleCheckButtons from "../generic/MultipleCheckButtons";
import OtherEarnings from "../components/OtherEarnings";
import PageFooter from "../generic/PageFooter";
import RadioButton from "../generic/RadioButtons";
import { accural } from "./Constants";
import _ from "underscore";

class AccuralPage extends Component {
  state = {
    selectedAccurals: [],
    other: false,
    accuralPlan: "Yes"
  };

  componentWillMount() {
    if (this.props.data.accural) {
      this.setState({
        ...this.props.data.accural
      });
    }
  }

  onRadioChange(e) {
    this.setState({
      accuralPlan: e.value
    });
  }

  handleOnChange(value) {
    let arr = this.state.selectedAccurals;
    if (!_.contains(arr, value)) {
      arr.push(value);
    } else {
      arr = _.without(arr, value);
    }
    if (value === "Other") {
      this.setState({ selectedAccurals: arr, other: !this.state.other });
    } else {
      this.setState({ selectedAccurals: arr });
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="page-title">Earnings Setup</div>
        <div className="row m-0 page-container main-container">
          <div style={{ padding: "0px 60px" }}>
            <ProgressBar bar="40%" />
          </div>
          <div className="page-content">
            <h1>Accural Plans</h1>
            <p style={{ fontSize: "17px", padding: "15px 0px" }}>
              Do you have accural plans?
            </p>
            <RadioButton
              id="test"
              name="test"
              checked={this.state.accuralPlan === "Yes"}
              label="Yes"
              value="Yes"
              onChange={k => this.onRadioChange(k)}
            />
            <RadioButton
              id="test"
              name="test"
              checked={this.state.accuralPlan === "No"}
              label="No"
              value="No"
              onChange={k => this.onRadioChange(k)}
            />
            <p style={{ fontSize: "17px", padding: "15px 0px" }}>
              Which earnings do you want to add?
            </p>
            <div className="row check-buttons-continers">
              {accural.map(k => {
                return (
                  <MultipleCheckButtons
                    checked={_.contains(this.state.selectedAccurals, k)}
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
              this.props.history.push("/base-page");
            }}
            onContinue={() => {
              this.props.getAndSetValues("accural", this.state);
              this.props.history.push("/tips-page");
            }}
            desc="Accural plans are..."
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

export default withRouter(connect(stateToProps, actionCreators)(AccuralPage));
