import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Location from "../assets/Locations_icon.png";
import Earnings from "../assets/Earnings_icon.png";
import Arrow from "../assets/cta_green_arrow.png";
import SetupOption from "../components/SetupOption";
import Tips from "../components/Tips";

class EarningSetup extends Component {
  render() {
    return (
      <div className="main-container">
        <div
          style={{ paddingLeft: "70px", cursor: "pointer" }}
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          <i className="fa fa-chevron-left" style={{ marginRight: "10px" }} />Dashboard
        </div>
        <div
          className="row m-0 page-container"
          style={{ background: "#fafafa" }}
        >
          <div className="col-lg-8 home-description">
            <div className="row">
              <div className="col-lg-2">
                <img alt="options" src={Earnings} width="120" height="120" />
              </div>
              <div className="col-lg-10">
                <div style={{ fontSize: "40px" }}>Earnings Setup</div>
                <p style={{ marginTop: "20px" }}>
                  Below are the essential items needed to get you running your
                  first payroll.
                </p>
              </div>
            </div>
            <div className="page1">
              <div className="row">
                <div
                  className="col-lg-1"
                  style={{ fontSize: "30px", padding: "0px 0px 0px 20px" }}
                >
                  1.
                </div>
                <div
                  className="col-lg-9"
                  style={{ fontSize: "30px", padding: "0px" }}
                >
                  Earnings Setup
                  <p style={{ fontSize: "18px", marginTop: "10px" }}>
                    Lets get a base set of earnings used for your company.
                  </p>
                </div>
                <div
                  className="col-lg-2"
                  style={{ padding: "20px", width: "fit-content" }}
                >
                  <img
                    alt="options"
                    src={Arrow}
                    style={{ cursor: "pointer" }}
                    width="50"
                    height="50"
                    onClick={() => {
                      this.props.history.push("./base-page");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3" style={{ marginLeft: "40px" }}>
            <Tips page2 />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EarningSetup);
