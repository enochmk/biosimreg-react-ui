import { useDispatch } from 'react-redux';

import axios from '../customs/axios';
import { updateAccessToken } from '../features/auth/authSlice';

// @desc Use request with cookie to refresh accessToken
const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    const response = await axios.get('/auth/refresh', {
      withCredentials: true,
    });

    // ? update access token
    dispatch(updateAccessToken(response.data.accessToken));

    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
