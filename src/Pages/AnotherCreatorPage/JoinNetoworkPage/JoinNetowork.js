import React from "react";

import { useState, useEffect } from "react";
import TopMember from "../TopMember/TopMember";
// import TopMember from "../TopMember/TopMember";

const JoinNetowork = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [userData]);
  return (
    <div className="bg-black-450 lg:grid grid-cols-2 px-10 py-2 flex flex-col">
      <div>
        <h1 className="lg:text-7xl text-5xl font-serif text font-semibold text-gray-100 mt-8">
          Join a network <br /> of curious <br /> minds.
        </h1>
      </div>
      <div className="px-5 mt-8">
        {userData.map((data) => (
          <TopMember key={data?._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default JoinNetowork;
