import React from "react";
import 'w3-css/w3.css';
import './Button.css'
const Button = (props) => {
  return (
    <div className="w3-center">
      <button
        className="card-btn"
        onClick={props.onClick}
      >{props.word}</button>
    </div>
  );
};

export default Button;
