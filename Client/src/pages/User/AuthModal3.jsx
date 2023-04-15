import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// import Login from '../components/Login';
// import Signup from '../components/Signup';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

const AuthModal2 = ({ mov, index }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const clickImage = (e) => {
    e.preventDefault();
    setOpen(true);
    set;
  };
  // const [currentPage, setCurrentPage] = useState('');
  return (
    <>
      <Card index={index} sx={{ maxWidth: 200, height: 300 }}>
        <CardActionArea>
          <CardMedia component="img" height="270" onClick={clickImage} image={mov.std} />
        </CardActionArea>
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
      </Card>
    </>
  );
};

export default AuthModal2;
