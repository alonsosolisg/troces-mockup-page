import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-green-700 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Subscription"
                  statTitle="Lifetime"
                  statPercentColor="text-emerald-500"
                  statIconName="fas fa-star-of-life"
                  statIconColor="bg-green-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                    statSubtitle="Guardians"
                    statTitle="2"
                    statPercentColor="text-emerald-500"
                    statIconName="fas fa-user-shield"
                    statIconColor="bg-green-500"
                  />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                    statSubtitle="Status"
                    statTitle="Alive"
                    statPercentColor="text-emerald-500"
                    statIconName="fas fa-heartbeat"
                    statIconColor="bg-green-500"
                  />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                    statSubtitle="Net Worth"
                    statTitle="$ ******"
                    statPercentColor="text-emerald-500"
                    statIconName="fas fa-money-check-alt"
                    statIconColor="bg-green-500"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
