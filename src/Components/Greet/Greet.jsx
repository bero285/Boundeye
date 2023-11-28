import React from "react";
import "./Greet.css";
import "w3-css/w3.css";
import { useState, useEffect } from "react";

const Greet = () => {
  // useState area
  // state for text animation
  const [text, setText] = useState();
  const [start, setStart] = useState();
  // Effect Hook for set animation to the appiaring text with time interval
  useEffect(() => {
    setInterval(() => {
      setText(
        <h4 className="w3-animate-zoom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          sapiente voluptas porro aliquam sequi doloremque, exercitationem
          consectetur placeat non perferendis aliquid veniam, ex saepe
          voluptates dolorum! Fugit, deleniti? Molestiae, sunt.
        </h4>
      );
    }, 1000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setStart(
        <h3 className="w3-animate-zoom">
          რაიმე ტექსტი :D
        </h3>
      );
    }, 2000);
  }, [text]);
  return (
    <div className="greet">
      <div className="w3-center">
        <h1 className="w3-center w3-animate-top hello-txt">Hello World</h1>
        {text}
        {start}
      </div>
    </div>
  );
};

export default Greet;
