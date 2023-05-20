import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { APIContext } from "../../../../../contexts/APIProvider";

const WriterAvatarImg = () => {
  const { users } = useContext(APIContext);
  return (
    <div className="mt-4">
      <div className="avatar-group -space-x-3">
        {users.map((data) => (
          <img
            className="w-10 h-10 rounded-full"
            key={data?._id}
            src={data?.picture}
            alt="people"
          />
        ))}
      </div>
    </div>
  );
};

export default WriterAvatarImg;
