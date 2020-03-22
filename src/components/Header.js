import React from "react";

const Header = props => (
  <nav>
    <header>
      <div className="branding">
        <h1> {props.title}</h1>
      </div>
    </header>
    <ul>
      <li onClick={() => props.linkControllerProfile()} className="header-link">
        Profile
      </li>
      <li
        onClick={() => props.linkControllerSettings()}
        className="header-link"
      >
        Settings
      </li>
    </ul>
  </nav>
);

export default Header;
