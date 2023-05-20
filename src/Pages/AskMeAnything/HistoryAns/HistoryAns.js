import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useLoaderData, useNavigate } from "react-router-dom";
import { APIContext } from "../../../contexts/APIProvider";
import { AuthContext } from "../../../contexts/AuthProvider";
import SideSection from "../SideSection/SideSection";

const HistoryAns = () => {
  const { fetchAPI } = useContext(APIContext);
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const navigate = useNavigate();
  const { data: singleUsers } = useQuery(["user", user?.email], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
  );

  const userEmail = singleUsers?.email;
  const { data: questionAns = [], refetch } = useQuery(
    ["questionAns", userEmail],
    () => fetchAPI(`${process.env.REACT_APP_API_URL}/apiAns?email=${userEmail}`)
  );
  const handleNewChat = () => {
    // setPrompt("")
    // setResponse('')
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
        <form className="flex flex-col justify-center items-center gap-4">
          <div className="w-full  gap-4 p-8 flex flex-col justify-between">
            <div className="w-full mt-8">
              {/* <HistoryAns></HistoryAns> */}
              <div className="px-40 overflow-y-auto">
                <div className="flex justify-center">
                  <h1 className="text-white text-4xl font-mono">
                    Ask me Anything
                  </h1>
                </div>
                <div className="px-4 pt-5">
                  <h3 className="text-white text-2xl font-mono">
                    {data.question}
                  </h3>
                </div>

                <div className="bg-[#343541]">
                  <p className="text-white max-w-screen-md p-4 whitespace-pre-line">
                    {data.answer}
                  </p>
                </div>
                {/* <code className="!whitespace-pre max-w-xl">{response}</code> */}
              </div>
            </div>
            <button className="cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4 m-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </button>

            <div className=" flex justify-center px-12  gap-2 bottom-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient">
              <input
                type="text"
                value={prompt}
                // onChange={(e) => setPrompt(e.target.value)}
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
                {/* <AiOutlineSend
                  type="submit"
                  title="Sent"
                  className="text-4xl text-green-550 cursor-pointer"
                /> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HistoryAns;
