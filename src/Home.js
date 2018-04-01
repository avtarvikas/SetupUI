import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Location from "./assets/Locations_icon.png";
import Earnings from "./assets/Earnings_icon.png";
import PaySchedules from "./assets/PaySchedules_icon.png";
import Uploads from "./assets/Uploads_icon.png";
import phone from "./assets/phone_icon.png";
import SetupOption from "./components/SetupOption";
import Tips from "./components/Tips";

class Home extends Component {
  render() {
    let setupArray = [
      { name: "Location", image: Location },
      { name: "Pay Schedules", image: PaySchedules },
      { name: "Earnings", image: Earnings },
      { name: "Uploads", image: Uploads }
    ];
    return (
      <div className="main-container">
        <div className="row m-0 page-container">
          <div className="col-lg-8 home-description">
            <div style={{ width: "73%" }}>
              <div style={{ fontSize: "40px", marginBottom: "10px" }}>
                Up,Up, and Away!
              </div>
              This setup is designed to help you blast off to a great start and
              fast-track your deployment in{" "}
              <span style={{ fontWeight: "600" }}>4 simple steps</span>. Choose
              an item to begin.
            </div>
            <div className="home-setup row">
              <div className="setup-title">Basic Setup</div>
              {setupArray.map(k => {
                return <SetupOption key={k.name} data={k} />;
              })}
            </div>
            <div className="home-footer row">
              <div className="footer-container">
                <img alt="phone" src={phone} width="28" height="28" />
                <div style={{ marginTop: "15px" }}>
                  Once you complete the basic setup, you will have your
                  opportunity to schedule your kick off call.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3" style={{ marginLeft: "40px" }}>
            <Tips />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
