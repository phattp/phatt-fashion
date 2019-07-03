import React, { Component } from "react";
import Hero from "./Hero";
import Recommended from "./Recommended";

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Hero />
        <Recommended />
      </div>
    );
  }
}

export default Landing;
