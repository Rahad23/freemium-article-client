import { format } from "date-fns";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../../components/Spinner/Spinner";
import { APIContext } from "../../../../contexts/APIProvider";
import { AuthContext } from "../../../../contexts/AuthProvider";

const MyStorie = ({ story }) => {
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useContext(APIContext);
  if (!story) {
    return <Spinner />;
  }

  const {
    articleDetails,
    articleRead,
    timestamp,
    articleTitle,
    writerImg,
    writerName,
    articleImg,
    _id,
  } = story;
  const title = articleTitle?.replace(/<[^>]+>/g, "").slice(0, 60) + "...";

  const description = articleDetails?.replace(/<[^>]+>/g, "");

  const descriptionSlice =
    description?.length > 170
      ? description?.slice(0, 170) + "..."
      : description;

  return (
    <>
      <div
        className={
          isDarkMode
            ? "my-7 w-full mx-auto bg-black-250 rounded-xl shadow-md text-white"
            : "my-7 w-full mx-auto bg-base-100 rounded-xl shadow-md text-gray-800"
        }
      >
        <div className="card-body md:flex">
          <div className="flex items-center">
            {/* blog auther img */}
            <img className="rounded-full w-10 h-10" src={writerImg} alt="" />
            <h3 className="ml-2 font-bold">{writerName}</h3>
          </div>
          <Link to={`/view-story/${_id}`}>
            <div
              className="lg:grid flex flex-col-reverse lg:flex-row"
              style={{ gridTemplateColumns: "4fr 2fr" }}
            >
              <div className="px-3">
                <h1
                  className="text-2xl font-semibold"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <div dangerouslySetInnerHTML={{ __html: descriptionSlice }} />
              </div>
              {/* blog right img */}
              <div className="flex justify-center items-center p-2 ">
                <img className="w-56 h-32" src={articleImg} alt="" />
              </div>
            </div>
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex items-center ml-3 lg:ml-2 ">
              {/* <ReactTimeAgo date={timestamp} locale="en-US" /> */}
              <span className="block font-semibold">
                {format(new Date(timestamp), "PP")}
              </span>
              <span className="block ml-3 text-red-500 font-semibold">
                {articleRead} min read
              </span>
            </div>
            {user && (
              <div className="tooltip" data-tip="Save">
                {/* <button onClick={() => handleSave(data)}>
                        <BsBookmarkPlus />
                      </button> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStorie;
