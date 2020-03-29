import React from "react";
import { Link } from "react-router-dom";
const Header = props => (
  <nav>
    <header>
      <div className="branding">
        <h1> {props.title}</h1>
      </div>
    </header>
    <ul>
      <Link to="/">
        <li className="header-link">Profile</li>
      </Link>
      <Link to="/settings">
        <li className="header-link">Settings</li>
      </Link>
    </ul>
  </nav>
);

export default Header;
