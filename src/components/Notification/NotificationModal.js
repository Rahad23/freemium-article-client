import React, { useState } from "react";
import classNames from "classnames";

const NotificationModal = () => {
  const [showModal, setShowModal] = useState(false);

  const modalClasses = classNames(
    "fixed",
    "inset-0",
    "z-10",
    "overflow-y-auto",
    "bg-black",
    "bg-opacity-50",
    "transition-opacity",
    {
      hidden: !showModal,
      block: showModal,
    }
  );

  return (
    <div>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Show Notification
      </button>
      <div className={modalClasses}>
        <div className="relative top-1/2 transform -translate-y-1/2 mx-auto max-w-md w-full">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Notification
              </h3>
              <button
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
                onClick={() => setShowModal(false)}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                You have a new notification!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
