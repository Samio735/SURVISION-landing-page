"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default ({ question, responses }) => {
  return (
    <div>
      <h2 className="text-lightGrey px-4 py-2 lg:px-8 lg:py-4">{question}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={responses}
          margin={{
            top: 5,
            right: 60,
            left: 60,
            bottom: 5,
          }}
          barCategoryGap={40}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="response" />
          <Tooltip content={<CustomTooltip></CustomTooltip>} />

          <Bar dataKey="count" fill="#F26E23" opacity={0.5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="tooltip font-normal bg-backgroundWhite text-darkOrange border border-darkOrange rounded px-2">
        <div className="flex">
          <p className="label">{`${payload[0].value} `}</p>

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
    );
  }

  return null;
};
