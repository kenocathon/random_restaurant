import React from "react";

const Header = props => (
  <header>
    <div className="branding">
      <h1> {props.title}</h1>
    </div>
    <ul>
      <li>
        <a href="/profile" onClick={props.goToProfile}>
          Profile
        </a>
      </li>
      <li>Settings</li>
    </ul>
  </header>
);

export default Header;
