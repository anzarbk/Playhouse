import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import AuthModal from '../../pages/User/AuthModal';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/authSlice';
import { roleDataActions } from '../../redux/roleSlice';
import { tokenActions } from '../../redux/tokenSlice';
import { userDataActions } from '../../redux/userSlice';

const Account = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [opens, setOpens] = React.useState(false);
  const anchorRef = React.useRef(null);

  const navigate = useNavigate();

  const currentUser = useSelector((state) => state?.user?.data);
  const isAuth = useSelector((state) => state?.auth?.isAuth);
  console.log(isAuth);

  // const handleModalClick = () => {
  //   if (isAuth) navigate('/profile');
  //   else setOpen(true);
  // };

  const handleToggle = () => {
    if (isAuth) setOpens((prevOpen) => !prevOpen);
    else setOpen(true);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpens(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpens(false);
    } else if (event.key === 'Escape') {
      setOpens(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(opens);
  React.useEffect(() => {
    if (prevOpen.current === true && opens === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = opens;
  }, [opens]);

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(authActions.logout());
        dispatch(roleDataActions.removeRole(null));
        dispatch(tokenActions.removeToken(null));
        dispatch(userDataActions.removeUser(null));
        setOpens(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Stack direction="row" spacing={2}>
        {/* <Paper>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper> */}
        <div>
          {/* <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Dashboard
          </Button> */}
          <IconButton
            ref={anchorRef}
            id="composition-button"
            aria-controls={opens ? 'composition-menu' : undefined}
            aria-expanded={opens ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            // onClick={handleModalClick}
          >
            <AccountCircleIcon size="small" />
          </IconButton>
          <Popper open={opens} anchorEl={anchorRef.current} role={undefined} placement="bottom-start" transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                  // position: 'absolute',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={opens} id="composition-menu" aria-labelledby="composition-button" onKeyDown={handleListKeyDown}>
                      <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
                      <MenuItem onClick={logOut}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>

      <AuthModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Account;

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
// import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
// import MenuList from '@mui/material/MenuList';
// import Stack from '@mui/material/Stack';

// export default function MenuListComposition() {
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen(false);
//     } else if (event.key === 'Escape') {
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   return (
//     <Stack direction="row" spacing={2}>
//       <Paper>
//         <MenuList>
//           <MenuItem>Profile</MenuItem>
//           <MenuItem>My account</MenuItem>
//           <MenuItem>Logout</MenuItem>
//         </MenuList>
//       </Paper>
//       <div>
//         <Button
//           ref={anchorRef}
//           id="composition-button"
//           aria-controls={open ? 'composition-menu' : undefined}
//           aria-expanded={open ? 'true' : undefined}
//           aria-haspopup="true"
//           onClick={handleToggle}
//         >
//           Dashboard
//         </Button>
//         <Popper
//           open={open}
//           anchorEl={anchorRef.current}
//           role={undefined}
//           placement="bottom-start"
//           transition
//           disablePortal
//         >
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{
//                 transformOrigin:
//                   placement === 'bottom-start' ? 'left top' : 'left bottom',
//               }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList
//                     autoFocusItem={open}
//                     id="composition-menu"
//                     aria-labelledby="composition-button"
//                     onKeyDown={handleListKeyDown}
//                   >
//                     <MenuItem onClick={handleClose}>Profile</MenuItem>
//                     <MenuItem onClick={handleClose}>My account</MenuItem>
//                     <MenuItem onClick={handleClose}>Logout</MenuItem>
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </div>
//     </Stack>
//   );
// }

// import React, { useState } from 'react';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { IconButton } from '@mui/material';
// import AuthModal from '../../pages/AuthModal';
// import Profile from '../../pages/Profile';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Box, Menu, MenuItem, styled, Typography } from '@mui/material';

// const Account = () => {
//   const [open, setOpen] = useState(false);
//   const [option, setOption] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const navigate = useNavigate();

//   const currentUser = useSelector((state) => state?.user?.data);
//   const isAuth = useSelector((state) => state?.auth?.isAuth);
//   console.log(isAuth);
//   const handleClose = () => {
//     setOption(false);
//   };

//   const handleModalClick = () => {
//     if (isAuth) {
//       setOption(true);
//     }
//     // navigate('/profile');
//     else {
//       setOpen(true);
//       setOption(false);
//     }
//   };

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <IconButton onClick={handleMenuOpen}>
//         <AccountCircleIcon size="small" />

//         <div>
//           <Menu
//             onClose={handleMenuClose}
//             // onBlur={handleClose}
//             anchorEl={anchorEl}
//             id="demo-positioned-menu"
//             aria-labelledby="demo-positioned-button"
//             open={Boolean(anchorEl)}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//           >
//             <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
//             <MenuItem
//             // onClick={handleLogout}
//             >
//               Logout
//             </MenuItem>
//           </Menu>
//         </div>
//       </IconButton>
//       <AuthModal open={open} setOpen={setOpen} />
//     </div>
//   );
// };

// export default Account;
