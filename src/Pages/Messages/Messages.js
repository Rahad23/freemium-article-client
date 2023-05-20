import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-hot-toast";
import "./Messages.css";
import { io } from "socket.io-client";
import { APIContext } from "../../contexts/APIProvider";
import { AuthContext } from "../../contexts/AuthProvider";
import MessagesJsRightSide from "./MessagesJsRightSide";
import useSound from "use-sound";
import notificationSound from "../../audio/Notification - Notification.mp3";
import Friends from "./Friends/Friends";
const ENDPOINT = `${process.env.REACT_APP_API_URL}`;
// const socket = socketIOClient(ENDPOINT);
const socket = io.connect(ENDPOINT);

function Messages() {
  const [getMessage, setGetMessage] = useState();
  const { user } = useContext(AuthContext);
  const { fetchAPI, isDarkMode } = useContext(APIContext);
  const [newMessages, setNewMessages] = useState([]);
  const [socketMessages, setSocketMessages] = useState("");
  const [active, setActive] = useState([]);
  const [currentFriend, setCurrentFriend] = useState("");
  const [typingMessage, setTypingMessage] = useState("");
  const [notificationSplay] = useSound(notificationSound);
  const [messageSendSuccess, setMessageSendSuccess] = useState(false);
  const imageHostKey = process.env.REACT_APP_IMG_BB_KEY;
  console.log(getMessage);
  // console.log(currentFriend?._id);

  const { isLoading, data: singleUsers } = useQuery(["user", user?.email], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
  );

  // Get Message data

  const {
    isGetMessagesLoading,
    data: getMessages,
    refetch: getMessageRefetch,
  } = useQuery(["sendMessage", currentFriend?._id, singleUsers?._id], () =>
    fetchAPI(
      `${process.env.REACT_APP_API_URL}/sendMessage/${currentFriend?._id}/getMseeage/${singleUsers?._id}`
    )
  );

  const {
    data: friends,
    isLoading: friendsLoading,
    refetch: friendsRefetch,
  } = useQuery(["friends", singleUsers?._id], () =>
    fetchAPI(
      `${process.env.REACT_APP_API_URL}/friends?myId=${singleUsers?._id}`
    )
  );
  // console.log(singleUsers);
  //get default frist friend message
  useEffect(() => {
    if (friends && friends?.length > 0) {
      setCurrentFriend(friends[0]?.frindInfo);
    }
  }, [friends]);
  console.log(currentFriend);
  // message input handler
  const messageInputHandl = (e) => {
    setNewMessages(e.target.value);
    socket.emit("typingMessage", {
      senderId: singleUsers?._id,
      reciverId: currentFriend?._id,
      senderImage: singleUsers?.picture,
      msg: e.target.value,
    });
  };
  // send message handler
  const sendMessage = (e) => {
    e.preventDefault();
    notificationSplay();
    const data = {
      senderName: singleUsers?.name,
      senderId: singleUsers?._id,
      senderImage: singleUsers?.picture,
      reciverId: currentFriend?._id,
      message: { text: newMessages ? newMessages : "", image: "" },
      date: new Date(),
    };
    console.log(data);
    // send message in socket server last modify

    socket.emit("sendMessage", {
      senderId: singleUsers?._id,
      senderName: singleUsers?.name,
      senderImage: singleUsers?.picture,
      reciverId: currentFriend?._id,
      message: { text: newMessages ? newMessages : "", image: "" },
      date: new Date(),
    });

    // set typing message empty
    socket.emit("typingMessage", {
      senderId: singleUsers?._id,
      reciverId: currentFriend?._id,
      msg: "",
    });
    fetch(`${process.env.REACT_APP_API_URL}/sendMessage`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setMessageSendSuccess(true);
        // toast.success(`Saved message`);
        setNewMessages("");
        getMessageRefetch();
      });
  };
  /*==============
soket work
================*/

  // send user
  useEffect(() => {
    socket.emit("addUser", singleUsers?._id, singleUsers);
  }, [singleUsers]);

  // get user from socket
  useEffect(() => {
    socket.on("getUsers", (users) => {
      const filterUsers = users?.filter((u) => u.userId !== singleUsers?._id);
      setActive(filterUsers);
    });
  }, []);
  // get message from socket.
  useEffect(() => {
    socket.on("getMessage", (message) => {
      setSocketMessages(message);
    });
  }, []);
  // get typing message
  useEffect(() => {
    socket.on("getTypingMessage", (data) => {
      setTypingMessage(data);
    });
  }, []);
  // show messsage in user window.
  useEffect(() => {
    if (socketMessages && currentFriend) {
      if (
        socketMessages.senderId === currentFriend._id &&
        socketMessages.reciverId === singleUsers?._id
      ) {
        setGetMessage(socketMessages);
        setSocketMessages("");
      }
    }
  }, [socketMessages]);
  // get notification messsage .
  useEffect(() => {
    if (
      socketMessages &&
      socketMessages.senderId !== currentFriend._id &&
      socketMessages.reciverId === singleUsers?._id
    ) {
      notificationSplay();
      toast.success(`${socketMessages.senderName} send a new message`);
    }
  }, [socketMessages]);
  //get message
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/sendMessage/${currentFriend?._id}/getMseeage/${singleUsers?._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGetMessage(data);
        friendsRefetch();
        // getMessageRefetch();
      });
  }, [currentFriend, getMessages]);

  // emonji handler
  const emojiHnadler = (emoje) => {
    // console.log(newMessages);
    setNewMessages(`${newMessages}` + emoje);
    // set typing message empty
    socket.emit("typingMessage", {
      senderId: singleUsers?._id,
      reciverId: currentFriend?._id,
      msg: emoje,
    });
  };
  //  img send
  const sendImage = (e) => {
    if (e.target.files.length !== 0) {
      // console.log(e.target.files[0]);
      notificationSplay();
      const img = e.target.files[0];
      // send img socket server
      socket.emit("sendMessage", {
        senderId: singleUsers?._id,
        senderName: singleUsers?.name,
        reciverId: currentFriend?._id,
        message: { text: "", image: img },
        date: new Date(),
      });

      const formData = new FormData();
      formData.append("image", img);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            const data = {
              senderName: singleUsers?.name,
              senderId: singleUsers?._id,
              reciverId: currentFriend?._id,
              message: { text: "", image: imgData.data.url },
              date: new Date(),
            };

            fetch(`${process.env.REACT_APP_API_URL}/send-image`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ data }),
            })
              .then((res) => res.json())
              .then((result) => {
                toast.success(`Saved img`);
                getMessageRefetch();
                setNewMessages("");
              });
          }
        });
    }
  };
  // sendMseeage successfully last modify
  // useEffect(() => {
  //   if (messageSendSuccess === true) {
  //     socket.emit("sendMessage",
  //      {
  //         senderId: singleUsers?._id,
  //         senderName: singleUsers?.name,
  //         senderImage:singleUsers?.picture,
  //         reciverId: currentFriend?._id,
  //         message: { text: newMessages ? newMessages : "", image: "" },
  //         date: new Date(),
  //       }
  //       );
  //   }
  // }, [messageSendSuccess]);

  if (isLoading && friendsLoading && isGetMessagesLoading) {
    return;
  }
  return (
    <div>
      <div
        className={
          isDarkMode
            ? " flex flex-row h-screen antialiased bg-black-350 text-white"
            : " flex flex-row h-screen antialiased text-gray-800"
        }
      >
        <div className="flex flex-row w-32 md:w-96 flex-shrink-0  ">
          <div className="flex flex-col w-32 md:w-full h-full pl-4 pr-4 py-4 ">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                {/* <div className="text-xl font-semibold">Messages</div>
                <div className="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">
                  5
                </div> */}
                <div className="flex flex-row items-center py-4">
                  <img
                    src={user?.photoURL}
                    alt="img"
                    className="flex items-center justify-center h-10 w-10 rounded-full  font-bold flex-shrink-0"
                  ></img>
                  <div className="hidden md:flex flex-col flex-grow ml-3">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">
                        {user?.displayName}
                      </div>
                      {active &&
                      active.length > 0 &&
                      active.some((u) => u.userId === singleUsers?._id) ? (
                        <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="text-xs truncate w-40">
                      Full Stack Web Developer
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-auto">
                <button className="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
                  <svg
                    className="w-4 h-4 stroke-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-5">
              <ul className="flex flex-row items-center justify-between">
                <li className="flex items-center pb-3 text-xs font-semibold relative text-green-500">
                  <span>All Conversations</span>
                  <span className="absolute left-0 bottom-0 h-1 w-6 bg-green-500 rounded-full"></span>
                </li>
              </ul>
            </div>

            <div className="h-full overflow-hidden relative pt-2">
              <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4">
                {/* friends */}
                {friends && friends.length > 0
                  ? friends?.map((friends) => (
                      <div
                        onClick={() => setCurrentFriend(friends?.frindInfo)}
                        friends={friends}
                        key={friends?.frindInfo?._id}
                        className="cursor-pointer"
                      >
                        {/* <div className=" sm:hidden  absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
                          2 hours ago
                        </div>

                        <div className={`avatar`}>
                          <div className="w-10 rounded-full">
                            <img src={user?.frindInfo?.picture} alt="img" />
                          </div>
                        </div>
                        <div className="flex flex-col flex-grow ml-3">
                          <div className="flex items-center">
                            <div className="text-sm font-medium">
                              {user?.frindInfo?.name}
                            </div>
                            {active &&
                            active.length > 0 &&
                            active.some((u) => u.userId === user?.frindInfo?._id) ? (
                              <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="sm:hidden lg:block text-xs truncate w-40">
                            Good after noon! how can i help you?
                          </div>
                        </div>
                        <div className="sm:hidden md:block lg:block flex-shrink-0 ml-2 self-end mb-1">
                          <span className="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">
                            3
                          </span>
                        </div> */}
                        <Friends friends={friends} active={active}></Friends>
                      </div>
                    ))
                  : "no friend"}
              </div>
              {/* <div className="absolute bottom-0 right-0 mr-2">
                <button className="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div
          className={
            isDarkMode
              ? "flex flex-col justify-between w-full bg-black-350 text-white px-4 "
              : "flex flex-col justify-between w-full bg-white px-4 "
          }
        >
          {currentFriend ? (
            <MessagesJsRightSide
              friends={friends}
              currentFriend={currentFriend}
              newMessages={newMessages}
              messageInputHandl={messageInputHandl}
              sendMessage={sendMessage}
              getMessage={getMessage}
              singleUsers={singleUsers}
              emojiHnadler={emojiHnadler}
              sendImage={sendImage}
              active={active}
              typingMessage={typingMessage}
            ></MessagesJsRightSide>
          ) : (
            <p className="text-xl font-bold text-centar">
              Please select your friend
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messages;
