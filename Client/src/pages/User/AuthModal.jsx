import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Login from '../../components/User-UI/Login';
import Signup from '../../components/User-UI/Signup';

const AuthModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const [currentPage, setCurrentPage] = useState('login');
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} handleClose={handleClose} />}
        {currentPage === 'signup' && <Signup setCurrentPage={setCurrentPage} handleClose={handleClose} />}
      </Dialog>
    </>
  );
};

export default AuthModal;
