import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ProgressBar from "../generic/ProgressBar";
import PageFooter from "../generic/PageFooter";
import Success from "../assets/Succes_icon.png";

class CompletePage extends Component {
  render() {
    return (
      <div>
        <div className="page-title">Earnings Setup</div>
        <div className="row m-0 page-container main-container">
          <div style={{ padding: "0px 60px" }}>
            <ProgressBar bar="100%" />
          </div>
          <div className="page-content">
            <p
              style={{
                fontSize: "50px",
                padding: "15px 0px",
                textAlign: "center"
              }}
            >
              Earning Setup Complete
            </p>
            <div style={{ padding: "0px", textAlign: "center" }}>
              <img alt="icon" src={Success} width="255" height="255" />
            </div>
            <p
              style={{
                fontSize: "17px",
                padding: "15px 0px",
                textAlign: "center"
              }}
            >
              Up Next: Deduction
            </p>
            <p
              style={{
                fontSize: "15px",
                padding: "15px 0px",
                textAlign: "center",
                color: "#b1afaf"
              }}
            >
              If employees lives in a different loction then the company
              loctions, tell us then
            </p>
          </div>
        </div>
        <div className="page-footer-container">
          <PageFooter
            onBack={() => {
              this.props.history.push("/info-page");
            }}
            onContinue={() => {
              this.props.history.push("/");
            }}
            onlyButtons
          />
        </div>
      </div>
    );
  }
}

export default withRouter(CompletePage);
