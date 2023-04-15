import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import Login from '../components/Login';
// import Signup from '../components/Signup';

const AuthModal2 = ({ mov, index }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const clickImage = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  // const [currentPage, setCurrentPage] = useState('');
  return (
    <>
      <Slide index={index}>
        <div className="flex relative w-fit ">
          <img src={mov.std} alt="sitting area" onClick={clickImage} className="object-cover object-center w-[11.3rem] xl:w-[18.2rem] cursor-pointer" />
        </div>
        <Dialog fullWidth onClose={handleClose} open={open}>
          <div className="flex w-full ">
            <img src={mov.std} className="object-cover object-center w-[11.3rem] xl:w-[18.2rem] " />
            <div className="flex flex-col px-4 gap-20">
              <div className="p-4">
                <span className="text-3xl">Venue</span>
                <p className="py-8 text-sm">{mov.details}</p>
              </div>
              <div className="border-2 border-red-600 rounded-md w-full flex justify-center bg-red-600 ">
                <span className="text-center text-white">Slot booking is not available right now </span>
              </div>
            </div>
          </div>
        </Dialog>
      </Slide>
    </>
  );
};

export default AuthModal2;
