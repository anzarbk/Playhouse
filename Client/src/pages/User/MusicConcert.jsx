import React from 'react';
import Footer from '../../components/User-UI/Footer';
import Navbar from '../../components/User-UI/Navbar';
import Banner from '../../components/User-UI/Banner';
import MusicConcertCard from '../../components/User-UI/MusicConcertCard';

const MusicConcert = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
        <Banner />
      </div>
      <div className="m-4 w-full flex">
        <MusicConcertCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MusicConcert;
