import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect, useContext } from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { APIContext } from "../../../contexts/APIProvider";

function UpvoteButton({ storyId, title, content, upvotes, downvotes }) {
  const [vote, setVote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { fetchAPI } = useContext(APIContext);

  const {
    data,
    isLoading: isLoadings,
    refetch: refetchs,
  } = useQuery(["view-story", storyId], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/view-story/${storyId}`)
  );
  // const [post, setPost] = useState(null);
  // setPost(data);
  // Helper function to update the vote count in the state
  function updateVoteCount(voteType) {
    if (voteType === "upvote") {
      setVote("upvote");
    } else if (voteType === "downvote") {
      setVote("downvote");
    }
  }

  // Add event listener for upvote button
  async function handleUpvote() {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/upvote-story/${storyId}/upvote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ vote: "upvote" }),
        }
      );
      const post = await response.json();
      updateVoteCount("upvote");
      setPost(post);
      refetchs();
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  }

  // Add event listener for downvote button
  async function handleDownvote() {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/upvote-story/${storyId}/upvote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ vote: "downvote" }),
        }
      );
      const post = await response.json();
      updateVoteCount("downvote");
      setPost(post);
      refetchs();
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  }

  // Fetch post data on mount
  const [post, setPost] = useState(null);
  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/vote-story/${storyId}`
        );
        const post = await response.json();
        setPost(post);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPost();
  }, [storyId, data]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex gap-4">
      <button
        className="flex gap-2"
        onClick={handleUpvote}
        disabled={isLoading || vote === "upvote"}
      >
        <BiUpvote className="h-4 w-4" />
        {post?.upvotes}
      </button>

      <button
        className="flex gap-2"
        onClick={handleDownvote}
        disabled={isLoading || vote === "downvote"}
      >
        <BiDownvote className="h-4 w-4" />
        {post?.downvotes}
      </button>
    </div>
  );
}

export default UpvoteButton;
