import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import AuthModal from '../../pages/AuthModal';
import Profile from '../../pages/Profile';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state?.user?.data);
  const isAuth = useSelector((state) => state?.auth?.isAuth);
  console.log(isAuth);

  const handleModalClick = () => {
    if (isAuth) navigate('/profile');
    else setOpen(true);
  };

  return (
    <div>
      <IconButton onClick={handleModalClick}>
        <AccountCircleIcon size="small" />
      </IconButton>
      <AuthModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Account;
