import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Coins from './Coins';
import Exchanges from './Exchanges';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/exchanges/:exchange" element={<Exchanges />} />
      </Routes>
    </Router>
  );
}

export default App;
