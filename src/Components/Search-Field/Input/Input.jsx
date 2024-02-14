import React from "react";
import "./input.css";
import "w3-css/w3.css";
const Input = ({ text }) => {
  return (
    <input
      type="text"
      placeholder={text}
      className="costum-input w3-animate-zoom"
    />
  );
};

export default Input;
