import { Component, useState } from 'react'
import './App.css';
import LandingPage from './components/LandingPage';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;