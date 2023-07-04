import React, { Component } from "react";
import st from "./AboutSection.module.css";
import tp from "../../common/styles/typography.module.css";
import Button from "../../components/button/Button";
import dish from "../../assets/dish.png";
export default class AboutSection extends Component {
  render() {
    return (
      <div className={st.parent}>
        <div className={st.left}>
          <p className={`${tp.heading} `}>About Us</p>
          <p className={`${tp.subheading}  ${tp.secondarylight}`}>
            Discover the taste of worldclass vegan dishes <br />
            from the kitchen of Go Green Dine
          </p>
          <article className={`${st.body}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
            mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
            orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor
            purus nunc tellus pellentesque nibh mattis. Malesuada integer
            consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie
            maecenas interdum pharetra id velit sed nec.tetur sit sagittis
            pretium eget vitae semper pellentesque pellentesque.
          </article>
          <Button
            type={"primary"}
            text={"Read more"}
            dm={{ height: 44, width: 177 }}
          />
        </div>
        <div className={st.right}>
          <img src={dish} />
        </div>
      </div>
    );
  }
}
