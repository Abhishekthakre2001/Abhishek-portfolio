import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Hireme from './Hireme.jsx';
import Home from './Home.jsx';
import Resume from './Resume.jsx';
import Services from './Services.jsx';
import Skills from './Skills.jsx';
import Footer from './Footer.jsx';
import Projectdetail from './Projectdetail.jsx';
// hook
import { useEffect } from "react";
import { messaging } from "./firebase.js";
import { getToken } from "firebase/messaging";

export default function Routeing() {

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      try {
        const token = await getToken(messaging, {
          vapidKey: "BHXz4b8x7Apqyn8DymaXlsFsxZCnhFLivmQtSGwBX_cGThA-F_ZzU6DifLeEp39rYKnE8JXlTxO_zsUa8ImsIGU",
        });
        console.log("Token Generated", token);
        // Send this token to server (db)
      } catch (error) {
        console.error("Error generating token: ", error);
      }
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Request user for notification permission
    requestPermission();
  }, []);


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Hireme" element={<Hireme />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projectdetail/:project" element={ <Projectdetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
