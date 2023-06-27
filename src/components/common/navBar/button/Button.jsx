import React from 'react';
import ts from '../../../styles/typography.module.css';
import st from './Button.module.css'; // Assuming you have a CSS module file for the button component
function Button({ text, onClick , type  }) {
  return (
    <button className={`${st.button} ${ts.title}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
