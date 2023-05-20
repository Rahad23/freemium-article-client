import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import { BsTwitter } from 'react-icons/bs';
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { APIContext } from "../../../contexts/APIProvider";

const Stats = () => {
  const [count, setCount] = useState(0);
  const { isDarkMode, user } = useContext(APIContext);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/count/${user?.email}`
      );
      setCount(response.data.count);
    }
    fetchData();
  }, [user?.email]);

  const data = [
    {
      name: "Sun",
      uv: count,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Mon",
      uv: count,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Tue",
      uv: 7,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Wed",
      uv: 3,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Thu",
      uv: count,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Fri",
      uv: 8,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sat",
      uv: count,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="w-11/12 mx-auto mt-14 py-10">
      <div
        className={
          isDarkMode
            ? "alert bg-black-250 text-white"
            : "alert bg-base-100 text-gray-900"
        }
      >
        <div>
          <FaTwitter className="text-info" />

          <h3 className={isDarkMode ? "text-white" : "text-gray-900"}>
            <span className="link">Connect with Twitter</span> to let your
            followers find you on FreeMium.
          </h3>
        </div>
        {/* <div className="flex-none">
          <button
            className={
              isDarkMode
                ? "btn btn-sm bg-green-600 hover:bg-green-700 text-white"
                : "btn btn-sm bg-black-350 text-white"
            }
          >
            X
          </button>
        </div> */}
      </div>
      <div className="flex justify-between mt-5">
        <h1
          className={
            isDarkMode
              ? "text-gray-100 text-2xl font-bold"
              : "text-2xl font-bold text-gray-900"
          }
        >
          Your stats
        </h1>
        {/* <button className="btn btn-primary font-semibold ml-3 border-[1px] hover:border-green-550 border-green-550 bg-green-550 rounded-full text-white hover:bg-green-550">
          Audience stats
        </button> */}
      </div>
      <div className="flex justify-between mt-5">
        <h1 className={isDarkMode ? "text-gray-100" : "text-gray-900"}>
          Click story below to view detailed stats
        </h1>
        <Link
          className={
            isDarkMode ? "text-gray-100 underline" : "text-gray-900 underline"
          }
        >
          Learn more about using stats
        </Link>
      </div>

      <AreaChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
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

export default Stats;
