import React from "react";
import GetUnlimitedAccessButton from "./../../../components/GetUnlimitedAccessButton/GetUnlimitedAccessButton";

const SliderPage = () => {
  return (
    <div className="bg-[#4479FF] p-16">
      <div className="text-center py-20">
        <h1 className="text-5xl lg:text-8xl font-semibold text-white">
          Fuel great thinking.
        </h1>
        <p className="text-lg font-semibold text-gray-200 my-5">
          Become a Medium member to enjoy unlimited access and <br /> directly
          support the writers you read most.
        </p>
        {/* <GetUnlimitedAccessButton text={"Get unlimited access"} /> */}
        <button className="btn bg-white hover:bg-[#4479FF] hover:text-white text-xl text-gray-900 border-0 hover:border-2 hover:border-slate-200 w-72 btn-accent">
          Get Unlimited Access
        </button>
      </div>
      <hr className="text-white" />
      <div className="flex justify-center lg:justify-between items-center flex-col lg:flex-row py-14 mt-20">
        <div className="px-1">
          <h1 className="text-3xl lg:text-5xl font-semibold text-white">
            Get unlimited access to every story.
          </h1>
          <img
            className="mt-10"
            src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg"
            alt=""
          />
          <p className="mt-3 text-lg font-semibold text-gray-300">
            Read any article in our entire library across all your devices —
            with no paywalls, story limits or ads.
          </p>
        </div>
        <div className="divider lg:divider-horizontal border-white"></div>
        <div className="px-1">
          <h1 className="text-3xl lg:text-5xl font-semibold text-white">
            Support the voices you want to hear more from.
          </h1>
          <img
            className="mt-10"
            src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg"
            alt=""
          />
          <p className="mt-3 text-lg font-semibold text-gray-300">
            A portion of your membership will directly support the writers and
            thinkers you read the most.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
