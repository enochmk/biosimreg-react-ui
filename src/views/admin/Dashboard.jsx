import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CardLineChart from '../../components/Cards/CardLineChart';
import CardBarChart from '../../components/Cards/CardBarChart';
import CardPageVisits from '../../components/Cards/CardPageVisits';
import CardSocialTraffic from '../../components/Cards/CardSocialTraffic';
import { changeTitle } from '../../features/navbar/navbarSlice';

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle('Dashboard'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
