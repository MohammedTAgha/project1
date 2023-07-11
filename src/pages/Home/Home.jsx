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
import Blog from "../../Layouts/Blog";

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
        <Blog/>
        
      </>
    );
  }
}
