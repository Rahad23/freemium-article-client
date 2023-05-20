import React from "react";
import { Link } from "react-router-dom";

import img from "../../../Assets/Membership_Footer.svg";
const TheEndSection = () => {
  return (
    <div>
      {/* end */}
      <section className="bg-[#78e2e2] overflow-hidden">
        <div className="mx-auto max-w-screen-xl px-4 pt-6 lg:flex  lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-6xl font-bold text-black sm:text-5xl">
              Take your mind
              <strong className=" text-6xl font-bold text-black sm:block">
                in new directions.
              </strong>
            </h1>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/payment">
                <button className="block w-full rounded-full text-white bg-black-350 px-12 py-3 text-xl font-medium  shadow hover:bg-[#4171f8] hover:border-2 hover:text-white sm:w-auto">
                  Get Unlimited Access
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img
          alt="Lava"
          src={img}
          className=" h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />
      </section>
    </div>
  );
};

export default TheEndSection;
