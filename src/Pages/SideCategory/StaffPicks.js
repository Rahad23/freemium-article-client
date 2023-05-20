import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
// import Spinner from "../../components/Spinner/Spinner";
import { APIContext } from "../../contexts/APIProvider";
import StaffPicksStory from "./StaffPicksStory";
// import { useLoaderData } from 'react-router-dom';

const StaffPicks = () => {
  const { isDarkMode, fetchAPI } = useContext(APIContext);
  const {
    isLoading,
    // refetch,
    data: articles,
  } = useQuery(["allArticles"], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/allArticles`)
  );

  // limited article data
  const {
    isLoading: limitIsLoading,
    // refetch,
    data: limitArticles,
  } = useQuery(["limit-articles"], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/limit-articles`)
  );

  if (isLoading && limitIsLoading) {
    return;
  }
  // console.log(limitArticles);
  return (
    <div>
      <div className="mx-5">
        <h1
          className={
            isDarkMode
              ? "my-5 text-lg font-semibold text-white"
              : "my-5 text-lg font-semibold text-gray-900"
          }
        >
          Staff Picks
        </h1>
        {limitArticles?.map((article) => (
          <StaffPicksStory key={article?._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default StaffPicks;
