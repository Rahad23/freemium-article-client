import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { BiDownvote } from "react-icons/bi";
import { APIContext } from "../../../contexts/APIProvider";
const DownVoteButton = ({
  refetch,
  articleData,
  user,
  users,
  storyId,
  downVoteId,
  classes,
  handleDownvote,
}) => {
  const [downVote, setDownVote] = useState(false);
  const { isDarkMode } = useContext(APIContext);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/${storyId}/downVote/${user?.email}`
      )
      .then((res) => {
        setDownVote(res?.data?.upVote);
      });
  }, [storyId, user?.email]);

  const handleDownVote = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/downVote`, {
        storyId,
        downVoteId,
      })
      .then((res) => {
        setDownVote(true);
        refetch();
      });
  };

  const handleDecDownVote = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/decDownVote`, {
        storyId,
        decDownVoteId: downVoteId,
      })
      .then((res) => {
        setDownVote(false);
        refetch();
      });
  };
  return (
    <div>
      {downVote ? (
        <button
          onClick={handleDownvote}
          className={
            isDarkMode
              ? `btn btn-sm bg-gray-100 text-gray-800  hover:bg-gray-300 hover:text-gray-800 rounded-full btn-outline ${classes}`
              : `btn btn-sm rounded-full bg-white border-0 text-[#ff5200]  hover:bg-white hover:text-gray-800 btn-outline ${classes}`
          }
        >
          <BiDownvote className="h-4 w-4  " />
        </button>
      ) : (
        <button
          onClick={handleDownvote}
          className={
            isDarkMode
              ? `btn btn-sm bg-gray-100 hover:bg-white hover:text-gray-800 text-gray-900 rounded-full btn-outline ${classes}`
              : `btn btn-sm rounded-full bg-white text-gray-800  hover:bg-white hover:text-gray-800 border-0  ${classes}`
          }
        >
          <BiDownvote className="h-4 w-4  " />
        </button>
      )}
    </div>
  );
};

export default DownVoteButton;
