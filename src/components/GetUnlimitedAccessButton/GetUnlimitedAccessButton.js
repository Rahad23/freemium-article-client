import React from "react";
import { useContext } from "react";
import { APIContext } from "../../contexts/APIProvider";

const GetUnlimitedAccessButton = ({ text }) => {
  const { isDarkMode } = useContext(APIContext);
  return (
    <button
      className={
        isDarkMode
          ? "bg-black-250 text-black font-semibold rounded-3xl py-3 px-2 w-10/12"
          : "bg-black-350 text-white rounded-3xl py-3 px-2 w-10/12"
      }
    >
      {text}
    </button>
  );
};

export default GetUnlimitedAccessButton;
