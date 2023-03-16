import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    data: null,
  },
  reducers: {
    setMovie: (state, action) => {
      state.data = action.payload;
    },
    removeMovie: (state) => {
      state.data = null;
    },
  },
});

export const movieDataActions = movieSlice.actions;

export default movieSlice.reducer;
