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
  LineChart,
  Line,
} from "recharts";
import { BsGraphDown, BsGraphUp } from "react-icons/bs";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const ProductStatusCard = () => {
  return (
    <div className="grid grid-cols-2 mx-auto gap-5">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Total Articles</h2>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <BsGraphUp className="mr-2 text-[#05c46b] font-bold text-lg" />
              <h1 className="text-xl font-semibold text-gray-900">4500</h1>
            </div>
            <div>
              <BarChart
                width={350}
                height={160}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                {/* <XAxis dataKey="name" /> */}
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#05c46b" />
                <Bar dataKey="uv" fill="#1891C3" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Total Profit</h2>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <BsGraphUp className="mr-2 text-[#05589C] font-bold text-lg" />
              <h1 className="text-xl font-semibold text-gray-900">2300</h1>
            </div>
            <div>
              <BarChart
                width={350}
                height={160}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                {/* <XAxis dataKey="name" /> */}
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#05589C" />
                <Bar dataKey="uv" fill="#1891C3" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Today payment</h2>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <BsGraphDown className="mr-2 text-[#16a085] font-bold text-lg" />
              <h1 className="text-xl font-semibold text-gray-900">2300</h1>
            </div>
            <div>
              <BarChart
                width={350}
                height={160}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                {/* <XAxis dataKey="name" /> */}
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#16a085" />
                <Bar dataKey="uv" fill="#1891C3" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Subscriptions</h2>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <BsGraphUp className="mr-2 text-[#e74c3c] font-bold text-lg" />
              <h1 className="text-xl font-semibold text-gray-900">25%</h1>
            </div>
            <div>
              <BarChart
                width={350}
                height={160}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                {/* <XAxis dataKey="name" /> */}
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#e74c3c" />
                <Bar dataKey="uv" fill="#1891C3" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStatusCard;
