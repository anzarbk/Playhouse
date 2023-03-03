import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import AuthModal from '../../pages/AuthModal';
const Account = () => {
  const [open, setOpen] = useState(false);

  const handleModalClick = () => {
    setOpen(true);
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
