import React, { useState } from "react";
import axios from "axios";
import { AiOutlineSend } from "react-icons/ai";
import SideSection from "./SideSection/SideSection";

import { useContext } from "react";
import { APIContext } from "../../contexts/APIProvider";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const AskMeAnything = () => {
  const { fetchAPI } = useContext(APIContext);
  const { user } = useContext(AuthContext);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  // console.log(singleUsers.email);

  const {
    isLoading,

    data: singleUsers,
  } = useQuery(["user", user?.email], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
  );

  const userEmail = singleUsers?.email;
  const { data: questionAns = [], refetch } = useQuery(
    ["questionAns", userEmail],
    () => fetchAPI(`${process.env.REACT_APP_API_URL}/apiAns?email=${userEmail}`)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a request to the server with the prompt
    axios
      .post(`${process.env.REACT_APP_API_URL}/hexa-ai`, { prompt, userEmail })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data);
        refetch();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleNewChat = () => {
    setPrompt("");
    setResponse("");
    navigate("/hexa-ai");
  };
  return (
    <div
      className="grid min-h-screen h-[660px]"
      style={{ gridTemplateColumns: "1fr 4fr" }}
    >
      <div className="bg-[#202123]">
        <SideSection handleNewChat={handleNewChat} questionAns={questionAns} />
      </div>
      <div className="w-full mx-auto bg-[#343541]">
      <div className="w-full mt-8">
              {/* <HistoryAns></HistoryAns> */}
              <div className="px-40 overflow-y-auto">
                <div className="flex justify-center">
                  <h1 className="text-white text-4xl font-mono">
                    Ask me Anything
                  </h1>
                </div>
                <div className="px-4 pt-5">
                  <h3 className="text-white text-2xl font-mono">{prompt}</h3>
                </div>

                <div className="bg-[#343541]">
                  <p className="text-white max-w-screen-md p-4 whitespace-pre-line">
                    {response}
                  </p>
                </div>
                {/* <code className="!whitespace-pre max-w-xl">{response}</code> */}
              </div>
            </div>
            <footer>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4"
        >
          <div className="w-full gap-4 p-8">
            

            <div className="flex bottom-0 items-center justify-center gap-4 mt-64 px-12">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask me Anything"
                className="p-2 w-3/4 rounded-lg input input-bordered input-info"
              />
              <div className="flex items-center">
                <button type="submit">
                  <AiOutlineSend
                    type="submit"
                    title="Sent"
                    className="text-4xl text-green-550 cursor-pointer"
                  />
                </button>
              </div>
            </div>
          </div>
        </form>
        </footer>
      </div>
    </div>
  );
};

export default AskMeAnything;
