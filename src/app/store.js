import { configureStore } from '@reduxjs/toolkit';

import navbarReducer from '../features/navbar/navbarSlice';
import authReducer from '../features/auth/authSlice';
import statsReducer from '../features/stats/statsSlice';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    auth: authReducer,
    stats: statsReducer,
  },
});

export default store;
