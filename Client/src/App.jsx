import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Theatre from './pages/Theatre';
import Hall from './pages/Hall';
import Concert from './pages/Concert';
import Profile from './pages/Profile';
import Movie from './pages/Movie';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/theatre" element={<Theatre />} />
        <Route path="/hall" element={<Hall />} />
        <Route path="/concert" element={<Concert />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
