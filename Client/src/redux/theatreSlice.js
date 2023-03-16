import { createSlice } from '@reduxjs/toolkit';

export const theatreSlice = createSlice({
  name: 'theatre',
  initialState: {
    data: null,
  },
  reducers: {
    setTheatre: (state, action) => {
      state.data = action.payload;
    },
    removeTheatre: (state) => {
      state.data = null;
    },
  },
});

export const theatreDataActions = theatreSlice.actions;

export default theatreSlice.reducer;
