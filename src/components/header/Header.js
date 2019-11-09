import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logos/talentize-white.svg";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header className="header">
      <div className="header-limiter">
        <img className="logo" src={logo} alt="talentize logo" />
        <div className="signup_button">
          <Link to="/">Signup</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
