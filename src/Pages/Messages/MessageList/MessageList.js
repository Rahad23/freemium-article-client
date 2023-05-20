import React, { useState, useEffect } from "react";

const MessageList = ({ recipient }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/messages`
        );
        const data = await response.json();
        setMessages(data.messages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessages();
  }, [recipient]);

  return (
    <ul className="list-none">
      {messages.map((message) => (
        <li className="p-2 border-b border-gray-300" key={message._id}>
          <p className="text-gray-700">{message.message}</p>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
