import React from "react";
import { useLottie } from "lottie-react";
import alienRedingBook from "../../../Lottie/Alien-reading-book.json";
const SliderCreatorPage = () => {
  const options = {
    animationData: alienRedingBook,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="bg-[#F24D2E] px-10 py-1 border-t-[1px] border-black flex flex-col-reverse lg:flex-row lg:grid grid-cols-2">
      <div className="border-r-0 lg:border-r-[1px] border-gray-900 px-6 mt-10">
        <span className="tracking-widest font-semibold text-white">
          START A BLOG FOR FREE
        </span>
        <h1 className="text-5xl lg:text-7xl mt-1 leading-tight font-bold text-black-450">
          Publish, grow, <br /> and earn, all in <br /> one place.
        </h1>
        <p className="text-black-450 my-3">
          If dou have a story to tell, knowledge to share, or a perspective to
          offer — welcome home. Sign up for free so your writing can thrive in a
          network supported by millions of readers — not ads.
        </p>
        <button className="btn bg-gray-100 hover:bg-[#F24D2E] hover:text-white text-xl text-gray-900 border-0 hover:border-2 hover:border-gray-100 w-72 btn-accent mt-5 lg:mt-7 mb-6 lg:mb-0">
          start writing
        </button>
      </div>
      <div className="lg:block hidden">
        {/* lottie animation */}
        {View}
      </div>
    </div>
  );
};

export default SliderCreatorPage;
