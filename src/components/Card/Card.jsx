import React, { Component } from "react";
import styles from "../../common/styles/styles.module.css";
import tp from "../../common/styles/typography.module.css";
import st from "./Card.module.css";
export default class Card extends Component {
  render() {
    const { icon, title, text, h, w } = this.props;
    return (
      <div className={`${styles.centerd} ${styles["py-5"]} ${st.card} `}>
        <img src={icon} alt="icon" />
        <p className={`${tp.l} ${styles["mt-3"]} ${styles["mb-3"]}`}>
          Fresh Food{" "}
        </p>
        <p className={styles.small}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
          hendrerit a amet viverra. Nunc pretium in amet at mattis cras.
        </p>
      </div>
    );
  }
}
