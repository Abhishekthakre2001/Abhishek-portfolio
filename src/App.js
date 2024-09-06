import React, { useState, useEffect } from 'react';
// import Navbar from './Components/Navbar';
import Routeing from './Components/Routeing';
import SplashScreen from './Images/Splashlogo.png'; // Assuming it's an image, adjust the path as needed
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <img src={SplashScreen} alt="Loading..." className="loader-image" />
        </div>
      ) : (
        <Routeing />
      )}
    </div>
  );
}

export default App;
