import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { APIContext } from "../../../contexts/APIProvider";
import { AuthContext } from "../../../contexts/AuthProvider";

const StoryWriterStory = () => {
  const { fetchAPI, isDarkMode } = useContext(APIContext);
  const { user } = useContext(AuthContext);
  const { isLoading, isError, data, error } = useQuery(
    ["userStories", user?.email],
    () =>
      fetchAPI(
        `${process.env.REACT_APP_API_URL}/my-stories-3?email=${user?.email}`
      )
  );
  return <div></div>;
};

export default StoryWriterStory;
