import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider } from "styled-components";

const theme = {
  // COLOR VARIABLES
  colorPrimary: "rgb(50, 51, 119)",
  colorSecondary: "rgb(80, 86, 144)",
  colorTertiary: "rgb(110, 121, 169)",
  colorBlueDark: "#011638",
  colorGreyDark: "#535c68",
  colorGrey: "#b2bec3",
  colorGreyLight: "#ecf0f1",
  colorWhite: "#fff",
  colorBlack: "#2d3436"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
