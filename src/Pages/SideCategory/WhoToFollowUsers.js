import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import FollowButton from "../FollowButton/FollowButton";

const WhoToFollowUsers = ({ users, isDarkMode }) => {
  const { user } = useContext(AuthContext);
  const { name, picture } = users;

  return (
    <div className="flex mb-5 justify-between items-center">
      <div className="flex items-center">
        <img className="rounded-full w-8 h-8" src={picture} alt={name} />
        <div>
          <h2 className="font-bold text-lg ml-3">{name.slice(0, 22)}</h2>
          <h1 className="text-sm ml-3">Author of technology... </h1>
        </div>
      </div>
      <FollowButton
        classes={
          // isDarkMode
          //   ? "btn btn-sm bg-gray-100 hover:bg-gray-200 hover:text-gray-800 text-gray-900 mt-3 rounded-full btn-outline"
          //   :
          "btn btn-sm mt-3 rounded-full btn-outline"
        }
        user={user}
        users={users}
        userId={users?._id}
        userEmail={user?.email}
        followingId={user?.email}
        unfollowingId={user?.email}
      />
    </div>
  );
};

export default WhoToFollowUsers;
