import React from "react";
import { useState } from "react";
import uniDAta from "../../Data/UniData";
import Ucard from "../Uni-Card/Ucard";

import "w3-css/w3.css";
import "./Ucard-Map.css";
const MapFcard = (props) => {
  const [show, setShow] = useState(false);
  function showCard() {
    setShow(!show);
  }
  return (
    // card mapping and taking data from object
    <div className="row">
      {uniDAta.map((uni, index) => {
        return (
          <div key={index}>
            <Ucard
              name={uni.name}
              description={uni.description}
              image={uni.image}
              className="card"
              onClick={showCard}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MapFcard;
