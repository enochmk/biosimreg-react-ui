import React from 'react';

import CardStats from '../Cards/CardStats';

export default function HeaderStats({ data }) {
  return (
    <>
      <div className="relative bg-blue-500 md:pt-32 pb-32 pt-12 w-full">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Linking"
                  statTitle={data.total_linking_count}
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since launch"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total BCAP"
                  statTitle={data.total_bcap_count}
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-red-500"
                  statDescripiron="Since launch"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Daily Linking"
                  statTitle={data.daily_linking_count}
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-orange-500"
                  statDescripiron="Today"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Daily BCAP"
                  statTitle={data.daily_bcap_count}
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron="today"
                  statIconName="fas fa-percent"
                  statIconColor="bg-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
