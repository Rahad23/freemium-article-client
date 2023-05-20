import React from "react";
import { Link } from "react-router-dom";

const SideCategoryButton = ({ category }) => {
  const { CategoryName } = category;
  return (
    <div className="text-center">
      <Link to={`/category/${CategoryName}`}>
        <button className="btn bg-base-100 text-gray-900 border-[#ddd] border-1 hover:border-[#ddd] hover:border-1 text-[13px] hover:bg-base-100">
          {CategoryName}
        </button>
      </Link>
    </div>
  );
};

export default SideCategoryButton;
