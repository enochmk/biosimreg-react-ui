import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeTitle } from '../../features/navbar/navbarSlice';

function Registration() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle('Passport Registration'));
  }, []);

  return <h2>Registration</h2>;
}

export default Registration;
