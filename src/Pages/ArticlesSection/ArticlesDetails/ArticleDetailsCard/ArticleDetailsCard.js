import { LinkIcon, ShareIcon } from "@heroicons/react/24/solid";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { APIContext } from "../../../../contexts/APIProvider";
import { AuthContext } from "../../../../contexts/AuthProvider";
import OwnStory from "../../../Home/OwnStory";
import DownVoteButton from "../../DownVoteButton/DownVoteButton";
import Comments from "../../ShowMoreArtical/Comments";
import UpvoteButton from "../../UpvoteButton/UpvoteButton";
import { HiOutlineChat } from "react-icons/hi";
import ListenButton from "./ListenButton";
import { useQuery } from "@tanstack/react-query";
import { FaLinkedin } from "react-icons/fa";
import Notification from "../../../../components/Notification/Notification";
import { format } from "date-fns";

const ArticleDetailsCard = ({
  articleData,
  users,
  handleUpvote,
  handleDownvote,
  singleUsers,
}) => {
  const { user } = useContext(AuthContext);
  const { fetchAPI } = useContext(APIContext);

  const {
    isLoading,
    isError,
    data: articleData3,
  } = useQuery(["my-stories-3", user?.email], () =>
    fetchAPI(
      `${process.env.REACT_APP_API_URL}/my-stories-3?email=${users?.email}`
    )
  );

  const currentPageUrl = "https://freemiumarticles.web.app/";
  // window.location.href
  // const ArticleDetailsCard = ({ articleData,users,setUsers }) => {
  //   const { user } = useContext(AuthContext);

  const {
    _id,
    articleDetails,
    articleRead,
    timestamp,
    articleTitle,
    writerImg,
    articleImg,
    writerName,
    userEmail,
    isPaid,
  } = articleData;

  const { isDarkMode, setIsDarkMode } = useContext(APIContext);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const title = articleTitle?.replace(/<[^>]+>/g, "");
  const details = articleDetails?.replace(/<[^>]+>/g, "");

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
  const handleCopyLink = () => {
    const pageUrl = window.location.href;
    navigator.clipboard.writeText(pageUrl).then(
      () => {
        toast.success("Page URL copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy page URL: ", err);
      }
    );
  };
  // reported handler
  const reportedHandler = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/story/reportedStory/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Add Report  successfully");
        }
      });
  };
  return (
    <div>
      {/* card */}
      <article className="p-4">
        <div className="blogHadedr lg:flex md:flex-row sm:flex-row items-center justify-between">
          {/*card left side writter info */}
          <div className="flex items-center mb-3 ">
            <img
              alt="Developer"
              src={writerImg}
              className="h-16 w-16 rounded-full object-cover"
            />

            <div className="ml-3">
              <h3
                className={
                  isDarkMode
                    ? "text-lg font-medium text-white"
                    : "text-lg font-medium text-black"
                }
              >
                {writerName}
              </h3>

              <div className="flow-root">
                <ul className="-m-1 flex flex-wrap items-center">
                  <li className="p-1 leading-none">
                    <span
                      className={
                        isDarkMode
                          ? "text-xs font-medium text-gray-300"
                          : "text-xs font-medium text-gray-600"
                      }
                    >
                      {format(new Date(timestamp), "PP")}
                    </span>
                  </li>

                  <li className="p-1 leading-none">
                    <span
                      className={
                        isDarkMode
                          ? "text-xs font-medium text-gray-300"
                          : "text-xs font-medium text-gray-600"
                      }
                    >
                      {articleRead} min read
                    </span>
                  </li>
                  {!isPaid && (
                    <li className="p-1 leading-none">
                      <ListenButton
                        articleTitle={title}
                        articleDetails={details}
                      />
                    </li>
                  )}
                  {isPaid && (
                    <>
                      <li className="p-1 leading-none">
                        <ListenButton
                          articleTitle={title}
                          articleDetails={details}
                        />
                      </li>
                      <li className="p-1 leading-none">
                        <span
                          className={
                            isDarkMode
                              ? "text-xs font-medium text-gray-300"
                              : "text-xs font-medium text-gray-600"
                          }
                        >
                          Member-only
                        </span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/*  card right side writter socials */}
          {/* <div  className=" flex gap-5  rounded-md border bg-white text-center"> */}
          <ul className="flex justify-start items-center col-span-2 gap-6 lg:col-span-5 lg:justify-end">
            <FacebookShareButton url={currentPageUrl}>
              <li>
                <p
                  // href=" "
                  // rel="noreferrer"
                  // target="_blank"
                  className={
                    isDarkMode
                      ? "text-gray-200 transition hover:text-gray-300"
                      : "text-gray-500 transition hover:text-black"
                  }
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </li>
            </FacebookShareButton>
            <LinkedinShareButton url={currentPageUrl}>
              <li>
                <FaLinkedin
                  className={
                    isDarkMode
                      ? "text-gray-200 transition hover:text-gray-300 text-xl"
                      : "text-gray-500 transition hover:text-black text-xl"
                  }
                />
              </li>
            </LinkedinShareButton>
            <TwitterShareButton url={currentPageUrl}>
              <li>
                <p
                  className={
                    isDarkMode
                      ? "text-gray-200 transition hover:text-gray-300"
                      : "text-gray-500 transition hover:text-black"
                  }
                >
                  <span className="sr-only">Twitter</span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </p>
              </li>
            </TwitterShareButton>

            <li>
              <p
                onClick={handleCopyLink}
                className={
                  isDarkMode
                    ? "text-gray-200 transition hover:text-gray-300 cursor-pointer"
                    : "text-gray-500 transition hover:text-black cursor-pointer"
                }
              >
                <LinkIcon className="h-6 w-6  text-gray " />
              </p>
            </li>

            <li>
              {/* <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className={
                  isDarkMode
                    ? "text-gray-200 transition hover:text-gray-300"
                    : "text-gray-500 transition hover:text-black"
                }
              > */}
              {/* 3 dot */}
              <div className="dropdown dropdown-end">
                <button className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>
                </button>
                <ul
                  tabIndex={0}
                  className={
                    isDarkMode
                      ? "mt-2 p-2 shadow menu menu-compact dropdown-content bg-black-250 text-white rounded-box w-52"
                      : "mt-2 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box text-black-350 w-52"
                  }
                >
                  {user?.email === userEmail ? (
                    <>
                      <li>
                        <a href="/">Mute this author</a>
                      </li>
                      <li>
                        <a href="/">Mute this publication</a>
                      </li>
                      <li>
                        <button onClick={() => reportedHandler(_id)}>
                          Report
                        </button>
                      </li>
                      <li>
                        <Link to={`/edit-article/${_id}`}>Edit Story</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <a href="/">Mute this author</a>
                      </li>
                      <li>
                        <a href="/">Mute this publication</a>
                      </li>
                      <li>
                        <button onClick={() => reportedHandler(_id)}>
                          Report
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* </a> */}
            </li>
          </ul>

          {/* </div> */}
        </div>

        <div className="mt-4 space-y-2">
          <h1
            className={
              isDarkMode
                ? "text-3xl font-bold  text-white"
                : "text-3xl font-bold  text-black"
            }
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="flex items-center justify-center">
            <img src={articleImg} alt={title} />
          </div>

          <div dangerouslySetInnerHTML={{ __html: articleDetails }} />
        </div>
        {/* bottom link */}
        <div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-5">
            <div className="flex justify-start items-center gap-2 text-xs">
              {user?.uid ? (
                <div className="flex gap-2 border rounded-full">
                  <UpvoteButton
                    user={user}
                    users={users}
                    storyId={_id}
                    userEmail={userEmail}
                    upVoteId={user?.email}
                    articleData={articleData}
                    // upVote={upVote}
                    // downVote={downVote}
                    // refetch={refetch}
                    handleUpvote={handleUpvote}
                  ></UpvoteButton>
                  {/* <p className="pl-0 p-2"> {upvotes}</p> */}
                  {/* <DownVoteButton
                    user={user}
                    users={users}
                    storyId={_id}
                    userEmail={userEmail}
                    downVoteId={user?.email}
                    articleData={articleData}
                    handleDownvote={handleDownvote}
                    // refetch={refetch}
                  ></DownVoteButton> */}
                  {/* <p className="pl-0 p-2"> {downvotes}</p> */}
                </div>
              ) : (
                <Link to="/login">
                  <div className="flex gap-2 border rounded-full ">
                    <UpvoteButton
                      user={user}
                      users={users}
                      storyId={_id}
                      userEmail={userEmail}
                      upVoteId={user?.email}
                    ></UpvoteButton>

                    {/* <p className="pl-0 p-2"> {downvotes}</p> */}
                    {/* <DownVoteButton
                      user={user}
                      users={users}
                      storyId={_id}
                      userEmail={userEmail}
                      downVoteId={user?.email}
                    ></DownVoteButton> */}
                    {/* <p className="pl-0 p-2"> {downVote?.length}</p> */}
                  </div>
                </Link>
              )}

              {/* Modal for comment */}
              {/* The button to open modal */}
              <label htmlFor="comment-modal" className="ml-5 cursor-pointer">
                <HiOutlineChat className="text-2xl"></HiOutlineChat>
              </label>
            </div>

            <nav aria-label="Footer Navigation - Support">
              <ul className="flex flex-wrap justify-start gap-4 text-xs lg:justify-end">
                <li>
                  <a
                    href="/"
                    className={
                      isDarkMode
                        ? "text-gray-300 transition hover:opacity-75"
                        : "text-gray-500 transition hover:opacity-75"
                    }
                  >
                    <ShareIcon className="h-6 w-6  text-gray " />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className={
                      isDarkMode
                        ? "text-gray-300 transition hover:opacity-75"
                        : "text-gray-500 transition hover:opacity-75"
                    }
                  >
                    <LinkIcon className="h-6 w-6  text-gray " />
                  </a>
                </li>

                <li>
                  <button onClick={toggleDarkMode} className="">
                    {isDarkMode ? lightIcon : darkIcon}
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Modal body for comment */}
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="comment-modal" className="modal-toggle" />
          <div className="modal flex justify-end ">
            <div className="modal-box h-full w-full md:w-6/12 lg:w-4/12">
              <label
                htmlFor="comment-modal"
                className="btn btn-sm btn-circle bg-white hover:bg-white hover:text-black border-none absolute right-2 top-2"
              >
                ✕
              </label>
              <Comments key={_id} id={_id}></Comments>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-gray-500"></div>
          {/*  more store*/}
          <div className={isDarkMode ? "bg-black-250" : "bg-base-100"}>
            <div className="py-4 px-2">
              <h1
                className={
                  isDarkMode
                    ? "text-xl font-bold text-gray-100"
                    : "text-xl font-bold text-gray-900"
                }
              >
                More from {writerName}
              </h1>
              <p>{users?.bio}</p>
              {articleData3?.map((articleData) => (
                <OwnStory key={articleData._id} articleData={articleData} />
              ))}
            </div>
          </div>

          {/*  more store*/}
        </div>
      </article>
    </div>
  );
};

export default ArticleDetailsCard;
