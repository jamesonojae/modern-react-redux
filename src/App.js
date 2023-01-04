import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Hotel from './components/pages/Hotels/Hotel';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotel />} />
      </Routes>
    </>
  );
}

export default App;
