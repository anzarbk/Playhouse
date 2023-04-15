import React, { useState } from 'react';
import { AppBar, Toolbar, Stack, Button, ButtonGroup } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../ui/common/Logo';
import Search from '../../ui/common/Search';
import Location from '../../ui/common/Location';
import Account from '../../ui/common/Account';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const handleNavbar = () => {
    setNavbar(true);
  };
  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: '#e26319',
          height: '48px',
          position: 'relative',
        }}
      >
        <div className="flex justify-between w-full px-4 bg-[#C91B1B] absolute h-7">
          <Link to="/">
            <Logo />
          </Link>

          <Search />
          <Stack direction="row">
            <Location sx={{ fontSize: 'small' }} />
            <Account />
          </Stack>
        </div>
        <div className=" w-full h-10 mt-12 bg-blue-900 flex justify-center items-center">
          <div className="hidden sm:flex items-center justify-around w-6/12 h-10">
            <p className="font-bold text-sm cursor-pointer" onClick={() => navigate('/dashboard')}>
              DASHBOARD
            </p>
            <p className="font-bold text-sm cursor-pointer" onClick={() => navigate('/profile')}>
              PROFILE
            </p>
            <p className="font-bold text-sm cursor-pointer" onClick={() => navigate('/theatre')}>
              THEATRE
            </p>
            <p className="font-bold text-sm cursor-pointer " onClick={() => navigate('/seatcharter')}>
              SEAT CHARTER
            </p>
            <p className="font-bold text-sm cursor-pointer " onClick={() => navigate('/show')}>
              SHOWS
            </p>
          </div>
          <div className="flex sm:hidden justify-end w-full px-6 ">
            <div onClick={handleNavbar}>
              <MenuIcon fontSize="large" />
            </div>
            {navbar && (
              <div>
                <ul className=" grid justify-center gap-2 mt-32 ml-5 bg-[#2a3fbb] rounded-sm hover:shadow-md hover:shadow-red-600 p-4">
                  <li className="font-bold text-sm" onClick={() => navigate('/dashboard')}>
                    DASHBOARD
                  </li>
                  <li className="font-bold text-sm" onClick={() => navigate('/profile')}>
                    PROFILE
                  </li>
                  <li className="font-bold text-sm" onClick={() => navigate('/theatre')}>
                    THEATRE
                  </li>
                  <li className="font-bold text-sm" onClick={() => navigate('/seatcharter')}>
                    SEAT CHARTER
                  </li>
                  <li className="font-bold text-sm" onClick={() => navigate('/show')}>
                    SHOWS
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
