import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  value: 'Navbar',
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: INITIAL_STATE,
  reducers: {
    changeTitle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTitle } = navbarSlice.actions;

export default navbarSlice.reducer;
