import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TheatreDetails } from '../components/theatreDetails';

const Theatre = () => {
  return (
    <div className="">
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <TheatreDetails />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Theatre;
