import React, { useState, useEffect, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { AuthContext } from "../../contexts/AuthProvider";
import { fetchAsync } from "../../store/fetchSlice";
import Notification from "./Notification";
const socket = io(`${process.env.REACT_APP_API_URL}`); // Replace with your server URL

const NotificationIcon = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const { user } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const dispatch = useDispatch();
  const singleUsers = useSelector((state) => state.fetch.data);
  useEffect(() => {
    dispatch(
      fetchAsync(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
    );
  }, [dispatch, user]);

  useEffect(() => {
    // Listen for new notifications
    socket.on("new_notification", () => {
      setUnreadCount((count) => count + 1);
    });

    // Listen for notification updates
    socket.on("notification_updated", (updatedNotification) => {
      setUnreadCount((count) =>
        updatedNotification.read && count > 0 ? count - 1 : count
      );
    });

    // Fetch notifications from the API
    fetch(
      `${process.env.REACT_APP_API_URL}/notifications/${singleUsers?._id}?page=${page}&limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNotifications(data);
        setUnreadCount(data.filter((n) => !n.read).length);
      })
      .catch((error) => console.log(error));

    return () => {
      socket.off("new_notification");
      socket.off("notification_updated");
    };
  }, [singleUsers]);
  // const handleNotificationsClick = () => {
  //   setDropdownOpen(true);
  //   setUnreadCount(0); // clear unread count when dropdown is opened
  // };
  // console.log(unreadCount);
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
    <div className="flex justify-center">
      <div className="object-center">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="btn btn-ghost btn-circle relative z-10 block rounded-md focus:outline-none"
          style={{
            width: "32px",
            height: "38px",
          }}
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>

            <span className="badge badge-xs text-white badge-primary indicator-item">
              {unreadCount}
            </span>
          </div>
        </button>

        {dropdownOpen && (
          <div
            onClick={() => setDropdownOpen(false)}
            className="fixed inset-0 h-full w-full z-10"
          ></div>
        )}

        {dropdownOpen && (
          <Notification
            socket={socket}
            notifications={notifications}
            setNotifications={setNotifications}
          />
        )}
      </div>
    </div>
  );
};

export default NotificationIcon;
