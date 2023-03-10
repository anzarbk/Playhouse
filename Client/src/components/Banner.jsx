import React from 'react';
import Flower from '../images/banner.jpg';
const Banner = () => {
  return (
    <div className="flex justify-center">
      <img src={Flower} className="w-full" />
    </div>
  );
};

export default Banner;
