import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import StaffPicks from "./../../SideCategory/StaffPicks";
import { APIContext } from "./../../../contexts/APIProvider";
import GetUnlimitedAccessButton from "./../../../components/GetUnlimitedAccessButton/GetUnlimitedAccessButton";
import Tabs from "../Tabs/Tabs";
import Saved from "./Saved";
import { toast } from "react-hot-toast";

const List = () => {
  const hideMembershipBanner = () => {
    toast.success("Story Added in your List");
  };
  const tabsData = [
    {
      id: 1,
      label: "Saved",
      content: (
        <div>
          <Saved />
        </div>
      ),
    },
    { id: 2, label: " Highlights", content: <div></div> },
  ];

  const { isDarkMode } = useContext(APIContext);
  return (
    <div className="w-11/12 mx-auto h-screen py-10">
      <div className="flex row">
        <div className=" basis-3/4 mb-10">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Your lists</h1>
            {/* <button
              onClick={hideMembershipBanner}
              className="btn btn-success bg-green-600 rounded-full border-none text-white"
            >
              New list
            </button> */}
          </div>
          {/* <div className={isDarkMode ?"tabs mt-10 text-gray-200":"tabs mt-10 text-gray-900"}>
            <Link className={isDarkMode ?"tab text-gray-200 tab-bordered tab-active":"tab text-gray-900 tab-bordered tab-active"}>Saved</Link>
            <Link className={isDarkMode ?"tab tab-bordered text-gray-200":"tab tab-bordered text-gray-900"}>Highlights</Link>
          </div> */}

          {/* tabs */}
          <Tabs tabsData={tabsData} />

          {/* tabs */}
        </div>
        <div
          className={
            isDarkMode
              ? "divider divider-horizontal "
              : "divider divider-horizontal"
          }
        ></div>
        <aside className="basis-1/4  hidden md:block lg:block">
          <Link to={"/payment"}>
            <GetUnlimitedAccessButton text={"Get Unlimited Access"} />
          </Link>
          {/* <button className="bg-black text-white rounded-3xl py-3 w-10/12">
            Get unlimited access
          </button> */}
          <StaffPicks />
        </aside>
      </div>
    </div>
  );
};

export default List;
