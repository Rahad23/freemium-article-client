import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { EnvelopeIcon } from "@heroicons/react/24/solid";


const SubscribButton = ({ user, users, userId, subscribId, writerName }) => {
    const [isSubscrib, setIsSubscrib] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/${userId}/subscrib/${user?.email}`
      )
      .then((res) => {
        setIsSubscrib(res?.data?.isSubscrib);
      });
  }, [userId, user?.email]);

  const handleSubscrib = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/subscrib`, {
        userId,
        subscribId,
      })
      .then((res) => {
        setIsSubscrib(true);
        toast.success(`${subscribId} Successfully subscrib user`);
      });
  };

  const handleUnsubscrib = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/unsubscrib`, {
        userId,
        unsubscribId: subscribId,
      })
      .then((res) => {
        setIsSubscrib(false);
        toast.success(`${subscribId} Successfully unsubscrib user`);
      });
  };
    return (
        <div>
            {isSubscrib ? (
        <button 
          onClick={handleUnsubscrib}
          className="bg-primary border-0 rounded-full p-2"
        >
         {/* <Link className="bg-gray-500 border-0 rounded-full p-2"> */}
                <EnvelopeIcon className="h-4 w-4 text-white " />
              {/* </Link> */}
        </button>
      ) : (
        <label
        htmlFor="subscrib-modal"          
          className="bg-gray-500 border-0 rounded-full  btn btn-sm"
        >
         <EnvelopeIcon className="h-4 w-4 text-white " />
        </label>
      )}
      {/* modal */}
     <input type="checkbox" id="subscrib-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="subscrib-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{writerName}</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <button onClick={handleSubscrib} className="btn">confirm subscrib</button>
  </div>
</div>
        </div>
    );
};

export default SubscribButton;