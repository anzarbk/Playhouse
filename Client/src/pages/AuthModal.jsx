import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Otp from '../components/Otp';

const AuthModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const [currentPage, setCurrentPage] = useState('login');
  const [auth, setAuth] = useState(false);
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    if (auth) setOpen(false);
  }, [auth]);

  useEffect(() => {
    if (open) setAuth(false);
  }, [open]);

  useEffect(() => {
    if (verify) setAuth(true);
    setCurrentPage('login');
  }, [verify]);
  return (
    <>
      <Dialog fullWidth onClose={handleClose} open={open}>
        {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} setAuth={setAuth} handleClose={handleClose} />}
        {currentPage === 'signup' && <Signup setCurrentPage={setCurrentPage} handleClose={handleClose} />}
        {currentPage === 'otp' && <Otp setVerify={setVerify} handleClose={handleClose} />}
      </Dialog>
    </>
  );
};

export default AuthModal;
