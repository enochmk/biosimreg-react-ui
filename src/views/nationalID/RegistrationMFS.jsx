import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeTitle } from '../../features/navbarSlice';

function Registration() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle('NIA MFS-Registration'));
  }, []);

  return <h2>MFS Registration</h2>;
}

export default Registration;
