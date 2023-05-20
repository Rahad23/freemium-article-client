import { LinkIcon, ShareIcon } from "@heroicons/react/24/solid";

import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
// import Comments from "../../ShowMoreArtical/Comments";
// import UpvoteButton from "../../UpvoteButton/UpvoteButton";
// import { HiOutlineChat } from "react-icons/hi";
// import ListenButton from "./ListenButton";
import { AuthContext } from "./../../../../contexts/AuthProvider";
import { APIContext } from "./../../../../contexts/APIProvider";
import Swal from "sweetalert2";
import { format } from "date-fns";

const PendingArticlesDetailsCard = ({ users }) => {
  const navigate = useNavigate();
  const articleData = useLoaderData();
  //   console.log(articleData)
  //   console.log(articleData?.articleImg)
  const { user } = useContext(AuthContext);
  const data = {
    articleType: true,
  };
  const publishPermission = (_id) => {
    fetch(`${process.env.REACT_APP_API_URL}/editArticleType/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Article publish successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/pendingArticle");
        } else {
          toast.error("Publishing failed. TRY AGAIN");
        }
      });
  };

  //   article rejected function
  const rejectPublish = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to be rejected this article!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, rejected!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_API_URL}/Story/reportedStory/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("rejected!", "Your file has been rejected.", "success");
              navigate("/dashboard/pendingArticle");
            }
          });
      }
    });
  };
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

  // console.log(articleData)
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

  // reported handler
  const reportedHandler = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/story/reportedStory/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          toast.success("Add Report  successfully");
        }
      });
  };
  return (
    <div>
      {/* card */}
      <article className="lg:p-4 p-7 w-full lg:w-[60%] mx-auto shadow-xl lg:mt-20 mt-10">
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
                      {/* <ListenButton
                        articleTitle={title}
                        articleDetails={details}
                      /> */}
                    </li>
                  )}
                  {isPaid && (
                    <>
                      <li className="p-1 leading-none">
                        {/* <ListenButton
                          articleTitle={title}
                          articleDetails={details}
                        /> */}
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
                      ? "mt-2 px-3 py-2 shadow menu menu-compact dropdown-content bg-black-250 text-white rounded-box w-52"
                      : "mt-2 px-3 py-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box text-black-350 w-52"
                  }
                >
                  <li>
                    <button
                      onClick={() => publishPermission(_id)}
                      className="btn bg-[#4CAF50] hover:bg-[#4CAF50] border-none w-full rounded-none text-white"
                    >
                      Publish
                    </button>
                    {/* <a href="/">Publish</a> */}
                  </li>
                  <li className="mt-2">
                    <button
                      onClick={() => rejectPublish(_id)}
                      className="btn bg-[#d11a2a] hover:bg-[#cc1d2b] border-none w-full rounded-none text-white "
                    >
                      Rejected
                    </button>
                    {/* <a href="/">Rejected</a> */}
                  </li>
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
          {/* Modal body for comment */}
          {/* Put this part before </body> tag */}
          {/* <input type="checkbox" id="comment-modal" className="modal-toggle" />
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
          </div> */}

          <div className="pt-8 mt-8 border-t border-gray-500"></div>
        </div>
      </article>
    </div>
  );
};

export default PendingArticlesDetailsCard;
