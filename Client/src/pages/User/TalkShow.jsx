import React from 'react';
import Footer from '../../components/User-UI/Footer';
import Navbar from '../../components/User-UI/Navbar';
import Banner from '../../components/User-UI/Banner';
import StandUpCard from '../../components/User-UI/StandUpCard';

const TalkShow = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
        <Banner />
      </div>
      <div className="m-4 w-full flex">
        <StandUpCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TalkShow;
