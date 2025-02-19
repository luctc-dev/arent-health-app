"use client";
import React from "react";
import cls from "classnames";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const data = [
  { name: "6月", yellow: 100, aqua: 100 },
  { name: "7月", yellow: 90, aqua: 86 },
  { name: "8月", yellow: 68, aqua: 73 },
  { name: "9月", yellow: 80, aqua: 78 },
  { name: "10月", yellow: 75, aqua: 70 },
  { name: "11月", yellow: 65, aqua: 60 },
  { name: "12月", yellow: 72, aqua: 50 },
  { name: "1月", yellow: 62, aqua: 45 },
  { name: "2月", yellow: 55, aqua: 30 },
  { name: "3月", yellow: 50, aqua: 20 },
  { name: "4月", yellow: 45, aqua: 10 },
  { name: "5月", yellow: 40, aqua: 10 },
];

type Props = {
  className?: string;
  bgColor?: string;
};

const BodyWeightChart = ({ bgColor }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handler = () => {
      const element = ref.current;

      if (!element) return;

      const rectObj = element.getBoundingClientRect();

      if (rectObj.width) {
        setWidth(rectObj.width - 100);
      }
    };
    handler();
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <div
      className={cls(
        bgColor || "bg-dark-300",
        "text-center px-[30px] pt-3 pb-8 flex justify-center items-center"
      )}
      ref={ref}
    >
      <LineChart
        width={width}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="0 0"
          stroke="#777777"
          horizontal={false}
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          stroke="#ffffff"
          tickLine={false}
        />
        <YAxis yAxisId="left" hide={true} />
        <YAxis yAxisId="right" hide={true} />

        <Line
          yAxisId="left"
          dataKey="yellow"
          stroke="#FFCC21"
          dot={{ stroke: "#FFCC21", fill: "#FFCC21", strokeWidth: 2 }}
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          strokeWidth={2}
          dataKey="aqua"
          stroke="#8FE9D0"
          dot={{ stroke: "#8FE9D0", fill: "#8FE9D0", strokeWidth: 2 }}
        />
      </LineChart>
    </div>
  );
};

export default BodyWeightChart;
