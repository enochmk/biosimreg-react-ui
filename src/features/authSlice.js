import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  value: { user: {}, loggedIn: false },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    logUserIn: (state, action) => {
      state.value.user = action.payload;
      state.value.loggedIn = true;
    },
    logUserOut: (state, action) => {
      state.value = INITIAL_STATE;
    },
  },
});

export const { logUserIn, logUserOut } = authSlice.actions;

export default authSlice.reducer;
