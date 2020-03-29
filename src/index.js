import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Header from "./components/Header";
import SettingsForm from "./components/SettingsForm";
import ProfileForm from "./components/ProfileForm";
import normalize from "normalize.css";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
