import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineChat } from "react-icons/hi";
import { Link } from "react-router-dom";
import ReplyComment from "./ReplyComment";

const Comments = ({ id }) => {
  const { register, handleSubmit, reset, watch } = useForm();
  const comment = watch("comment");
  const { user } = useContext(AuthContext);
  const date = format(new Date(), "PP");

  const [reply, setReply] = useState();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(false);
  // Update comment state
  const [singleComent, setSingleComent] = useState([]);

  // console.log(comments);

  const handleComment = (data) => {
    // console.log(data);
    const comment = {
      articleId: id,
      userEmail: user?.email,
      userName: user?.displayName,
      profileImage: user?.photoURL,
      comment: data.comment,
      commentDate: date,
    };

    // save post information to the database

    fetch(`${process.env.REACT_APP_API_URL}/comments`, {
      method: "POST",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success("Respond placed successfully");

          reset();

          setNewComment(true);
        }
      });
  };

  // fetch comment after delete

  const fetchComments = () => {
    fetch(`${process.env.REACT_APP_API_URL}/comments?articleId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  };

  // for delete comment
  const deleteCommentHandle = (id) => {
    // console.log(id);
    fetch(`${process.env.REACT_APP_API_URL}/comment/deleteComment/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("successfully delete");
          fetchComments();
        }
      });
  };

  //   Update comment
  // get specific comment
  const handleGetComment = (id) => {
    // console.log(id)
    const singleComent = comments.find((c) => c._id === id);
    setSingleComent(singleComent);
  };

  const handleUpdateComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.updateComment.value;

    fetch(
      `${process.env.REACT_APP_API_URL}/updateComment/${singleComent?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ comment }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("successful update comment");
          reset();
          fetchComments();
        }
      });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/comments?articleId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        // fetchComments();
        // console.log(data);
      });
  }, [id, newComment, reply]);

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-5 ">
        Responses ({comments.length})
      </h1>
      {user?.uid ? (
        <>
          <div className="flex mb-5">
            <img className="w-8 rounded-full" src={user?.photoURL} alt="" />
            <h4 className="mt-1 ml-3">{user?.displayName}</h4>
          </div>

          <form onSubmit={handleSubmit(handleComment)}>
            <textarea
              className="textarea  textarea-sm w-full "
              {...register("comment")}
              placeholder="What are your thoughts"
            />

            <div className="flex justify-end my-5">
              <input
                disabled={!comment}
                className="btn bg-[#059b00] hover:bg-[#0F730C] btn-sm rounded-full text-white"
                type="submit"
              />
            </div>
          </form>
        </>
      ) : (
        <span>
          Please{" "}
          <Link to="/login" className="text-[#059b00] font-semibold">
            Login
          </Link>{" "}
          to Respond
        </span>
      )}

      <div>
        <div>
          <div>
            {comments?.map((comment) => (
              <div className="border-y" key={comment?._id}>
                <div className="my-5">
                  <div className="flex justify-between">
                    <div className="flex">
                      {comment?.profileImage ? (
                        <div className="avatar ">
                          <div className="w-8 rounded-full mt-3 ">
                            <img src={comment?.profileImage} alt="" />
                            <h2>{comment?.userName}</h2>
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-8"></div>
                          </div>
                        </div>
                      ) : (
                        <div className="avatar placeholder  mt-3">
                          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span className="text-xs">
                              <span className="ml-1">No</span> <br />{" "}
                              <span>Img</span>
                            </span>
                          </div>
                        </div>
                      )}
                      <div>
                        <p className="text-xs ml-3 mt-3 text-black-350 font-semibold">
                          {comment?.userName}
                        </p>
                        <p className="text-xs ml-3">{comment?.commentDate}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="dropdown  dropdown-left">
                        <button>
                          <label
                            tabIndex={0}
                            className="font-bold text-xl cursor-pointer"
                          >
                            ...
                          </label>
                        </button>

                        {user?.email === comment?.userEmail ? (
                          <>
                            <ul
                              tabIndex={0}
                              className="dropdown-content  mt-5 border menu p-2 shadow-lg bg-base-100 rounded-box w-44"
                            >
                              <li>
                                <label
                                  onClick={() => handleGetComment(comment?._id)}
                                  htmlFor="my-modal"
                                  className=" text-xs font-semibold"
                                >
                                  Edit this respond
                                </label>
                              </li>
                              <li>
                                <button
                                  onClick={() =>
                                    deleteCommentHandle(comment?._id)
                                  }
                                  className="text-xs font-semibold"
                                >
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </>
                        ) : (
                          <ul
                            tabIndex={0}
                            className="dropdown-content  mt-5 border menu p-2 shadow-lg bg-base-100 rounded-box w-44"
                          >
                            <li>
                              <Link to="" className="text-xs font-semibold">
                                Report
                              </Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <form onSubmit={handleUpdateComment}>
                        <textarea
                          defaultValue={singleComent?.comment}
                          name="updateComment"
                          className="textarea border-none w-full"
                        ></textarea>
                        <div className="flex justify-end  items-end">
                          <div className="modal-action">
                            <label
                              htmlFor="my-modal"
                              className="btn btn-sm rounded-full bg-primary"
                            >
                              Cancel
                            </label>
                          </div>
                          <button
                            type="submit"
                            className=" rounded-full btn btn-sm mx-2 bg-green-500 text-white"
                          >
                            update
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <p className="text-xs my-2 ">{comment?.comment}</p>

                  <div className="grid grid-cols-12 justify-center items-center">
                    <div className="">
                      <button>
                        <AiOutlineLike></AiOutlineLike>
                      </button>
                    </div>
                    <div className="collapse col-span-10">
                      <input type="checkbox" />
                      <button className="collapse-title flex">
                        <HiOutlineChat className="text-2xl"></HiOutlineChat>
                        {<span>{comment?.replyComment?.length} reply</span>}
                      </button>
                      <div className="collapse-content p-0">
                        {comment?.replyComment?.map((reply) => (
                          <div className="block" key={reply._id}>
                            <div className="border-x">
                              <div>
                                <div className="flex mr-3">
                                  <div>
                                    {comment?.profileImage ? (
                                      <div className="avatar ">
                                        <div className="w-8 rounded-full mt-3 ml-3">
                                          <img
                                            src={reply?.profileImage}
                                            alt=""
                                          />
                                          <div className="bg-neutral-focus text-neutral-content rounded-full w-12"></div>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="avatar placeholder ml-5 mt-3">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                          {/* <span className="text-sm ml-5"> <span className='text-sm ml-1 mb-0'> No</span> <span className='ml-3 mt-0'>Image</span></span> */}
                                          <span className="text-xs">
                                            <span className="ml-2">No</span>{" "}
                                            <br /> <span cl>Image</span>
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div>
                                    <p className="text-xs ml-3 mt-3 text-black-350 font-semibold">
                                      {reply?.userName}
                                    </p>
                                    <p className="text-xs ml-3">
                                      {reply?.commentDate}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="text-xs mx-2 my-1">
                                {reply?.replyComment}
                              </div>
                            </div>
                          </div>
                        ))}

                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div className="dropdown dropdown-top dropdown-left">
                      <label tabIndex={1} className=" cursor-pointer ml-1">
                        Reply
                      </label>
                      <div tabIndex={1} className="dropdown-content">
                        {" "}
                        <ReplyComment
                          comment={comment}
                          setReply={setReply}
                        ></ReplyComment>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
