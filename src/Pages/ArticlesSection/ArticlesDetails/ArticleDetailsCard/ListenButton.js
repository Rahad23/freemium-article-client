import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function ListenButton({ articleTitle, articleDetails }) {
  const listens = articleTitle + articleDetails;
  const [text] = useState(listens);
  const [pitch] = useState(1);
  const [rate] = useState(1);
  const [voiceIndex] = useState(null);
  const onEnd = () => {
    // You could do something here after speaking has finished
  };
  const { speak, cancel, speaking, voices } = useSpeechSynthesis({
    onEnd,
  });
  // console.log(articleTitle);
  const voice = voices[voiceIndex] || null;

  return (
    <div>
      {speaking ? (
        <button
          className="text-green-800 p-2 rounded-lg flex items-center font-medium text-sm"
          type="button"
          onClick={cancel}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="h-5 w-5 mr-1"
          >
            <path
              d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM6.77 10.46a.62.62 0 1 1-1.23 0V5.54a.62.62 0 0 1 1.23 0v4.92zm3.7 0a.62.62 0 1 1-1.24 0V5.54a.62.62 0 0 1 1.23 0v4.92z"
              fill="#1D7B1A"
            ></path>
          </svg>
          Stop
        </button>
      ) : (
        <button
          className="text-green-800 p-2 rounded-lg flex items-center font-medium text-sm"
          type="button"
          onClick={() => speak({ text, voice, rate, pitch })}
        >
          <svg
            className="h-5 w-5 mr-1"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm2.8 8.51l-3.69 2.46a.62.62 0 0 1-.96-.5V5.53a.62.62 0 0 1 .96-.51l3.7 2.46a.62.62 0 0 1 0 1.02z"
              fill="#1D7B1A"
            ></path>
          </svg>
          Listen
        </button>
      )}
    </div>
  );
}

export default ListenButton;
