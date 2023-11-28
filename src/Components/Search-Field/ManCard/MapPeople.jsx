import React from "react";
import People from "./People";
import GraveManData from "../../Data/GraveMan";
import "./MapPeople.css"
const MapPeople = (props) => {
  var arr = []
  if(props.rate < 8){
     arr = GraveManData.filter(man=>{
      return man.dangerRate > 5 && man.dangerRate < 8
    })
  }
  // arr = GraveManData.filter(man=>{
  //   return man.exp == props.exp
  // })
  else if(props.rate > 8 && props.rate < 9){
    arr = GraveManData.filter(man=>{
      return man.dangerRate > 7.5 && man.dangerRate <9
    })
  }
  else if(props.rate > 9){
  arr = GraveManData.filter(man=>{
      return man.dangerRate > props.rate
    })
  }
 
  // {(man=>{
  //   man.dangerRate > 7
    
  // })}
  return (
    <div className="flu-doc-cont">
    {/* <h1>aaaaaaaa</h1> */}
      {arr.map((man) => (
        <People
          url={man.url}
          name={man.name}
          age={man.age}
          faith={man.faith}
          description={man.describe}
        />
      ))}
    </div>
  );
};

export default MapPeople;
