import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { APIContext } from "../contexts/APIProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const { isDarkMode } = useContext(APIContext);
  return (
    <div className="">
      <Navbar />
      <div
        className={
          isDarkMode ? "bg-black-350 text-white" : "bg-base-100 text-black-350"
        }
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
