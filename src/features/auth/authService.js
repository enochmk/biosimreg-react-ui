import axios from '../../customs/axios';

// login user
export const loginWithUsernameAndPassword = async ({ username, password }) => {
  const response = await axios.post('/auth/login', { username, password });
  return response.data;
};

// get profile details
export const updateUserProfile = async ({ accessToken }) => {
  const response = await axios.get('/profile', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

// logout user
export const logout = async () => {
  await axios.post('/auth/logout');
};
