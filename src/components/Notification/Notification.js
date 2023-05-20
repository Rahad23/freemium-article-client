import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import React, { useState, useEffect, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { AuthContext } from "../../contexts/AuthProvider";
import { fetchUserData } from "../../store/fetchGetSlice";
import { fetchAsync } from "../../store/fetchSlice";
import Scroll from "../Scroll/Scroll";
// const socket = io(`${process.env.REACT_APP_API_URL}`); // Replace with your server URL

const Notification = ({ notifications, setNotifications, socket }) => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const singleUsers = useSelector((state) => state.fetch.data);
  useEffect(() => {
    dispatch(
      fetchAsync(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
    );
  }, [dispatch, user]);

  useEffect(() => {
    // Fetch all notifications
    const loadNotifications = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/notifications/${singleUsers?._id}?page=${page}&limit=${limit}`
      );
      const data = await res.json();
      if (data.length === 0) {
        setHasMore(false);
      }
      setNotifications((prevNotifications) => [...prevNotifications, ...data]);
    };
    loadNotifications();

    // Listen for new notifications
    socket.on("new_notification", (newNotification) => {
      setNotifications([...notifications, newNotification]);
    });

    // Listen for notification updates
    socket.on("notification_updated", (updatedNotification) => {
      const updatedIndex = notifications.findIndex(
        (notification) => notification._id === updatedNotification._id
      );
      if (updatedIndex !== -1) {
        const newNotifications = [...notifications];
        newNotifications[updatedIndex] = updatedNotification;
        setNotifications(newNotifications);
      }
    });

    return () => {
      socket.off("new_notification");
      socket.off("notification_updated");
    };
  }, [singleUsers?._id, page]);

  const handleReadClick = (notification) => {
    // Update notification as read
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/notifications/${notification._id}`,
        { read: true }
      )
      .then((response) => {
        const updatedNotification = response.data;
        const updatedIndex = notifications.findIndex(
          (notification) => notification._id === updatedNotification._id
        );
        if (updatedIndex !== -1) {
          const newNotifications = [...notifications];
          newNotifications[updatedIndex] = updatedNotification;
          setNotifications(newNotifications);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        loaderRef.current &&
        loaderRef.current.getBoundingClientRect().bottom <= window.innerHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // notificationsSection.addEventListener("scroll", handleScroll);

    // return () => {
    //   notificationsSection.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <div
      className="absolute right-16 mt-2 mr-4 bg-white rounded-md shadow-lg overflow-hidden p-2 z-20"
      style={{ width: "20rem" }}
    >
      <Scroll>
        <ul className="p-2">
          {notifications.map((notification) => (
            <li
              key={notification._id + 1}
              onClick={() => handleReadClick(notification)}
              className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
            >
              <img
                className="h-8 w-8 rounded-full object-cover mx-1"
                src={notification?.senderPicture}
                alt="avatar"
              />
              <div className="text-gray-600 text-sm mx-2 flex flex-col gap-2">
                <p className="font-bold">{notification?.senderName}</p>
                <p>
                  <span className="font-bold">{notification?.type}:</span>
                  <span className="ml-2">
                    {notification?.message} (
                    {notification?.read ? "read" : "unread"})
                  </span>
                </p>
                <p className="font-bold text-blue-500">
                  {format(new Date(notification?.timestamp), "PP")}
                </p>
              </div>
            </li>
          ))}
          {hasMore && <div ref={loaderRef}>Loading more notifications...</div>}
        </ul>
      </Scroll>
    </div>
  );
};

export default Notification;
