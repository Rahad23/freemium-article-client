import React from "react";
import Spinner from "../../../components/Spinner/Spinner";
import MyStorie from "./MyStories/MyStorie";
const Published = ({ myStories, isLoading, isError, error }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {!myStories?.length && (
        <p className="p-20">You haven’t published any public stories yet.</p>
      )}
      {myStories?.map((story) => (
        <MyStorie story={story} key={story?._id} />
      ))}
    </div>
  );
};

export default Published;
