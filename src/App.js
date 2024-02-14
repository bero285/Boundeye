import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Greet from "./Components/Greet/Greet";
import Search from "./Components/Search-Field/Search";
import MapUcard from "./Components/Search-Field/Ucard-Map/Map-Ucard";
import Button from "./Components/Search-Field/Card-Button/Button";
// import Back from './background.jpg'

function App() {
  const btnClick = () => {
    setAppear(!appear);
    setWord(!word);
  };
  // usestate area
  const [word, setWord] = useState(false);
  // state for Card appearance
  const [appear, setAppear] = useState(false);

  // useEffect area

  // App component
  return (
    // loader
    <div className="start">
      <div className="App">
        <Navbar></Navbar>
        <Greet className="greet-component"></Greet>
        <Search></Search>
        <div className="btn-card-cont">
          <Button
            className="find-btn"
            onClick={btnClick}
            word={word ? "Clear" : "Search"}
          ></Button>

          {appear ? <MapUcard className="mapcard"></MapUcard> : null}
        </div>
        <div className="people-container-main"></div>
      </div>
    </div>
  );
}

export default App;
