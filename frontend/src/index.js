import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider } from "styled-components";
require("dotenv").config();

const theme = {
  // COLOR VARIABLES
  colorPrimary: "#d65a31",
  colorLogo: "#333333",
  colorGrey: "#393e46",
  colorGreyLight: "#eeeeee",
  colorWhite: "#fff",
  colorBlack: "#222831"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
