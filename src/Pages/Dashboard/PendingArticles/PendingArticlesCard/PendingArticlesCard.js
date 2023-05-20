import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsBookmarkCheckFill, BsBookmarkPlus } from "react-icons/bs";
import { AuthContext } from "../../../../contexts/AuthProvider";
import Spinner from "../../../../components/Spinner/Spinner";
import { APIContext } from "../../../../contexts/APIProvider";
import { format } from "date-fns";

const PendingArticlesCard = ({ data, handleSave, handleDelete }) => {
  const [Like, setLike] = useState(true);
  const { loading, user } = useContext(AuthContext);
  const { isDarkMode } = useContext(APIContext);
  const {
    articleDetails,
    articleRead,
    timestamp,
    articleTitle,
    writerImg,
    writerName,
    articleImg,
    _id,
    isPaid,
    articleType,
  } = data;
  const title = articleTitle.replace(/<[^>]+>/g, "").slice(0, 60) + "...";
  const description = articleDetails.replace(/<[^>]+>/g, "");
  //   conditional array
  const paidSimble = (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path
        d="M12.4 12.77l-1.81 4.99a.63.63 0 0 1-1.18 0l-1.8-4.99a.63.63 0 0 0-.38-.37l-4.99-1.81a.62.62 0 0 1 0-1.18l4.99-1.8a.63.63 0 0 0 .37-.38l1.81-4.99a.63.63 0 0 1 1.18 0l1.8 4.99a.63.63 0 0 0 .38.37l4.99 1.81a.63.63 0 0 1 0 1.18l-4.99 1.8a.63.63 0 0 0-.37.38z"
        fill="#FFC017"
      ></path>
    </svg>
  );
  const descriptionSlice =
    description?.length > 170
      ? description?.slice(0, 170) + "..."
      : description;

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      {!articleType ? (
        <div
          className={
            isDarkMode
              ? "my-7 w-full mx-auto bg-black-250 rounded-xl shadow-md text-white"
              : "my-7 w-full mx-auto bg-base-100 rounded-xl shadow-md text-gray-800"
          }
        >
          <div className="card-body md:flex">
            <div className="flex gap-2 items-center">
              {/* blog auther img */}
              <img className="rounded-full w-10 h-10" src={writerImg} alt="" />
              <h3 className="ml-2 font-bold">{writerName}</h3>
              {isPaid && paidSimble}
              {isPaid && <p>Member-only</p>}
            </div>
            <Link to={`/checkArticle/${_id}`}>
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
              {/* {user && Like ?
            <div className="tooltip" data-tip="Save">
            
              <button onClick={() => handleSave(data,setLike(false))}>
                <BsBookmarkPlus className="text-xl"/>
              </button></div> :
            <div className="tooltip" data-tip="UnSave">
              <button onClick={() => handleDelete(data._id,setLike(true))}>
                <BsBookmarkCheckFill className="text-green-600 text-xl"/>
              </button>
            </div>
          } */}
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
      {/* {
     articleTypeData[0] === false && <div>
    <h1>Article has not been published yet</h1>
</div>
} */}
    </>
  );
};

export default PendingArticlesCard;
