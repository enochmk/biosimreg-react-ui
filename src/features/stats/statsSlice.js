import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as statsService from './statsService';

const INITIAL_STATE = {
  personalStats: null,
  isLoading: false,
  isError: false,
  message: '',
};

export const getStats = createAsyncThunk(
  'users/stats',
  async (user, thunkAPI) => {
    const { msisdn, token } = user;

    try {
      return await statsService.getStatistics({ msisdn, token });
    } catch (error) {
      console.log(error);
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

// slice
export const statsSlice = createSlice({
  name: 'stats',
  initialState: INITIAL_STATE,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = '';
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStats.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
        state.user = null;
      })
      .addCase(getStats.fulfilled, (state, action) => {
        state.personalStats = action.payload;
        state.loggedIn = true;
        state.isLoading = false;
        state.message = '';
      })
      .addCase(getStats.rejected, (state, action) => {
        state.personalStats = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

// actions
export const { reset } = statsSlice.actions;

// Reducer
export default statsSlice.reducer;
