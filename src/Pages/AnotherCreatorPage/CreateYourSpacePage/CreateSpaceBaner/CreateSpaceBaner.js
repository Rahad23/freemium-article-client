import React from "react";
import CreateSpacePageText from "../CreateSpacePageText/CreateSpacePageText";

const CreateSpaceBaner = () => {
  return (
    <div className="px-10 pt-20">
      <div className="flex lg:justify-between flex-col lg:flex-row">
        <div>
          <h1 className="text-7xl font-semibold text-black-450">
            Create <br /> your space.
          </h1>
          <p className="lg:mt-28 mt-10 text-lg font-semibold text-black-450">
            Tell your story your way — with different ways to <br /> write,
            style, and brand your work.
          </p>
          <button className="btn bg-gray-900 hover:bg-[#0e0d0d] hover:text-white text-xl text-gray-100 border-0 hover:border-2 hover:border-gray-100 w-72 btn-accent mt-7 mb-7 lg:mb-0">
            start writing
          </button>
        </div>
        <img
          src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/earn_kelly_kaki.png"
          alt=""
        />
      </div>
      <CreateSpacePageText />
    </div>
  );
};
export default CreateSpaceBaner;
