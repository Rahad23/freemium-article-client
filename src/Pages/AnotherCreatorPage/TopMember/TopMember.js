import React from "react";

const TopMember = ({ data }) => {
  
  const { name, picture } = data;
  return (
    <div className="card h-20 w-full border-[1.5px] border-b-[#FFFFFF] border-l-0 border-r-0 rounded-none my-5 border-t-0">
      <div className="card-body p-0">
        <div className="flex items-center">
          <img className="w-16 rounded-full h-16" src={picture} alt="" />
          <h3 className="ml-2 text-xl font-bold text-gray-100">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default TopMember;
