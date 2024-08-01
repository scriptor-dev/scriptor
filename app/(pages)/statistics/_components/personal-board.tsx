"use client";

import { CircleCheck, Hourglass, Trophy } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { StatCard } from "./stat-card";

const weeklyProgress = [
  {
    name: "Monday",
    total: 2
  },
  {
    name: "Tuesday",
    total: 3.5
  },
  {
    name: "Wednesday",
    total: 4
  },
  {
    name: "Thursday",
    total: 2
  },
  {
    name: "Friday",
    total: 1
  },
  {
    name: "Saturday",
    total: 1
  },
  {
    name: "Sunday",
    total: 3
  }
];

const solvedTags = [
  {
    name: "python",
    total: 2,
    fill: "var(--chart-color-1)"
  },
  {
    name: "math",
    total: 7,
    fill: "var(--chart-color-2)"
  },
  {
    name: "r",
    total: 4,
    fill: "var(--chart-color-3)"
  },
  {
    name: "statistics",
    total: 2,
    fill: "var(--chart-color-4)"
  },
  {
    name: "sql",
    total: 1,
    fill: "var(--chart-color-5)"
  }
];

const weeklyProgressChartConfig = {
  total: {
    label: "Total",
    color: "hsl(var(--chart-1))"
  }
} satisfies ChartConfig;

const solvedTagsChartConfig = {
  python: {
    label: "Python",
    color: "hsl(var(--chart-1))"
  },
  math: {
    label: "Math",
    color: "hsl(var(--chart-2))"
  },
  r: {
    label: "R",
    color: "hsl(var(--chart-3))"
  },
  statistics: {
    label: "Statistics",
    color: "hsl(var(--chart-4))"
  },
  sql: {
    label: "SQL",
    color: "hsl(var(--chart-5))"
  }
} satisfies ChartConfig;

export const PersonalBoard = () => {
  return (
    <>
      <div className="flex flex-row gap-4 flex-wrap w-full">
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
      <div className="flex flex-row gap-4 flex-wrap w-full mt-4">
        <Card className="w-full xl:w-[20rem] flex-auto">
          <CardHeader>
            <CardTitle>Progress per Day</CardTitle>
            <CardDescription>Hours spent on Theorems per day.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={weeklyProgressChartConfig}
              className="mx-auto my-auto"
            >
              <BarChart accessibilityLayer data={weeklyProgress}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="total" fill="var(--chart-color-1)" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="w-full xl:w-[20rem] flex-auto">
          <CardHeader>
            <CardTitle>Top 5 Tags</CardTitle>
            <CardDescription>Your five most loved tags.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={solvedTagsChartConfig}
              className="mx-auto aspect-square max-h-[200px] md:max-h-[400px]"
            >
              <PieChart accessibilityLayer>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={solvedTags}
                  dataKey="total"
                  nameKey="name"
                  innerRadius={80}
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
