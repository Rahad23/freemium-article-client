import React, { useContext } from "react";
import toast from "react-hot-toast";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../contexts/AuthProvider";
const SecurityAndApps = () => {
  const { user, logoutUserAccount } = useContext(AuthContext);

  const handleLogOut = () => {
    logoutUserAccount()
      .then(() => {
        toast.success("User logout Success");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="leading-loose w-11/12 mx-auto ">
      <button className="text-left">
        <p className="text-red-600">Sign out of all other sessions</p>
        <p>Sign out of sessions in other browsers or on other computers.</p>
      </button>
      <div className="divider"></div>
      <div className=" flex-col">
        <button>
          <div className="flex items-center">
            <BsFacebook className="text-blue-600 mr-4" />
            <p>Connect Facebook</p>
          </div>
          <p className="ml-8">
            We will never post to Facebook or message your friends without your
            permission.{" "}
          </p>
        </button>
        <button>
          <div className="flex items-center">
            <BsTwitter className="text-blue-400 mr-4" />
            <p>Connect Twitter</p>
          </div>
          <p className="ml-8 text-sm">
            We will never post to Twitter or message your followers without your
            permission.
          </p>
        </button>
      </div>
      <div className="divider" />
      <button className="w-full text-left" onClick={handleLogOut}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FcGoogle className="mr-4" />
            <p className="text-red-500">Disconnect Google</p>
          </div>
          <p>{user.email}</p>
        </div>
        <p className="ml-8 text-sm">
          You can now sign in to FreeMium using your Google account.
        </p>
      </button>
    </div>
  );
};

export default SecurityAndApps;
