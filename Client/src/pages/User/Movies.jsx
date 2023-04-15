import React from 'react';
import Footer from '../../components/User-UI/Footer';
import Navbar from '../../components/User-UI/Navbar';
import Banner from '../../components/User-UI/Banner';
import MovieCard from '../../components/User-UI/MovieCard';

const Movies = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
        <Banner />
      </div>
      <div className="m-4 w-full flex">
        <MovieCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Movies;
