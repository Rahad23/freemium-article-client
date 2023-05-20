import React, { useContext } from "react";
import Spinner from "../../../../components/Spinner/Spinner";
import { AuthContext } from "../../../../contexts/AuthProvider";
import {
  FaFolder,
  FaFile,
  FaPencilRuler,
  FaRegChartBar,
  FaExclamationCircle,
} from "react-icons/fa";
import { APIContext } from "../../../../contexts/APIProvider";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const WelcomeDashboard = () => {
  const { categoryButton, reportedItems, fetchAPI } = useContext(APIContext);
  const {
    isLoading,
    refetch,
    data: articles,
  } = useQuery(["allArticles"], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/allArticles`)
  );
  //   test comment
  if (isLoading) {
    return <Spinner />;
  }
  // test comment
  return (
    <div>
      {/* className="flex justify-center items-center" */}
      <h1 className="text-center text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-600 sm:mr-3 md:mb-0">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-6 items-center justify-center">
        {/* Categories card */}
        <Link to="/dashboard/category">
          <div className="card w-80 bg-[#F24D2E] text-white shadow-xl p-0">
            <div className="card-body items-center text-center">
              <div className="card-actions flex justify-between  mt-2">
                <p>
                  <FaFolder className="w-16 h-16" />
                </p>

                <div className="ml-4 mt-2">
                  <p className=" font-bold">Categories</p>
                  <p className="text-2xl font-bold">{categoryButton?.length}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* Storys card */}
        <Link to="/dashboard/storys">
          <div className="card w-80 bg-[#FFD1B9] text-white shadow-xl p-0">
            <div className="card-body items-center text-center">
              <div className="card-actions flex justify-between  mt-2">
                <p>
                  <FaFile className="w-16 h-16" />
                </p>

                <div className="ml-4 mt-2">
                  <p className=" font-bold">Storys</p>
                  <p className="text-2xl font-bold">{articles?.length}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* Editors card */}
        <Link to="/dashboard/editors">
          <div className="card w-80 bg-[#34A245] text-white shadow-xl p-0">
            <div className="card-body items-center text-center">
              <div className="card-actions flex justify-between  mt-2">
                <p>
                  <FaPencilRuler className="w-16 h-16" />
                </p>

                <div className="ml-4 mt-2">
                  <p className=" font-bold">Editors</p>
                  <p className="text-2xl font-bold">{categoryButton?.length}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* Charts card */}
        <Link to="/dashboard/charts">
          <div className="card w-80 bg-[#4479FF] text-white shadow-xl p-0">
            <div className="card-body items-center text-center">
              <div className="card-actions flex justify-between  mt-2">
                <p>
                  <FaRegChartBar className="w-16 h-16" />
                </p>

                <div className="ml-4 mt-2">
                  <p className=" font-bold">Charts</p>
                  <p className="text-2xl font-bold">{3}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* Reported story card */}
        <Link to="/dashboard/reportedStory">
          <div className="card w-80 bg-[#aed4f8] text-white shadow-xl p-0">
            <div className="card-body items-center text-center">
              <div className="card-actions flex justify-between  mt-2">
                <p>
                  <FaExclamationCircle className="w-16 h-16" />
                </p>

                <div className="ml-4 mt-2">
                  <p className=" font-bold">Reported story</p>
                  <p className="text-2xl font-bold">{reportedItems?.length}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeDashboard;
