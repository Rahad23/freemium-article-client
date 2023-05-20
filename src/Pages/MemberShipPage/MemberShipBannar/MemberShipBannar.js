import React from "react";
import { Link } from "react-router-dom";

const MemberShipBannar = () => {
  return (
    <div>
      <section className="bg-[#4171f8]">
        {/* lg:h-screen */}
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="lg:text-6xl font-bold sm:text-5xl text-white">
              Fuel great thinking.
              {/* <strong className="font-extrabold text-white sm:block">
          Increase Conversion.
        </strong> */}
            </h1>

            <p className="mt-4 text-white sm:text-xl sm:leading-relaxed">
              Become a Freemium member to enjoy unlimited access and directly
              support the writers you read most.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded-full  bg-white px-12 py-3 text-xl font-medium  shadow hover:bg-[#4171f8] hover:border-2 hover:text-white sm:w-auto"
                to="/payment"
              >
                Get Unlimited Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemberShipBannar;
