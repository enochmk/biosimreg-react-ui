import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/api/v1';

// login user
export const loginWithUsernameAndPassword = async ({ username, password }) => {
  const API_URL = SERVER_URL + '/auth/login';
  const response = await axios.post(API_URL, { username, password });

  // set data to localStorage
  if (response.data) {
    // localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// get profile details
export const getUserProfile = async ({ accessToken }) => {
  const API_URL = SERVER_URL + '/profile';
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

// logout user
export const logout = async () => {
  localStorage.removeItem('user');
};
