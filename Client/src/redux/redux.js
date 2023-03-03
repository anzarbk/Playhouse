import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import tokenReducer from './tokenSlice';
import roleReducer from './roleSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    token: tokenReducer,
    role: roleReducer,
  },
});
