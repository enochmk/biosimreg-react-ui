import { configureStore } from '@reduxjs/toolkit';

import navbarReducer from '../features/navbar/navbarSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    auth: authReducer,
  },
});

export default store;
