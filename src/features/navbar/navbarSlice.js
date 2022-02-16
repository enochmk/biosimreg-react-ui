import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  title: 'Navbar',
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: INITIAL_STATE,
  reducers: {
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

// actions
export const { changeTitle } = navbarSlice.actions;

// reducer
export default navbarSlice.reducer;
