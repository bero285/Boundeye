import React from "react";
import {useState} from "react"
import fluData from "../../Data/FluData";
import Fcard from "../Flu-Card/Fcard";
import MapPeople from "../ManCard/MapPeople"
import "w3-css/w3.css";
import "./Fcard-Map.css";
const MapFcard = (props) => {
  const [show,setShow] = useState(false)
  function showCard(){
    setShow(!show)
    console.log("aa")
  }
  return (
    // card mapping and taking data from object
    <div className="row">
    <MapPeople rate = "8"/>
      {fluData.map((flu) => {
        return (
          <div >
          <Fcard
            name={flu.name}
            description={flu.description}
            rate={flu.dangerRate}
            remedies={flu.remedies}
            RecomendedDoctor={flu.RecomendedDoctor}
            className="card"
            onClick={showCard}
          />
         
          </div>

        );
        
      })}
      { show ? ( fluData.map((dan)=>{
        return <MapPeople rate = {dan.rate} exp={dan.RecomendedDoctor}/>
      })): null}
      
    </div>
  );
};

export default MapFcard;
