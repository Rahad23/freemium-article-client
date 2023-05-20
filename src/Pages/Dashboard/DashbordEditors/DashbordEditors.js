import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import DashbordEditorsCard from "./DashbordEditorsCard/DashbordEditorsCard";
import "./DashbordEditors.css";
const DashbordEditors = () => {
  return (
    <div className="px-2">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-400">Users</h1>
        <div></div>
        {/* <button className="bg-green-550 border-none hover:bg-[#2f8b2b] px-8 rounded-lg py-2 text-lg text-white font-normal flex items-center">
          Add Editor <AiOutlinePlus className="ml-2 text-white font-bold" />
        </button> */}
      </div>
      <div className="mt-16">
        <DashbordEditorsCard />
      </div>
    </div>
  );
};

export default DashbordEditors;
