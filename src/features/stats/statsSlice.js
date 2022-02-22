import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as service from './statsService';

const INITIAL_STATE = {
  data: null,
  isLoading: false,
  isError: false,
  message: '',
};

export const getStatistics = createAsyncThunk(
  'profile/stats',
  async (accessToken, thunkAPI) => {
    try {
      const data = await service.getStatistics({ accessToken: accessToken });
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

// slice
export const statsSlice = createSlice({
  name: 'statistics',
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
      .addCase(getStatistics.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
        state.user = null;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loggedIn = true;
        state.isLoading = false;
        state.message = '';
      })
      .addCase(getStatistics.rejected, (state, action) => {
        state.data = null;
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
