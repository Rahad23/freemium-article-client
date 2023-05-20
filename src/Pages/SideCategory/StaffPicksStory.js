import React from "react";
import { Link } from "react-router-dom";
const StaffPicksStory = ({ article }) => {
  const { _id, articleTitle, writerName, writerImg } = article;
  const title = articleTitle.replace(/<[^>]+>/g, "");
  // const title = articleTitle.slice(0)
  return (
    <div>
      <div className="flex mt-3 mb-3">
        <img
          className="w-10 h-10 rounded-full"
          src={writerImg}
          alt={writerName}
        />
        <h2 className="font-semibold text-sm ml-3">{writerName}</h2>
      </div>
      <Link to={`/view-story/${_id}`}>
        <h1
          className="font-bold"
          dangerouslySetInnerHTML={{
            __html: title.slice(0, 70),
          }}
        />
      </Link>
    </div>
  );
};

export default StaffPicksStory;
