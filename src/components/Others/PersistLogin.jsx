import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import useRefreshToken from '../../hooks/useRefreshToken';
import { updateUserProfile } from '../../features/auth/authSlice';

// @desc Use cookie to persist login by acquiring access token from server
const PersistLogin = () => {
  const auth = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const newAccessToken = await refresh();
        dispatch(updateUserProfile({ accessToken: newAccessToken }));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    !auth.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, [dispatch, refresh, auth.accessToken]);

  return <>{isLoading ? <div>Loading...</div> : <Outlet />}</>;
};

export default PersistLogin;
