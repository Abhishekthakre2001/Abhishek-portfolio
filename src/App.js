// src/App.js
import React, { useState } from 'react';
// import Navbar from './Components/Navbar';
import Routeing from './Components/Routeing';
import SplashScreen from './Components/SplashScreen';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinished = () => {
    setShowSplash(false); // Hide the splash screen
  };

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onFinished={handleSplashFinished} />
      ) : (
       <Routeing />
      )}
    </div>
  );
}

export default App;
