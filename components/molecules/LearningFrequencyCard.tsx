"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";

const data = [
  {
    name: "Mon",
    total: Math.floor(Math.random() * 10) + 1,
  },
  {
    name: "Tue",
    total: Math.floor(Math.random() * 10) + 1,
  },
  {
    name: "Wed",
    total: Math.floor(Math.random() * 10) + 1,
  },
  {
    name: "Thu",
    total: Math.floor(Math.random() * 10) + 1,
  },
  {
    name: "Fri",
    total: Math.floor(Math.random() * 10) + 1,
  },
  {
    name: "Sat",
    total: Math.floor(Math.random() * 10) + 1,
  },
  {
    name: "Sun",
    total: Math.floor(Math.random() * 10) + 1,
  },
];

export default function LearningFrequencyCard() {
  return (
    <Card className={"flex-grow w-fit  p-8 space-y-8"}>
      <Typography size={"heading4"} thick={"semibold"} as={"h4"}>
        Learning Frequency
      </Typography>
      <div className={"w-[450px] h-[300px] -ml-8 "}>
        <ResponsiveContainer width={"100%"}>
          <BarChart data={data} barCategoryGap={"20%"}>
            <CartesianGrid strokeDasharray="8 8" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="#fff"
              fontSize={12}
              tickLine={true}
              axisLine={true}
            />
            <YAxis
              stroke="#fff"
              fontSize={12}
              tickLine={true}
              axisLine={true}
              tickFormatter={(value: string) => `${value} h`}
            />
            <Bar
              dataKey="total"
              fill="#FF8000"
              // barSize={40}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
