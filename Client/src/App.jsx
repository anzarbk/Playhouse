import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Talkshows from './pages/Talkshows';
import MusicConcerts from './pages/MusicConcerts';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/talkshows" element={<Talkshows />} />
        <Route path="/music-concerts" element={<MusicConcerts />} />
      </Routes>
    </Router>
  );
}

export default App;
