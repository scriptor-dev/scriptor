"use client";

import { CircleCheck, Hourglass, Trophy } from "lucide-react";

import { StatCard } from "./stat-card";
import { Barchart } from "./barchart";
import { Separator } from "@/components/ui/separator";

const weeklyProgress = [
  {
    name: "Mon",
    total: 2
  },
  {
    name: "Tue",
    total: 3.5
  },
  {
    name: "Wed",
    total: 4
  },
  {
    name: "Thu",
    total: 2
  },
  {
    name: "Fri",
    total: 1
  },
  {
    name: "Sat",
    total: 1
  },
  {
    name: "Sun",
    total: 3
  }
];

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
      <Separator className="my-6" />
      <div className="w-full flex flex-col gap-2">
        <Barchart
          title="Weekly Progress"
          subtitle="Hours spent on Theorems per day."
          unit="h"
          values={weeklyProgress}
        />
      </div>
    </>
  );
};
