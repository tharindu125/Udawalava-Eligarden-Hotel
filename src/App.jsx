// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/contact';
import Footer from './components/Footer';
import RoomDetails from './pages/Rooms';
import Restaurant from './pages/Restaurant'
import Gallery from './pages/Gallery';
import FloatingButtons from './components/FloatingButtons';
import SafariTours from './pages/SafariTours'
import UdawalaweSafariTours from './pages/UdawalaweSafariTours';
import SeasonalTours from './pages/SeasonalTours';

function App() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay ensures page renders
      }
    }
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/RoomDetails" element={<RoomDetails />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/SafariTours" element={<SafariTours />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/UdawalaweSafariTours" element={<UdawalaweSafariTours />} />
        <Route path='/SeasonalTours' element={<SeasonalTours/>} />
      </Routes>
      <FloatingButtons />
      <Footer />
    </>
  )
}

export default App
