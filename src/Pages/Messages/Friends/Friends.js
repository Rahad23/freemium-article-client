import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { APIContext } from "../../../contexts/APIProvider";
import { AuthContext } from "../../../contexts/AuthProvider";
import Moment from "moment";
import moment from "moment";

const Friends = ({ friends, active }) => {
  const { user } = useContext(AuthContext);
  const { fetchAPI } = useContext(APIContext);
  const { frindInfo, messgInfo } = friends;

  const { isLoading, data: singleUsers } = useQuery(["user", user?.email], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
  );
  // console.log(messgInfo)
  return (
    <div className="flex flex-row items-center p-4 relative">
      <div className=" sm:hidden  absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
        {
          // messgInfo?<Moment fromNow>{messgInfo?.date}</Moment> : ''
          //  messgInfo? moment(messgInfo?.createdAt).startOf('mini').fromNow() : ''
        }
        {/* 2 hours ago */}
      </div>

      <div className={`avatar`}>
        <div className="w-10 rounded-full">
          <img src={frindInfo?.picture} alt="img" />
        </div>
      </div>
      <div className="w-0 md:w-32 invisible md:visible md:flex flex-col flex-grow ml-3">
        <div className="flex items-center">
          <div className="text-sm font-medium">{frindInfo?.name}</div>
          {active &&
          active.length > 0 &&
          active.some((u) => u.userId === frindInfo?._id) ? (
            <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
          ) : (
            ""
          )}
        </div>
        <div className="hidden md:block text-xs truncate w-40">
          {messgInfo && messgInfo?.senderId === singleUsers?._id ? (
            <span className="mr-1">You</span>
          ) : (
            <span className="mr-2">{frindInfo?.name}</span>
          )}
          {messgInfo && messgInfo?.message?.text ? (
            <span>{messgInfo?.message?.text.slice(0, 15)}</span>
          ) : messgInfo && messgInfo?.message?.image ? (
            <span>send a image</span>
          ) : (
            <span>connect you</span>
          )}
        </div>
      </div>
      <div className="invisible md:visible lg:visible flex-shrink-0 ml-2 self-end mb-1">
        {messgInfo?.senderId === singleUsers?._id ? (
          <div className={`avatar`}>
            <div className="w-5 rounded-full">
              <img src={frindInfo?.picture} alt="img" />
            </div>
          </div>
        ) : (
          <span className="flex items-center justify-center h-5 w-5 bg-red-400 text-white text-xs rounded-full"></span>
        )}
        {/* <span className="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">
                            3
                          </span> */}
      </div>
    </div>
  );
};

export default Friends;
