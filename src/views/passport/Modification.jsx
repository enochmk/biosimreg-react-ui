import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeTitle } from '../../features/navbar/navbarSlice';

const Modification = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle('Passport Re-Registration'));
  }, []);

  return <h2>Modification</h2>;
};

export default Modification;
