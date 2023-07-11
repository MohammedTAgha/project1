import React, { Component } from "react";
import {
  HeroSection,
  AboutSection,
  SpicialSection,
  MenuSection,
  BookingSection,
  CookingSection,
  FeaturesSection,
  Reviews
} from "../../Layouts";

export default class Home extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <AboutSection />
        <SpicialSection />
        <MenuSection />
        <BookingSection />
        <CookingSection/>
        <FeaturesSection />
        <Reviews />
      </>
    );
  }
}
