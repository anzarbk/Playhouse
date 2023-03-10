import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const AuthModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const [currentPage, setCurrentPage] = useState('login');
  return (
    <>
      <Dialog fullWidth onClose={handleClose} open={open}>
        {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} handleClose={handleClose} />}
        {currentPage === 'signup' && <Signup setCurrentPage={setCurrentPage} handleClose={handleClose} />}
      </Dialog>
    </>
  );
};

export default AuthModal;
