import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      console.log('sdfsdfsd');
    },
    removeUser: (state) => {
      state.data = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

// const userData = useSelector((state)=> state.user.data)\
// dispatch(userDataActions.setUser(userData));
