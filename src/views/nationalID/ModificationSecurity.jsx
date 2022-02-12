import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeTitle } from '../../features/navbarSlice';

function SecurityModification() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle('Dashboard'));
  }, []);

  return <h2>SecurityModification</h2>;
}

export default SecurityModification;
