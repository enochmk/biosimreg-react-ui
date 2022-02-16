import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as authService from './authService';

const user = JSON.parse(localStorage.getItem('user'));

const INITIAL_STATE = {
  user: user ? user : null,
  loggedIn: user ? true : false,
  isLoading: false,
  isError: false,
  message: '',
};

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  const { username, password } = user;

  try {
    return await authService.loginWithUsernameAndPassword({
      username,
      password,
    });
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk(
  'auth/logout',
  async (user, thunkAPI) => {
    return await authService.logout();
  },
);

// slice
export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    signOut: (state) => {
      localStorage.removeItem('user');
      state.user = null;
      state.loggedIn = false;
    },
    reset: (state) => {
      state.isLoading = false;
      state.isError = '';
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = '';
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loggedIn = true;
        state.isLoading = false;
        state.message = '';
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.loggedIn = false;
      });
  },
});

// actions
export const { reset } = authSlice.actions;

// Reducer
export default authSlice.reducer;
