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
          {/* Welcome to our exchange program tracking website! Explore
          international opportunities offered by universities worldwide. From
          cultural immersion to academic enrichment, we're here to simplify your
          search. Start your journey towards global education today! */}
          exchange opportunities from universities around the globe. Whether
          you're a student eager to broaden your horizons or an institution
          seeking to foster international collaborations, our platform is
          designed to simplify your search. From cultural immersion to academic
          enrichment, we're dedicated to connecting you with the perfect
          exchange program to suit your interests and goals. Begin your journey
          towards global education and cultural exploration today!
        </h4>
      );
    }, 1000);
  }, []);

  return (
    <div className="greet">
      <div className="w3-center">
        <h1 className="w3-center w3-animate-top hello-txt">Boundeye</h1>
        {text}
        {start}
      </div>
    </div>
  );
};

export default Greet;
