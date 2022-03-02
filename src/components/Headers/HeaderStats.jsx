import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateStats } from '../../features/stats/statsSlice';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import CardStats from '../Cards/CardStats';

const HeaderStats = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.statistics.data);
  const axios = useAxiosPrivate();

  useEffect(() => {
    axios.get('/profile/stats').then((response) => {
      dispatch(updateStats(response.data));
    });
  }, [dispatch, axios]);

  return (
    <section className="relative bg-blue-500 md:pt-32 pb-32 pt-12 w-full">
      <main className="px-4 md:px-10 mx-auto w-full flex flex-wrap">
        <article className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Total Linking"
            statTitle={data?.linking?.total_linking_count.toString() || 'N/A'}
            statArrow="up"
            statPercent=""
            statPercentColor="text-emerald-500"
            statDescripiron="Since launch"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </article>
        <article className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Total BCAP"
            statTitle={data?.linking?.total_bcap_count.toString() || 'N/A'}
            statArrow="up"
            statPercent=""
            statPercentColor="text-red-500"
            statDescripiron="Since launch"
            statIconName="fas fa-chart-pie"
            statIconColor="bg-orange-500"
          />
        </article>
        <article className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Daily Linking"
            statTitle={data?.linking?.daily_linking_count.toString() || 'N/A'}
            statArrow="up"
            statPercent=""
            statPercentColor="text-orange-500"
            statDescripiron="Today"
            statIconName="fas fa-users"
            statIconColor="bg-pink-500"
          />
        </article>
        <article className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Daily BCAP"
            statTitle={data?.linking?.daily_bcap_count.toString() || 'N/A'}
            statArrow="up"
            statPercent=""
            statPercentColor="text-emerald-500"
            statDescripiron="today"
            statIconName="fas fa-percent"
            statIconColor="bg-blue-500"
          />
        </article>
      </main>
    </section>
  );
};

export default HeaderStats;
