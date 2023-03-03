import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const SocialIcons = () => {
  return (
    <div className="bg-[#818080] h-14 flex justify-center items-center  inset-x-0 bottom-0">
      <div className="flex items-center justify-between w-28">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default SocialIcons;
