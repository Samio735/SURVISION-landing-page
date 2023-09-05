"use client";

import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";

const data = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 10 + Math.round(Math.random() * 50),
  });
}

export default function Home() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ left: 0, right: 0, top: 0, bottom: -50 }}
      >
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F26E23" stopOpacity={0.8} />
            <stop offset="75%" stopColor="#F26E23" stopOpacity={0.2} />
          </linearGradient>
        </defs>

        <Area dataKey="value" stroke="#F24606" fill="url(#color)" />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        />

        {/* <YAxis
          datakey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number) => `$${number.toFixed(2)}`}
        /> */}

        <Tooltip content={<CustomTooltip />} />

        <CartesianGrid opacity={0.5} vertical={false} strokeDasharray="3 3" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip font-normal bg-backgroundWhite text-darkOrange border border-darkOrange rounded px-2">
        <h4>{format(parseISO(label), " d MMM")}</h4>
        <div className="flex">
          <p>{payload[0].value} </p>
          <div>
            <svg
              className="mt-[4px]"
              width="17"
              height="17"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3332 14V12.6667C13.3332 11.9594 13.0522 11.2811 12.5521 10.781C12.052 10.281 11.3737 10 10.6665 10H5.33317C4.62593 10 3.94765 10.281 3.44755 10.781C2.94746 11.2811 2.6665 11.9594 2.6665 12.6667V14"
                stroke="#F24606"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00016 7.33358C9.47292 7.33358 10.6668 6.13967 10.6668 4.66691C10.6668 3.19415 9.47292 2.00024 8.00016 2.00024C6.5274 2.00024 5.3335 3.19415 5.3335 4.66691C5.3335 6.13967 6.5274 7.33358 8.00016 7.33358Z"
                stroke="#F24606"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
