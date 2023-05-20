import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GetUnlimitedAccessButton from "../../../components/GetUnlimitedAccessButton/GetUnlimitedAccessButton";
import Articles from "../../ArticlesSection/Articles";

import SideCategory from "../../SideCategory/SideCategory";

import Manubar from "../AfterLoginHadBanar/Manubar/Manubar";
import HomeHadBanar from "../HomeHadBanar";
import { AuthContext } from "./../../../contexts/AuthProvider";

import "./Home.css";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      {user?.uid ? ( // after log in user  UI  grid sm:grid-rows-1 md:grid-cols-3 lg:grid-cols-3 gap-0 md:gap-4
        <div>
          <div className="w-11/12 mx-auto lg:grid lg:grid-cols-3 grid-cols-1">
            <section className="col-span-2 order-last md:order-first border-r-0 lg:border-r-[1px] pr-10">
              {/* <section className="col-span-2 border-r-0 lg:border-r-[1px] pr-10"> */}
              <Manubar />
              <Articles></Articles>
            </section>
            {/* home right side content m-8 md:m-0  */}
            <aside className="lg:mx-auto my-10 lg:px-10 text-center lg:text-start">
              <div className="flex justify-center ">
                <Link className="w-full text-center" to="/payment">
                  <GetUnlimitedAccessButton text={"Get unlimited access"} />
                </Link>
              </div>
              <SideCategory />
            </aside>
          </div>
        </div>
      ) : (
        // before log in user UI
        <>
          <HomeHadBanar />
          <div className="w-11/12 mx-auto lg:grid grid-rows-1 md:grid-cols-3 gap-4 mt-3 lg:mt-0">
            <section className="col-span-2">
              <Articles />
            </section>
            <div className="pt-8 text-center w-full">
              <Link to="/payment">
                <GetUnlimitedAccessButton text={"Get Unlimited Access"} />
                {/* <button className="bg-black text-white rounded-3xl py-3 px-2 w-9/12">
                  Get unlimited access
                </button> */}
              </Link>
              <SideCategory />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
