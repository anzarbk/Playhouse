import React from 'react';
import Flower from '../../images/Banner2.avif';
const Banner = () => {
  return (
    <div className="flex justify-center mt-10  bg-black">
      <img src={Flower} className="w-fit h-96" />
      {/* <div>coming soon</div> */}
    </div>
  );
};

export default Banner;
