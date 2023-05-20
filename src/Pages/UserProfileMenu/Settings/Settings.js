import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import Account from "./Account";
import MembershipAndPayment from "./MembershipAndPayment";
import Notifications from "./Notifications";
import SecurityAndApps from "./SecurityAndApps";
import { APIContext } from "../../../contexts/APIProvider";
import Publishing from "./Publishing";
const Settings = () => {
  const tabsData = [
    {
      id: 1,
      label: "Account",
      content: (
        <div>
          <Account />
        </div>
      ),
    },
    {
      id: 2,
      label: " Publishing",
      content: (
        <div>
          <Publishing />
        </div>
      ),
    },
    {
      id: 3,
      label: " Notifications",
      content: (
        <div>
          <Notifications></Notifications>
        </div>
      ),
    },
    {
      id: 4,
      label: " Membership and payment",
      content: (
        <div>
          <MembershipAndPayment></MembershipAndPayment>
        </div>
      ),
    },
    {
      id: 5,
      label: " Security and apps",
      content: (
        <div>
          <SecurityAndApps></SecurityAndApps>
        </div>
      ),
    },
  ];
  const { isDarkMode } = useContext(APIContext);
  return (
    <div className="mt-6 py-14">
      <div className="flex row">
        <div className="basis-3/4">
          <div className="flex justify-between">
            <h1
              className={
                isDarkMode
                  ? "text-5xl font-bold text-gray-100"
                  : "text-5xl font-bold text-gray-900"
              }
            >
              Settings
            </h1>
          </div>
          {/* tabs */}
          <Tabs tabsData={tabsData} />

          {/* tabs */}
          {/* <div className="tabs mt-10">
            <Link className={isDarkMode ?"text-gray-100 tab tab-bordered tab-active":"tab text-gray-900 tab-bordered tab-active"}>Account</Link>
            <Link className={isDarkMode ?"tab tab-bordered text-gray-100":"text-gray-900 tab tab-bordered "}>Publishing</Link>
            <Link className={isDarkMode ?"tab tab-bordered text-gray-100":"text-gray-900 tab tab-bordered "}>Notifications</Link>
            <Link className={isDarkMode ?"tab tab-bordered text-gray-100":"text-gray-900 tab tab-bordered "}>Membership and payment</Link>
            <Link className={isDarkMode ?"tab tab-bordered text-gray-100":"text-gray-900 tab tab-bordered "}>Security and apps</Link>
          </div> */}
        </div>
        <div className="divider divider-horizontal"></div>
        <aside className="basis-1/4 px-8 leading-loose hidden md:block lg:block">
          <h1
            className={
              isDarkMode
                ? "text-lg font-semibold text-gray-100"
                : "text-gray-900 text-lg font-semibold"
            }
          >
            Suggested help articles
          </h1>
          <Link
            to=""
            className={isDarkMode ? " text-gray-100" : "text-gray-900"}
          >
            Sign in or Sign up to FreeMium
          </Link>
          <Link
            to=""
            className={isDarkMode ? " text-gray-100" : "text-gray-900"}
          >
            Your profile page
          </Link>
          <Link
            to=""
            className={isDarkMode ? " text-gray-100" : "text-gray-900"}
          >
            Writing and Publishing your first story
          </Link>
          <Link
            to=""
            className={isDarkMode ? " text-gray-100" : "text-gray-900"}
          >
            About FreeMium's distribution system
          </Link>
          <Link
            to=""
            className={isDarkMode ? " text-gray-100" : "text-gray-900"}
          >
            Get started with the Partner Programs
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Settings;
