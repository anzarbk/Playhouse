import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const roleSlice = createSlice({
  name: 'role',
  initialState: {
    data: null,
  },
  reducers: {
    setRole: (state, action) => {
      state.data = action.payload;
    },
    removeRole: (state) => {
      state.data = null;
    },
  },
});

export const roleDataActions = roleSlice.actions;

export default roleSlice.reducer;
