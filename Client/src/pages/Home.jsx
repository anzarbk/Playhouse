import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import TopMovies from '../components/TopMovies';
import TopTalkShows from '../components/TopTalkShows';
import TopMusicConcerts from '../components/TopMusicConcerts';


function home() {
  return (
    <div className="grid">
      <div>
        <div>
          <Navbar />
          <Banner />
        </div>
        <div className="grid justify-center p-4 mt-5">
          <TopMovies />
          <TopTalkShows />
          <TopMusicConcerts />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default home;
