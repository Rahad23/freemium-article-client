import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";
  const data = [
    {
    name: "Sun",
    uv: 4000,
    pv: 2400,
    amt: 2400
    },
    {
    name: "Mon",
    uv: 3000,
    pv: 1398,
    amt: 2210
    },
    {
    name: "Tue",
    uv: 2000,
    pv: 9800,
    amt: 2290
    },
    {
    name: "Wed",
    uv: 2780,
    pv: 3908,
    amt: 2000
    },
    {
    name: "Thu",
    uv: 1890,
    pv: 4800,
    amt: 2181
    },
    {
    name: "Fri",
    uv: 2390,
    pv: 3800,
    amt: 2500
    },
    {
    name: "Sat",
    uv: 3490,
    pv: 4300,
    amt: 2100
    }
    ];
        
const VisitorsTraking = () => {
    return (
        <div className='mt-14 px-3'>
            <h1 className='mb-7 text-xl font-semibold text-gray-900'>Users visited Site</h1>
            <AreaChart
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
        </div>
    );
};

export default VisitorsTraking;