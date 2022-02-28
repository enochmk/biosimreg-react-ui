import axios from '../../customs/axios';

// login user
export const loginWithUsernameAndPassword = async ({ username, password }) => {
  const response = await axios.post('/auth/login', { username, password });

  // set data to localStorage
  if (response.data) {
    // localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// get profile details
export const getUserProfile = async ({ accessToken }) => {
  const response = await axios.get('/profile', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

// logout user
export const logout = async () => {
  localStorage.removeItem('user');
  await axios.post('/auth/logout');
};
