import React from "react";
import TopWritersCard from "./TopWritersCard/TopWritersCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { APIContext } from "./../../../../contexts/APIProvider";

const TopWriters = () => {
  const { users } = useContext(APIContext);
  const { isDarkMode } = useContext(APIContext);
  return (
    <div className="my-10 sticky top-0 my">
      <h1
        className={
          isDarkMode
            ? "text-gray-100 font-semibold text-base mb-4 mt-10 border-x-0 border-t-0 ml-9 lg:ml-0"
            : "text-gray-900 font-semibold text-base mb-4 mt-10 border-x-0 border-t-0 ml-9 lg:ml-0"
        }
      >
        Top writers
      </h1>
      {users.map((userData) => (
        <TopWritersCard
          writerData={userData}
          isDarkMode={isDarkMode}
          key={userData?._id}
        />
      ))}
      <Link
        to={""}
        className="mt-7 lg:mt-5 block text-center lg:text-left lg:ml-5"
      >
        <span
          className={
            isDarkMode
              ? "text-white font-semibold"
              : "text-green-550 font-semibold"
          }
        >
          See-more
        </span>
      </Link>
    </div>
  );
};

export default TopWriters;
