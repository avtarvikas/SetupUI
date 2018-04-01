import React from "react";
import logo from "../assets/netchex_logo.png";

const Header = () => {
  return (
    <div className="row header">
      <div className="col-lg-12">
        <div className="col-lg-1 logo">
          <div className="logo-new-image">
            <img alt="logo" src={logo} width="32" height="37" />
          </div>
        </div>
        <div className="col-lg-11 nav-name">
          <div className="header-name">Company Setup</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
