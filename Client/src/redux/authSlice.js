import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    signup: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
