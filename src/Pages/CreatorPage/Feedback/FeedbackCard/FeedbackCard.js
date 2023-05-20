import React from "react";

const FeedbackCard = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="card w-[50rem] bg-base-100">
        <div className="card-body">
          <div className="flex lg:justify-between flex-col lg:flex-row justify-center items-center">
            <img
              className="lg:w-32 w-24"
              src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Coco.png"
              alt=""
            />
            <div className="px-4 mt-2">
              <p className="font-semibold text-gray-900">
                "I love FreeMium’s membership — it gives me access to the
                stories I love by the writers I love, and it allows me to help
                support those writers financially."
              </p>
              <h1 className="text-2xl font-semibold mt-2 text-gray-900">
                Kayt Molina
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
