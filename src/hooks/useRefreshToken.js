import { useDispatch } from 'react-redux';

import axios from '../customs/axios';
import { updateAccessToken } from '../features/auth/authSlice';

// @desc Use request with cookie to refresh accessToken
const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    try {
      const response = await axios.get('/auth/refresh', {
        withCredentials: true,
      });

      // ? update access token
      dispatch(updateAccessToken(response.data.accessToken));

      return response.data.accessToken;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };

  return refresh;
};

export default useRefreshToken;
