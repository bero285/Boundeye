import React, { useEffect, useState } from "react";
import Input from "./Input/Input";
import "./Search.css";
import "w3-css/w3.css";

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
      <h2 className="w3-center">Search For Exchange Program</h2>

      <div className="inputs">
        <Input text="Search University" />
        <Input text="Search program" />
        <Input text="Search location" />
        <Input text="Search Pay" />
      </div>
    </div>
  );
};

export default Search;
