import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { MdOutlinePending } from "react-icons/md";
import {
  FaFolder,
  FaFile,
  FaPencilRuler,
  FaRegChartBar,
  FaLaptop,
  FaExclamationCircle,
} from "react-icons/fa";
import "../Pages/Dashboard/DashbordEditors/DashbordEditorsTable/DashordEditorsTable.css";
import { APIContext } from "../contexts/APIProvider";
import { AiOutlineUser } from "react-icons/ai";
const DashboardLayout = () => {
  const { user, loading } = useContext(AuthContext);
  const { isDarkMode } = useContext(APIContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const navigation = useNavigate();
  if (loading && isAdminLoading) {
    return <Spinner />;
  }
  return (
    <div className="">
      {isAdmin ? (
        <>
          <div
            className={
              isDarkMode
                ? "bg-black-350 text-white"
                : "bg-base-100 text-black-350"
            }
          >
            <Navbar />
          </div>
          <div className="drawer drawer-mobile">
            <input
              id="dashboard-drawer"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className=" drawer-content p-4 scrollbar-hide">
              <Outlet />
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="dashboard-drawer"
                className="drawer-overlay"
              ></label>
              <ul
                className={
                  isDarkMode
                    ? "menu p-4 w-80 bg-black-250 text-base-300"
                    : "menu p-4 w-80 bg-black-350 text-base-300"
                }
              >
                <li>
                  <Link to="/dashboard">
                    <FaLaptop /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/category">
                    {" "}
                    <FaFolder />
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/storys">
                    {" "}
                    <FaFile />
                    Storys
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/editors">
                    {" "}
                    <AiOutlineUser />
                    Users
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/pendingArticle">
                    {" "}
                    <MdOutlinePending /> Pending
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/charts">
                    <FaRegChartBar />
                    Charts
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard/reportedStory">
                    <FaExclamationCircle />
                    Reported story
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        navigation("/")
      )}
    </div>
  );
};

export default DashboardLayout;
