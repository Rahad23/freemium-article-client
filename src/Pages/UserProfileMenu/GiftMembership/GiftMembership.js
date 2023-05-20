import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { APIContext } from "./../../../contexts/APIProvider";

const GiftMembership = () => {
  const { user, logoutUserAccount } = useContext(AuthContext);
  const { isDarkMode } = useContext(APIContext);
  return (
    <div className="py-10 px-12 lg:px-0">
      <div className="text-center">
        <h1
          className={
            isDarkMode
              ? "text-4xl text-gray-100 font-serif"
              : "text-4xl text-gray-900 font-serif"
          }
        >
          Gift a year of FreeMium
          <br /> membership.
        </h1>
        <p
          className={
            isDarkMode
              ? " text-gray-100 mt-2 font-serif"
              : " text-gray-900 mt-2 font-serif"
          }
        >
          Give the readers and deep thinkers in your life a year of FreeMium
          membership for $50.
        </p>
      </div>
      <div
        className={
          isDarkMode
            ? "text-center border-[1px] border-gray-100 rounded-lg p-3 mt-4 px-12 lg:w-2/6 mx-auto"
            : "text-center border-[1px] border-gray-900 rounded-lg p-3 mt-4 px-12 lg:w-2/6 mx-auto"
        }
      >
        <h1 className="text-xl font-extrabold">Who is this gift for?</h1>
        <p className={isDarkMode ? "text-gray-100" : "text-gray-900"}>
          The recipient will receive an email on the delivery date with a coupon
          code to redeem their membership. Purchasing more than 10 gifts? Submit
          a request at <span className="link">freemiumarticles.web.com</span>
        </p>
      </div>
      <div className="py-6 mx-auto">
        <div className="form-control w-full max-w-xs mx-auto text-gray-900">
          <label className="label">
            <span
              className={
                isDarkMode
                  ? "label-text text-gray-100"
                  : "label-text text-gray-900"
              }
            >
              Recipient name
            </span>
          </label>
          <input
            type="text"
            placeholder="Type your name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span
              className={
                isDarkMode
                  ? "label-text text-gray-100"
                  : "label-text text-gray-900"
              }
            >
              Recipient email
            </span>
          </label>
          <input
            type="email"
            placeholder="Type your name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span
              className={
                isDarkMode
                  ? "label-text text-gray-100"
                  : "label-text text-gray-900"
              }
            >
              Delivery date
            </span>
          </label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex justify-center">
          <div className="form-control w-[500px] max-w-xs mt-6">
            <h1 className="text-xl font-extrabold">From</h1>
            <label className="label">
              <span
                className={
                  isDarkMode
                    ? "label-text text-gray-100"
                    : "label-text text-gray-900"
                }
              >
                Sender name
              </span>
            </label>
            <p>{user?.displayName}</p>
            <div className="divider"></div>
            <label className="label">
              <span
                className={
                  isDarkMode
                    ? "label-text text-gray-100"
                    : "label-text text-gray-900"
                }
              >
                Sender email
              </span>
            </label>
            <p>{user?.email}</p>
            <div className="divider"></div>
            <label className="label">
              <span
                className={
                  isDarkMode
                    ? "label-text text-gray-100"
                    : "label-text text-gray-900"
                }
              >
                Gift message - optional
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Add your message"
            ></textarea>
            <button className="btn btn-success rounded-full text-white mt-12">
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftMembership;
