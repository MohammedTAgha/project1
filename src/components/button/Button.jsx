import React from "react";
import ts from "../../common/styles/typography.module.css";
import st from "./Button.module.css"; // Assuming you have a CSS module file for the button component

function Button({ text, onClick, type, dm }) {
  const { height = 0, width = 0 } = dm ?? {};
  const dynamicButtonStyles =
    height && width ? { height: `${height}px`, width: `${width}px` } : {};

  const buttonClassName = `${st.button} ${ts.title} ${
    type === "primary" ? st.button1 : ""
  } ${height && width ? st.dynamicButton : ""}`;

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      style={dynamicButtonStyles}
    >
      {text}
    </button>
  );
}

export default Button;
