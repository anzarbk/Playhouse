import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const movies = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Banner />
      </div>
          <div>
          <TopMovies />
          <TopMovies />
          <TopMovies />
          <TopMovies />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default movies;
