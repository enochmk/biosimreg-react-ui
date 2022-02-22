import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as authService from './authService';

const user = JSON.parse(localStorage.getItem('user'));

const INITIAL_STATE = {
  user: user ? user : null,
  accessToken: null,
  isLoggedIn: user ? true : false,
  isLoading: false,
  isError: false,
  message: '',
};

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  const { username, password } = user;

  try {
    // get the access Token
    const loginResponse = await authService.loginWithUsernameAndPassword({
      username,
      password,
    });
    const accessToken = loginResponse.accessToken;

    // get user details using the accessToken
    const profileResponse = await authService.getUserProfile({ accessToken });
    const user = profileResponse.user;

    return { accessToken, user };
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
      state.accessToken = null;
      state.isLoggedIn = false;
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
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.message = '';
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.accessToken = null;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
        state.isLoggedIn = false;
      });
  },
});

// actions
export const { reset } = authSlice.actions;

// Reducer
export default authSlice.reducer;
