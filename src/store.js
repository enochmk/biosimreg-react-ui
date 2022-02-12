import { configureStore } from '@reduxjs/toolkit';

import navbarReducer from './features/navbarSlice';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});

export default store;
