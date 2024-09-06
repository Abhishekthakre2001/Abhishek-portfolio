// src/Components/SplashScreen.js
import React, { useEffect, useState } from 'react';
import '../Style/SplashScreen.css'; // Create this CSS file for styling
import Logo from '../Images/Splashlogo.png'

const SplashScreen = ({ onFinished }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished(); // Call the callback function to hide the splash screen
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [onFinished]);

  return (
    <div className="splash-screen">
      <img src={Logo} alt="Logo" className="logo" />
    </div>
  );
};

export default SplashScreen;
