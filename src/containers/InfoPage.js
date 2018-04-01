import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ProgressBar from "../generic/ProgressBar";
import OtherEarnings from "../components/OtherEarnings";
import PageFooter from "../generic/PageFooter";

class InfoPage extends Component {
  render() {
    return (
      <div>
        <div className="page-title">Earnings Setup</div>
        <div className="row m-0 page-container main-container">
          <div style={{ padding: "0px 60px" }}>
            <ProgressBar bar="80%" />
          </div>
          <div className="page-content">
            <h1>Alright, here is what we have so far..</h1>
            <p style={{ fontSize: "17px", padding: "15px 0px" }}>
              Take a look at what we have for your earnings setup. You will have
              more customizable options within Netchex once your company is
              created.
            </p>
          </div>
        </div>
        <div className="page-footer-container">
          <PageFooter
            onBack={() => {
              this.props.history.push("/tips-page");
            }}
            onContinue={() => {
              this.props.history.push("/complete-page");
            }}
            desc="Based on this information we will be able to..."
          />
        </div>
      </div>
    );
  }
}

export default withRouter(InfoPage);
