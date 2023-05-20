import React from "react";

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={`hover:text-gray-100 from-black-250 to-black-350 text-white ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
