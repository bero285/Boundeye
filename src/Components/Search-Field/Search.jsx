import React, { useEffect, useState} from "react";
import Input from "./Input/Input";
import "./Search.css";
import "w3-css/w3.css";
import Button from "./Card-Button/Button";
const Search = (props) => {
  // UseState Area
  // state for inputs
  const [show, setShow] = useState([]);
  // function for button to change state and show input
  const onShow = (props) => {
    setShow([...show, show.length]);
    console.log(show);
  };
  // actual component
  return (
    <div className="Search-field w3-center">
      <h2 className="w3-center">შეიყვანეთ თქვენი სიმპტომები</h2>
      <Button
        className="w3-button w3-gray w3-hover-teal w3-center"
        onClick={onShow}
        word={"შეყვანა"}
      ></Button>
      {/* input mapping from array declared in the state*/}
      <div className="inputs">
        {show.map((x) => (
          <Input key={x} />
        ))}
      </div>
    </div>
  );
};

export default Search;
