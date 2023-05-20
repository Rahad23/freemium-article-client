import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { useEffect } from "react";
import FollowButton from "../../FollowButton/FollowButton";
import GetUnlimitedAccessButton from "../../../components/GetUnlimitedAccessButton/GetUnlimitedAccessButton";
import SubscribButton from "../SubscribButton/SubscribButton";
import { APIContext } from "../../../contexts/APIProvider";
import ArticleDetailsCard from "../../ArticlesSection/ArticlesDetails/ArticleDetailsCard/ArticleDetailsCard";
import cookie from "react-cookies";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";

const ArticlesDetails = () => {
  const [story, setStory] = useState({});
  const [error, setError] = useState(null);
  const [newLoading, setNewLoading] = useState(true);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { isDarkMode, fetchAPI } = useContext(APIContext);

  const {
    isLoading: isUserLoading,
    refetch: refetchUser,
    data: singleUsers,
  } = useQuery(["user", user?.email], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
  );

  useEffect(() => {
    let visitorId = cookie.load("visitorId");
    let visitorMacAddress = cookie.load("visitorMacAddress");
    if (!visitorId || !visitorMacAddress) {
      visitorId =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      visitorMacAddress =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      cookie.save("visitorId", visitorId, { path: "/" });
      cookie.save("visitorMacAddress", visitorMacAddress, { path: "/" });
    }
    const userIds = localStorage.getItem("userId");
    const headers = {
      "Content-Type": "application/json",
      "Visitor-Id": visitorId,
      "Visitor-Mac-Address": visitorMacAddress,
    };
    if (userIds) {
      headers["user-id"] = userIds;
    }
    fetch(`${process.env.REACT_APP_API_URL}/view-story/${id}`, {
      headers,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setStory(data);
          // update upvote
          // setNewUpvote(data)
        }
        setNewLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setNewLoading(false);
      });
  }, [id]);

  const { writerImg, writerName, articleTitle, articleImg, userId, userEmail } =
    story;
  const {
    isLoading,
    refetch,
    data: users,
  } = useQuery(["user", userEmail], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/user/${userEmail}`)
  );

  if (newLoading && isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4 items-center min-h-screen justify-center">
        <p className="text-4xl font-bold">{error}</p>
        {user?.uid ? (
          <>
            <Link to="/payment" className="text-2xl font-medium text-sky-500">
              To see more stories please upgrade your membership
            </Link>
          </>
        ) : (
          <>
            <Link className="text-2xl font-medium text-sky-500" to="/login">
              Login to Visit more story
            </Link>
          </>
        )}
      </div>
    );
  }

  const title = articleTitle?.replace(/<[^>]+>/g, "");

  if (!users) {
    return <Spinner />;
  }

  return (
    <div className="border-t-[1px] ">
      <div className="w-11/12 mx-auto lg:grid lg:grid-cols-3 grid-cols-1">
        {/* left side content */}
        <div className="border-r-0 lg:border-r-[1px] col-span-2  ">
          <div className="mr-10 my-10">
            <ArticleDetailsCard
              articleData={story}
              users={users}
              error={error}
              singleUsers={singleUsers}
            />
          </div>
        </div>
        {/* right side content*/}
        <div className="lg:mx-auto my-10 lg:px-10 text-center lg:text-start">
          <Link to="/payment">
            <GetUnlimitedAccessButton text={"Get unlimited access"} />
          </Link>
          {/* wirtter info card */}
          <div className="card-body justify-center lg:justify-start px-0">
            {/* avater start */}
            <div className="avatar justify-center lg:justify-start">
              <div className="w-24 rounded-full">
                <img src={writerImg} alt="img" />
              </div>
            </div>
            {/* avater end */}
            <h2
              className={
                isDarkMode
                  ? "lg:card-title text-sm text-gray-300 font-bold"
                  : "lg:card-title text-sm text-gray-900 font-bold"
              }
            >
              {writerName}
            </h2>
            <p
              className={
                isDarkMode
                  ? "text-font-semibold text-gray-200"
                  : "text-font-semibold text-gray-900"
              }
            >
              {users?.following?.length} Followers
            </p>
            <p className="text-sm">{users?.bio}</p>
            <div className="card-actions justify-center lg:justify-start items-center">
              {user?.uid ? (
                <FollowButton
                  user={user}
                  users={users}
                  userId={userId}
                  userEmail={userEmail}
                  followingId={user?.email}
                  unfollowingId={user?.email}
                  refetch={refetch}
                />
              ) : (
                <Link to="/login">
                  <button
                    className={
                      isDarkMode
                        ? `btn btn-sm bg-gray-100 hover:bg-gray-300 hover:text-gray-800 text-gray-900 rounded-full btn-outline`
                        : `btn btn-sm rounded-full bg-gray-500 border-0 text-white btn-outline`
                    }
                  >
                    Follow
                  </button>
                </Link>
              )}

              {/* <Link className="bg-gray-500 border-0 rounded-full p-2">
                <EnvelopeIcon className="h-4 w-4 text-white " />
              </Link> */}
              {user?.uid ? (
                <SubscribButton
                  user={user}
                  // users={users}
                  userId={userId}
                  userEmail={userEmail}
                  subscribId={user?.email}
                  unsubscribId={user?.email}
                  writerName={writerName}
                />
              ) : (
                <Link to="/login">
                  <button
                    className={
                      isDarkMode
                        ? `btn btn-sm bg-gray-100 hover:bg-gray-300 hover:text-gray-800 text-gray-900 rounded-full btn-outline`
                        : `btn btn-sm rounded-full bg-gray-500 border-0 text-white btn-outline`
                    }
                  >
                    <EnvelopeIcon className="h-4 w-4 text-white " />
                  </button>
                </Link>
              )}
            </div>
          </div>
          {/* more form section */}
          <div className="">
            <h1
              className={
                isDarkMode
                  ? "text-xl font-semibold text-gray-300"
                  : "text-xl font-semibold text-black"
              }
            >
              More form Freemium
            </h1>
            {/* dremo writter card */}

            <div className="flex flex-col lg:flex-row">
              <div>
                <div className="flex items-center gap-2 my-3">
                  <img
                    src={writerImg}
                    alt={writerName}
                    className="w-6 h-6 rounded-full"
                  />
                  <span>{writerName}</span>
                </div>
                <div>
                  <h1
                    className="text-xl font-bold"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 my-3">
                <img src={articleImg} alt={title} className="w-24 h-20" />
              </div>
            </div>
            {/* demo writter end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesDetails;
