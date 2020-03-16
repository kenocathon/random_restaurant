import React, { Component } from "react";

const Header = props => (
  <header>
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      <h2 className="header__subtitle">{props.subtitle}</h2>
    </div>
  </header>
);

export default Header;
