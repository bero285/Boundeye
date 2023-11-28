import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Greet from './Components/Greet/Greet';
import Search from './Components/Search-Field/Search';
import MapFcard from './Components/Search-Field/Fcard-Map/Map-Fcard';
import Button from './Components/Search-Field/Card-Button/Button';
// import Back from './background.jpg'
import MapPeople from './Components/Search-Field/ManCard/MapPeople';
function App() {
  const btnClick = () => {
    setAppear(!appear)
    setWord(!word)
  }
  // usestate area
  const [word, setWord] = useState(false)
  // state for Card appearance
  const [appear, setAppear] = useState(false);
  // state for loader animation
  const [loading, setLoading] = useState(false);
  // state for people card appearence
  const [showPeople, setShowPeople] = useState(false)
  // useEffect area

  // useEffect for loading gif and timeout
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);

  // App component
  return (
    // loader
    <div className="start">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        // actual components
        <div className='App'>
          <Navbar></Navbar>
          <Greet className='greet-component'></Greet>
          <Search></Search>
          <div className='btn-card-cont'>
            <Button className='find-btn' onClick={btnClick} word={word ? 'დამალვა' : 'ძებნა'}></Button>
            {/* shows mapping cards when useState changes and hides them */}
            {appear ? <MapFcard className='mapcard' onClick={() => setShowPeople(!showPeople)}></MapFcard> : null}
          </div>
          <div className='people-container-main'>
            {/* {showPeople ? <MapPeople className='people-container' /> : null} */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
