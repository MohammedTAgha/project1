import React, { Component } from "react";
import st from "./CookingSection.module.css";
import tp from "../../common/styles/typography.module.css";
import Button from "../../components/button/Button";
import pic from "../../assets/cooking.png";
import { MainHeading, Subheading } from "../../components/Typography";
export default class AboutSection extends Component {
  render() {
    return (
      <div className={st.parent}>
        <div className={st.left}>
        <MainHeading secondary>
        Cooking ingredients
        </MainHeading>
        <Subheading >
        What goes in
        </Subheading>
         
          <article className={`${st.body}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.
          </article>
          <Button
            type={"primary"}
            text={"Read more"}
            dm={{ height: 44, width: 177 }}
          />
        </div>
        <div className={st.right}>
          <img src={pic} />
        </div>
      </div>
    );
  }
}
