import { configureStore } from '@reduxjs/toolkit';

import navbarReducer from './features/navbarSlice';
import authReducer from './features/authSlice';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    auth: authReducer,
  },
});

export default store;
