"use client";

import { CircleCheck, Hourglass, Trophy } from "lucide-react";

import { StatCard } from "./stat-card";

export const PersonalBoard = () => {
  return (
    <>
      <div className="flex flex-row gap-2 flex-wrap w-full">
        <StatCard
          title="Global Rank"
          subtitle="You are in the top 10% of all users."
          value={"12 / 136"}
          icon={Trophy}
        />
        <StatCard
          title="Solved Theorems"
          subtitle="You are in the top 5.5% of all users."
          value={"3 / 5"}
          icon={CircleCheck}
        />
        <StatCard
          title="Total Time Spent"
          subtitle="This is 1.5 hourse more than the average user."
          value={12.5}
          unit="hours"
          icon={Hourglass}
        />
      </div>
      <div className="w-full flex flex-row gap-2 flex-wrap mt-2">
        <hr className="w-full my-4" />
        <div>SOME DATA VIZ WITH RECHART</div>
      </div>
    </>
  );
};
