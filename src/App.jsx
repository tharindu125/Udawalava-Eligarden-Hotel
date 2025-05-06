// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap';

import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/contact';
import Footer from './components/Footer';
import RoomDetails from './pages/Rooms';
import Restaurant from './pages/Restaurant'
import Gallery from './pages/Gallery';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/RoomDetails" element={<RoomDetails />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
