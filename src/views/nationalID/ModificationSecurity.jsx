import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeTitle } from '../../features/navbar/navbarSlice';

const SecurityModification = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle('Dashboard'));
  }, []);

  return <h2>SecurityModification</h2>;
};

export default SecurityModification;
