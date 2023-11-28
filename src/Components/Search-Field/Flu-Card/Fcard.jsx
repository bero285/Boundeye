import React from "react";
import {useState} from "react"
import "w3-css/w3.css";
import "./Fcard.css";
import virus from "./virus.jpg";
import Button from "../Card-Button/Button";
import MapPeople from "../ManCard/MapPeople";
const Fcard = (props) => {
 
  // actual card component
  return (
    // <div>
    <div className="Fcard-container">
      <div className="container">
        <div className="card w3-center">
          <div className="card__image-container">
            <img className="card__image" src={virus} alt="" />
          </div>
          <svg className="card__svg" viewBox="0 0 800 500">
            <path
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
              stroke="transparent"
              fill="#DDDDDD"
            />
            <path
              className="card__line"
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
              stroke="pink"
              strokeWidth={3}
              fill="transparent"
            />
          </svg>
          <div className="card__content">
            <h1 className="card__title w3-center">{props.name}</h1>
            <p className="desc w3-center">
              <b>Description:</b> {props.description}
            </p>
            <p className="desc w3-center">
              <b>Remedies:</b> {props.remedies}
            </p>
            <p className="desc w3-center">
              <b>Danger Rate:</b> {props.rate}
            </p>
          </div>
          {/* Recomendations */}
          {props.rate > 9 ? (
            <div>
              <h2 className="w3-text-red">God Bless you</h2>
              <Button
                style={{ PaddingTop: "35px" }}
                className="w3-center"
                word="ნახვა"
                onClick={props.onClick}
              ></Button>
            </div>
          ) : props.rate > 8 && props.rate < 9 ? (
            <div>
              <h2 className="w3-text-red">Recomended GraveMan</h2>
              <Button
                style={{ PaddingTop: "35px" }}
                className="w3-center"
                word="ნახვა"
                onClick={props.onClick}
              ></Button>
            </div>
          ) : (
            <div>
              <h2 className="w3-text-teal">Recomended Doctor</h2>
              <Button
                style={{ PaddingTop: "35px" }}
                className="w3-center"
                word="ნახვა"
                onClick={props.onClick}
              ></Button>
            </div>
          )}
        </div>
      </div>
      
      {/* { show ? (<MapPeople exp={props.RecomendedDoctor} rate = {props.rate}/>): null}
      { show ?  (<MapPeople exp={props.RecomendedDoctor} rate = {props.rate}/>): null} */}
    </div>
  );
};

export default Fcard;
