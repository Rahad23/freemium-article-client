import React from "react";
import GetUnlimitedAccessButton from "./../../../components/GetUnlimitedAccessButton/GetUnlimitedAccessButton";

const AnotherSlide = () => {
  return (
    <div className="mt-28 border-y-[1px] border-slate-700 bg-[#BCDFFF]">
      <div className="text-center">
        <h1 className="text-4xl lg:text-8xl my-12 text-black-450 font-semibold">
          Take your mind <br /> in new directions.
        </h1>
        {/* <GetUnlimitedAccessButton text={"Get unlimited access"} /> */}
        <button className="btn bg-gray-900 hover:bg-[#333] hover:text-white text-xl text-white border-0 hover:border-2 hover:border-gray-900 w-72 btn-accent ">
          Get Unlimited Access
        </button>
        <img
          src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Footer.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AnotherSlide;
