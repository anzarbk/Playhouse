import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import tokenReducer from './tokenSlice';
import roleReducer from './roleSlice';
import theatreReducer from './theatreSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    token: tokenReducer,
    role: roleReducer,
    theatre: theatreReducer,
  },
});
