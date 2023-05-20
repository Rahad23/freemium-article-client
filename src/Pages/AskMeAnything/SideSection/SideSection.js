import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideSection = ({
  handleNewChat,
  questionAns,
  setPrompt,
  setResponse,
}) => {
  // const [historyId, setHistoryId] = useState('')
  // const [historyAns, setHistoryAns] = useState({})
  // setPrompt(historyAns.question)
  // setResponse(historyAns.answer)
  // const handleHistory=(id,)=>{
  //   setHistoryId(id)
  // }
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/apiAnsHistory?id=${historyId}`)
  //     .then((res) => res.json())
  //     .then((data) => setHistoryAns(data));
  // }, [historyId]);
  // useEffect(() => {

  // }, []);
  return (
    <div className="px-4 py-5">
      <div>
        <button
          onClick={handleNewChat}
          className="btn border[1px] w-full border-white hover:border-white font-semibold text-white"
        >
          <AiOutlinePlus className="text-white font-semibold mr-3" />
          New-Chat
        </button>
      </div>
      <div className="grid justify-items-center">
        {questionAns?.map((ans) => (
          // <div
          //   key={ans?._id}
          //   className=""
          // >
          <Link
            key={ans?._id}
            to={`/hexa-ai/${ans._id}`}
            className="mt-2 cursor-pointer border-solid hover:bg-black-250 rounded-lg border border-white w-full p-2 my-2 text-white"
          >
            {ans?.question}
          </Link>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default SideSection;
