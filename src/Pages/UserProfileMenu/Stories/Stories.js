import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import GetUnlimitedAccessButton from "../../../components/GetUnlimitedAccessButton/GetUnlimitedAccessButton";
import StaffPicks from "../../SideCategory/StaffPicks";
import { APIContext } from "./../../../contexts/APIProvider";
import Tabs from "../Tabs/Tabs";
import Published from "./Published";
import Drafts from "./Drafts";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
const Stories = () => {
  const { fetchAPI, isDarkMode } = useContext(APIContext);
  const { user } = useContext(AuthContext);
  const { isLoading, isError, data, error } = useQuery(
    ["userStories", user?.email],
    () =>
      fetchAPI(
        `${process.env.REACT_APP_API_URL}/my-stories?email=${user?.email}`
      )
  );

  const tabsData = [
    {
      id: 1,
      label: "Drafts",
      content: (
        <div>
          <Drafts />
        </div>
      ),
    },
    {
      id: 2,
      label: " Published",
      content: (
        <div>
          <Published
            myStories={data}
            isLoading={isLoading}
            isError={isError}
            error={error}
          />
        </div>
      ),
    },
    { id: 3, label: " Responses", content: <div>Responses</div> },
  ];
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="flex row">
        <div className=" basis-3/4 mb-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between text-center">
            <h1
              className={
                isDarkMode
                  ? "text-4xl font-bold text-gray-100"
                  : "text-4xl font-bold text-gray-900"
              }
            >
              Your stories
            </h1>
            <div className="flex flex-col md:flex-row gap-3">
              <Link
                className="btn rounded-full btn-primary font-semibold border-[1px] hover:border-green-550 border-green-550 bg-green-550 text-white hover:bg-green-550"
                to="/write-stories"
              >
                Write a story
              </Link>
              <Link
                to="/import-story"
                className="btn rounded-full btn-primary font-semibold border-[1px] hover:border-green-550 border-green-550 bg-slate-50 text-green-550 hover:bg-white"
              >
                Import a story
              </Link>
            </div>
          </div>
          {/* <div className="tabs mt-10">
            <Link
              className={
                isDarkMode
                  ? "tab tab-bordered tab-active text-gray-100"
                  : "tab tab-bordered text-gray-900 tab-active"
              }
            >
              Drafts
            </Link>
            <Link
              className={
                isDarkMode
                  ? "tab tab-bordered text-gray-100"
                  : "tab tab-bordered text-gray-900"
              }
            >
              Published
            </Link>
            <Link
              className={
                isDarkMode
                  ? "tab tab-bordered text-gray-100"
                  : "tab tab-bordered text-gray-900"
              }
            >
              Responses
            </Link>                    
          </div> */}
          {/* tabs */}
          <Tabs tabsData={tabsData} />

          {/* tabs */}
        </div>
        <div className="divider divider-horizontal"></div>
        <aside className="basis-1/4 hidden md:block lg:block">
          <GetUnlimitedAccessButton text={"Get Unlimited Access"} />
          {/* <button className="bg-black text-white rounded-3xl py-3 w-10/12">
            Get unlimited access
          </button> */}
          <StaffPicks />
        </aside>
      </div>
    </div>
  );
};
export default Stories;
