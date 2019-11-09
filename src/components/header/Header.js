import React from "react";
import SignupBtn from "../Button/SignupBtn/SignupBtn";
import "./Header.scss";
import logo from "../../assets/images/logos/talentize-white.svg";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header className="header">
      <div className="header-limiter">
        <img className="logo" src={logo} alt="talentize logo" />
        <SignupBtn className="signup_button">
          <Link to="/"></Link>
        </SignupBtn>
      </div>
    </header>
  );
};

export default Header;
