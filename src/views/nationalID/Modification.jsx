import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeTitle } from '../../features/navbarSlice';

function Modification() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle('NIA Re-Registration'));
  }, []);

  return (
    <div className="container p-4 m-4 mx-auto my-auto">
      <h2 className="text-3xl text-primary">BasicModification</h2>
    </div>
  );
}

export default Modification;
