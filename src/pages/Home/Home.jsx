import React, { Component } from "react";
import {
  HeroSection,
  AboutSection,
  SpicialSection,
  MenuSection,
} from "../../Layouts";

export default class Home extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <AboutSection />
        <SpicialSection />
        <MenuSection />
      </>
    );
  }
}
