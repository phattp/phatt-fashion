import React, { Component } from "react";
import Hero from "./Hero";

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
      </div>
    );
  }
}

export default Landing;
