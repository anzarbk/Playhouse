import React, { useState } from 'react';
import Footer from '../../components/User-UI/Footer';
import Navbar from '../../components/User-UI/Navbar';
import Banner from '../../components/User-UI/Banner';
import Movies from '../../components/User-UI/Movies';
import StandUp from '../../components/User-UI/StandUp';
import MusicConcert from '../../components/User-UI/MusicConcert';
import AuthModal2 from './AuthModal2';
// import TopMovies from '../components/TopMovies';
// import TopTalkShows from '../components/hallDetails';
// import TopMusicConcerts from '../components/concertDetails';

function home() {
  return (
    <div className="grid">
      <div>
        <div>
          <Navbar />
          <Banner />
        </div>
        <div className="flex flex-col gap-2 mt-8">
          <Movies />
          <StandUp />
          <MusicConcert />
          {/* <AuthModal2 open={open} /> */}
          {/* <TopTalkShows />
          <TopMusicConcerts />  */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default home;
