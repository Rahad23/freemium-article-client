import { format } from "date-fns";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { APIContext } from "./../../../contexts/APIProvider";

const SelectCategoryCard = ({ data }) => {
  // const { loading } = useContext(AuthContext);
  const {
    articleDetails,
    articleRead,
    timestamp,
    articleTitle,
    writerImg,
    writerName,
    articleImg,
    _id,
  } = data;

  const title = articleTitle.replace(/<[^>]+>/g, "").slice(0, 60) + "...";
  const description = articleDetails.replace(/<[^>]+>/g, "");
  const descriptionSlice =
    description?.length > 170
      ? description?.slice(0, 170) + "..."
      : description;
  //   if (loading) {
  //     return <Spinner />;
  //   }
  const { isDarkMode } = useContext(APIContext);
  return (
    <>
      <Link to={`/view-story/${_id}`}>
        <div
          className={
            isDarkMode
              ? "my-7 w-full mx-auto bg-black-250 rounded-xl shadow-lg"
              : "my-7 w-full mx-auto bg-white rounded-xl shadow-md"
          }
        >
          <div className="card-body md:flex">
            <div className="flex items-center">
              {/* blog auther img */}
              <img className="rounded-full w-10 h-10" src={writerImg} alt="" />
              <h3
                className={
                  isDarkMode
                    ? "ml-2 font-bold text-gray-100"
                    : "ml-2 font-bold text-gray-900"
                }
              >
                {writerName}
              </h3>
            </div>
            <div
              className="lg:grid flex flex-col-reverse lg:flex-row"
              style={{ gridTemplateColumns: "4fr 2fr" }}
            >
              <div>
                <h1
                  className={
                    isDarkMode
                      ? "text-2xl font-semibold text-gray-100"
                      : "text-2xl font-semibold text-gray-800"
                  }
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                  className={isDarkMode ? "text-gray-100" : "text-gray-900"}
                  dangerouslySetInnerHTML={{ __html: descriptionSlice }}
                />
              </div>
              {/* blog right img */}
              <div className="flex justify-center items-center p-2 ">
                <img className="w-56 h-32" src={articleImg} alt="" />
              </div>
            </div>
            <div className="flex items-center">
              <span
                className={
                  isDarkMode
                    ? "block text-gray-100 font-semibold"
                    : "block text-gray-700 font-semibold"
                }
              >
                {format(new Date(timestamp), "PP")}
              </span>
              <span className="block ml-3 text-red-500 font-semibold">
                {articleRead}-read
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SelectCategoryCard;
