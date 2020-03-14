import React, { Component } from "react";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <Hamburger />
    </header>
  );
};

const Hamburger = () => {
  return (
    <div>
      <p>Three lines here</p>
    </div>
  );
};

export default Header;
