import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const MusicConcerts = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Banner />
      </div>
      <div>
        <TopMusicConcerts />
        <TopMusicConcerts />
        <TopMusicConcerts />
        <TopMusicConcerts />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MusicConcerts;
