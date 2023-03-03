import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const TopTalkShows = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Banner />
      </div>
      <div>
        <TopTalkShows />
        <TopTalkShows />
        <TopTalkShows />
        <TopTalkShows />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TopTalkShows;
