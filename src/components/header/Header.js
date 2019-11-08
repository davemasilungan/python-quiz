import React from "react";
import { styles } from "./Header.modules.scss";
import logo from "../../assets/logos/logo.svg";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="talentize logo" />
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
