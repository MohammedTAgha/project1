import React, { Component } from "react";
import {
  HeroSection,
  AboutSection,
  SpicialSection,
  MenuSection,
  BookingSection,
} from "../../Layouts";

export default class Home extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <AboutSection />
        <SpicialSection />
        <MenuSection />
        <BookingSection/>
      </>
    );
  }
}
