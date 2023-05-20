import { format } from "date-fns";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { APIContext } from "../../contexts/APIProvider";

const OwnStory = ({ articleData }) => {
  const { isDarkMode } = useContext(APIContext);
  const {
    articleDetails,
    articleImg,
    articleRead,
    timestamp,
    articleTitle,
    writerName,
    _id,
  } = articleData;
  const title = articleTitle?.replace(/<[^>]+>/g, "");
  return (
    <div className="mt-7">
      <Link
        to={`/view-story/${_id}`}
        className={
          isDarkMode
            ? "relative block overflow-hidden rounded-lg shadow-lg p-8"
            : "relative block overflow-hidden shadow-md rounded-lg p-8"
        }
      >
        <div className="justify-between sm:flex">
          <div>
            <h3
              className={
                isDarkMode
                  ? "text-xl font-bold text-gray-100"
                  : "text-xl font-bold text-gray-900"
              }
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <p
              className={
                isDarkMode
                  ? "mt-1 text-xs font-medium text-gray-100"
                  : "mt-1 text-xs font-medium text-gray-600"
              }
            >
              By {writerName}
            </p>
          </div>

          <div className="ml-3 hidden flex-shrink-0 sm:block">
            <img
              alt={articleTitle}
              src={articleImg}
              className="h-20 w-20 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4 sm:pr-8 inline">
          <p
            className={
              isDarkMode ? "text-sm text-gray-100" : "text-sm text-gray-500"
            }
            dangerouslySetInnerHTML={{ __html: articleDetails?.slice(0, 190) }}
          />
          ...
        </div>

        <dl className="mt-6 flex">
          <div className="flex flex-col-reverse">
            <dd
              className={
                isDarkMode ? "text-xs text-gray-100" : "text-xs text-gray-700"
              }
            >
              {format(new Date(timestamp), "PP")}
            </dd>
          </div>

          <div className="ml-3 flex flex-col-reverse sm:ml-6">
            <dd
              className={
                isDarkMode ? "text-xs text-gray-100" : "text-xs text-gray-700"
              }
            >
              {articleRead} minute
            </dd>
          </div>
        </dl>
      </Link>
    </div>
  );
};

export default OwnStory;
