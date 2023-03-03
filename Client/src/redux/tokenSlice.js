import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    data: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.data = action.payload;
    },
    removeToken: (state) => {
      state.data = null;
    },
  },
});

export const tokenDataActions = tokenSlice.actions;

export default tokenSlice.reducer;
