import axios from 'axios';

const API_URL = '/api/v1/auth/login';

// login user
export const loginWithUsernameAndPassword = async ({ username, password }) => {
  const response = await axios.post(API_URL, { username, password });

  // set data to localStorage
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// logout user
export const logout = async () => {
  localStorage.removeItem('user');
};
