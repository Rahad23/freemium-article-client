import React from "react";
import img from "../../../Assets/UnlimitedReading.svg";
const UnlimitedAcess = () => {
  return (
    <div>
      <article className="overflow-hidden  bg-[#4171f8]">
        <div className="text-white p-4 sm:p-6 ">
          <h3 className="my-5 text-5xl  text-white">
            Get unlimited access to every story.
          </h3>
          <img alt="Office" src={img} className=" object-cover" />
          <p className="mt-2 text-lg font-medium  text-white line-clamp-3">
            Read any article in our entire library across all your devices —
            with no paywalls, story limits or ads.
          </p>
        </div>
      </article>
    </div>
  );
};

export default UnlimitedAcess;
