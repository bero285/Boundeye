import React from "react";
import { useState } from "react";
import "w3-css/w3.css";
import "./Ucard.css";

const Fcard = (props) => {
  // actual card component
  return (
    // <div>
    <div className="Fcard-container">
      <div className="container">
        <div className="card w3-center">
          <div className="card__image-container">
            <img className="card__image" src={props.image} alt="" />
          </div>

          <div className="card__content">
            <h1 className="card__title w3-center">{props.name}</h1>
            <p className="desc w3-center">
              <b>Description:</b> {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fcard;
