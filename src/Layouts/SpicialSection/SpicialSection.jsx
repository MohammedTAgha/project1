import React, { Component } from "react";
import styles from "../../common/styles/styles.module.css";
import tp from "../../common/styles/typography.module.css";
import Card from "../../components/Card/Card";
import ic1 from "../../assets/icon1.png";
import ic2 from "../../assets/icon2.png";
import ic3 from "../../assets/icon3.png";
export default class SpicialSection extends Component {
  render() {
    return (
      <div className={`${styles.section} ${styles.overlay}`}>
        <p className={`${tp.heading} ${styles["mt-4"]}`}>About Us</p>
        <p className={`${tp.subheading}  ${tp.secondarylight}`}>
          What makes us special
        </p>
        <div className={`${styles["mt-5"]} ${styles.colomns}`}>
          <Card title="Fresh Food" text="" icon={ic1} />
          <Card title="Fresh Food" text="" icon={ic2} />
          <Card title="Fresh Food" text="" icon={ic3} />
        </div>
      </div>
    );
  }
}
