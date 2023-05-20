import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { APIContext } from "./../../../contexts/APIProvider";
import AskedFrequently from "./FaqPartnerProgram/AskedFrequently/AskedFrequently";
const ApplyToThePartnerProgram = () => {
  const { isDarkMode } = useContext(APIContext);
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="bg-green-500 text-white p-8 leading-loose earnWriting">
        <div className="px-7">
          <h1 className="text-8xl font-medium font-serif text-gray-100 mt-10">
            Write.
            <br />
            Connect.
            <br />
            Earn.
          </h1>
          <p className="text-gray-100 mt-10">
            Writing has its rewards when you join the Partner
            <br /> Program. Learn how to get paid for the content <br /> you
            publish and the audiences you build.
          </p>

          <button className="btn px-10 rounded-full text-white  bg-[#000] border-none hover:opacity-90 mt-8">
            Apply now
          </button>
        </div>
        <div className="basis-1/2"></div>
      </div>

      <div
        className={
          isDarkMode
            ? "border-b-[1px] border-gray-100"
            : "border-b-[1px] border-gray-900"
        }
      >
        <h1
          className={
            isDarkMode
              ? "text-8xl font-medium font-serif text-center mt-14 my-11 text-white"
              : "text-8xl font-medium font-serif text-center mt-14 my-11 text-[#000]"
          }
        >
          Two ways to earn.
        </h1>
        {/* <hr style={{color:"#000"}} /> */}
      </div>
      <div className="lg:flex">
        <div
          className={
            isDarkMode
              ? "basis-1/2 border-[1px] border-gray-100 border-t-0 border-r-0 border-l-0 px-7 py-8"
              : "basis-1/2 border-[1px] border-gray-900 border-t-0 border-r-0 px-7 py-8"
          }
        >
          {/* <div className="divider divider-horizontal  bg-red-700 text-center"></div> */}
          <h1 className="text-5xl font-semibold mb-10">Member reading time.</h1>
          <p className="">
            The more time FreeMium members spend reading your content, the more
            money you earn. Learn more about how we calculate{" "}
            <span className="link">reading time.</span>
          </p>
        </div>
        <div
          className={
            isDarkMode
              ? "basis-1/2 border-[1px] border-gray-100 border-t-0 border-r-0 px-7 py-8"
              : "basis-1/2 border-[1px] border-gray-900 border-t-0 border-r-0 px-7 py-8"
          }
        >
          {/* <div className="divider divider-horizontal  bg-red-700 text-center"></div> */}
          <h1 className="text-5xl font-semibold mb-10">
            Referred memberships.
          </h1>
          <p className="">
            In addition to the content you publish, you can refer readers to
            become FreeMium members and get half of their membership fee, net of
            standard payment processor fees, for as long as they remain a
            member.Learn more about{" "}
            <span className="link">Referred Memberships.</span>
          </p>
        </div>
      </div>
      <div className="lg:flex justify-around py-10">
        <h1
          className={
            isDarkMode
              ? "lg:text-8xl text-gray-100 text-4xl font-medium font-serif"
              : "lg:text-8xl text-gray-900 text-4xl font-medium font-serif"
          }
        >
          How to get
          <br className="hidden lg:block md:block" /> started.
        </h1>
        <div>
          <div className="overflow-x-auto">
            <table
              className={
                isDarkMode
                  ? "table w-full shadow-none text-gray-900 font-semibold"
                  : "table w-full shadow-none text-gray-900 font-semibold"
              }
            >
              <tbody className="">
                <tr>
                  <th className="text-3xl font-serif text-gray-400">01</th>
                  <td>
                    Apply once you've met the eligibility criteria (see below).
                  </td>
                </tr>
                <tr>
                  <th className="text-3xl font-serif text-gray-400">02</th>
                  <td>Get accepted, celebrate.</td>
                </tr>
                <tr>
                  <th className="text-3xl font-serif text-gray-400">03</th>
                  <td>
                    To start earning, publish stories with the meter my story
                    box checked.
                  </td>
                </tr>
                <tr>
                  <th className="text-3xl font-serif text-gray-400">04</th>
                  <td>
                    Earn money when FreeMium members spend time reading your
                    work.
                  </td>
                </tr>
                <tr>
                  <th className="text-3xl font-serif text-gray-400">05</th>
                  <td>Boost earnings through Referred Memberships.</td>
                </tr>
                <tr>
                  <th className="text-3xl font-serif text-gray-400">06</th>
                  <td>Get paid monthly.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className={
          isDarkMode
            ? "border-[1px] border-gray-100 border-x-0 border-b-0"
            : "border-[1px] border-gray-900 border-x-0 border-b-0"
        }
      >
        <h3 className="text-5xl text-center font-serif font-medium bg-[#F55189] p-8 text-white">
          Eligibility criteria.
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols">
        <div
          className={
            isDarkMode
              ? "border border-l-0 px-4 py-10 border-gray-100 leading-loose"
              : "border border-l-0 px-4 py-10 border-black leading-loose"
          }
        >
          <h1 className="text-5xl font-medium font-serif mb-3">
            Publish a story.
          </h1>
          <p>
            You must publish at least one story to apply to the Partner Program.
          </p>
          <p className="link">Start writing</p>
        </div>
        <div
          className={
            isDarkMode
              ? "border border-l-0 px-4 py-10 border-gray-100 leading-loose"
              : "border border-l-0 px-4 py-10 border-black leading-loose"
          }
        >
          <h1 className="text-5xl font-medium font-serif mb-3">
            Gain 100+ followers.
          </h1>
          <p>You need to have at least 100 followers to apply.</p>
          <p className="link">Get tips on building a following</p>
        </div>
        <div
          className={
            isDarkMode
              ? "border border-l-0 px-4 py-10 border-gray-100 leading-loose"
              : "border border-l-0 px-4 py-10 border-black leading-loose"
          }
        >
          <h1 className="text-5xl font-medium font-serif mb-3">Stay active.</h1>
          <p>
            You should publish at least once every six months to keep earning.
          </p>
          <p className="link">Read writing prompts to spark an idea</p>
        </div>
      </div>
      <div className="bg-pink-200 text-black text-center ">
        <h1 className="md:text-6xl text-4xl lg:text-8xl font-medium font-serif text-[#000] text-center lg:p-12 lg:px-36">
          Grow your audience and your engagement.
        </h1>
        <p className="text-base font-semibold font-serif text-gray-900">
          FreeMium gives you the tools to connect and build relationships with
          over
          <br /> 100 million readers around the world.
        </p>
        <div className="lg:flex justify-center p-16">
          <Link to={"/write-stories"}>
            <button className="btn px-10 rounded-full text-white  bg-[#000] border-none  hover:text-white mt-8 hover:bg-black">
              Start writing
            </button>
          </Link>
          <Link to={""}>
            <button className="btn px-10 ml-4 rounded-full text-gray-900 font-bold  bg-[#FCCEDD] border-gray-900 border-[1px] hover:bg-[#000] hover:text-white mt-8">
              Explore tools
            </button>
          </Link>
        </div>
      </div>

      <AskedFrequently />
    </div>
  );
};

export default ApplyToThePartnerProgram;
