import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../contexts/AuthProvider";
import { APIContext } from "./../../contexts/APIProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { isDarkMode, fetchAPI } = useContext(APIContext);
  const [editMode, setEditMode] = useState(false);
  // const singleUsers = useSelector((state) => state.fetch.data);
  // const isLoading = useSelector((state) => state.fetch.isLoading);
  // const [singleUsers, setSingleUsers] = useState({});
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  // console.log(singleUsers);
  const userId = localStorage.getItem("userId");

  const {
    isLoading,
    refetch,
    data: singleUsers,
  } = useQuery(["user", user?.email], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
  );

  const [formData, setFormData] = useState({
    name: singleUsers?.name,
    username: singleUsers?.username,
    location: singleUsers?.location,
    occupation: singleUsers?.occupation,
    education: singleUsers?.education,
    bio: singleUsers?.bio,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    refetch();
  };

  const updateProfile = (formData) => {
    // Check if the username is already set, and if it's not, set it and update the last updated time
    if (!singleUsers?.username) {
      singleUsers.username = formData.username;
      singleUsers.usernameLastUpdated = Date.now();
    } else if (
      singleUsers?.username &&
      Date.now() - singleUsers?.usernameLastUpdated > 30 * 24 * 60 * 60 * 1000
    ) {
      // If the username is already set and the last updated time is more than 30 days, update the username and the last updated time
      singleUsers.username = formData.username;
      singleUsers.usernameLastUpdated = Date.now();
    }

    fetch(`${process.env.REACT_APP_API_URL}/update-profile/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // Update your state with the updated user data here
        refetch();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile(formData);
    toggleEditMode();
    refetch();
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div
      className={
        isDarkMode
          ? "w-11/12 mx-auto mt-10 py-10 h-screen bg-black-350 text-white rounded-lg shadow-lg"
          : "w-11/12 mx-auto mt-10 py-10 h-screen bg-white text-black-350 rounded-lg shadow-lg"
      }
    >
      {editMode ? (
        <form className="w-8/12 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className={
                isDarkMode
                  ? "border bg-black-250 border-gray-400 p-2 w-full"
                  : "border border-gray-400 p-2 w-full"
              }
              id="name"
              type="text"
              name="name"
              defaultValue={singleUsers?.name}
              // value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="name">
              Username
            </label>
            <input
              className={
                isDarkMode
                  ? "border bg-black-250 border-gray-400 p-2 w-full"
                  : "border border-gray-400 p-2 w-full"
              }
              id="username"
              type="text"
              name="username"
              defaultValue={singleUsers?.username}
              // value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="location">
              Location
            </label>
            <input
              className={
                isDarkMode
                  ? "border bg-black-250 border-gray-400 p-2 w-full"
                  : "border border-gray-400 p-2 w-full"
              }
              id="location"
              type="text"
              name="location"
              defaultValue={singleUsers?.location}
              // value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="occupation">
              Professional Headline
            </label>
            <input
              className={
                isDarkMode
                  ? "border bg-black-250 border-gray-400 p-2 w-full"
                  : "border border-gray-400 p-2 w-full"
              }
              id="occupation"
              type="text"
              name="occupation"
              defaultValue={singleUsers?.occupation}
              // value={formData.occupation}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="education">
              Education
            </label>
            <input
              className={
                isDarkMode
                  ? "border bg-black-250 border-gray-400 p-2 w-full"
                  : "border border-gray-400 p-2 w-full"
              }
              id="education"
              type="text"
              name="education"
              defaultValue={singleUsers?.education}
              // value={formData.education}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              className={
                isDarkMode
                  ? "border bg-black-250 border-gray-400 p-2 w-full"
                  : "border border-gray-400 p-2 w-full"
              }
              id="bio"
              name="bio"
              defaultValue={singleUsers?.bio}
              // value={formData.bio}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-primary rounded-full text-white p-2 hover:bg-green-600"
              // onClick={toggleEditMode}
            >
              Update Profile
            </button>
            <button
              className="bg-red-400 rounded-full text-white p-2 hover:bg-red-500"
              onClick={toggleEditMode}
            >
              Cancle
            </button>
          </div>
        </form>
      ) : (
        <div className="h-full">
          <div className="block md:flex">
            <div
              className={
                isDarkMode
                  ? "w-full md:w-3/5 p-4 sm:p-6 lg:p-8 bg-black-250 text-white shadow-md"
                  : "w-full md:w-3/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md"
              }
            >
              <div className="flex justify-end">
                <button
                  className="bg-green-500 rounded-full text-white p-2 hover:bg-green-600"
                  onClick={toggleEditMode}
                >
                  Edit Profile
                </button>
              </div>
              {/* <Counter /> */}
              <div className="w-full p-8 mx-2 flex justify-center items-center">
                <img
                  id="showImage"
                  className="max-w-xs w-32 items-center border"
                  src={singleUsers?.picture}
                  alt=""
                />
              </div>
              <div className="pb-4 text-center">
                <input
                  disabled
                  id="occupation"
                  className={
                    isDarkMode
                      ? "border-1 text-center bg-black-250 rounded-r pr-4 py-2 w-full"
                      : "border-1 text-center rounded-r pr-4 py-2 w-full"
                  }
                  type="occupation"
                  // defaultValue={singleUsers?.occupation}
                  value={singleUsers?.occupation}
                />
              </div>

              <p
                className={
                  isDarkMode
                    ? "border-1 text-center bg-black-250 rounded-r pr-4 py-2 w-full"
                    : "border-1 text-center rounded-r pr-4 py-2 w-full"
                }
              >
                {singleUsers?.bio}
              </p>
            </div>

            <div
              className={
                isDarkMode
                  ? "w-full md:w-2/5 p-8 bg-black-250 text-white lg:ml-4 shadow-md"
                  : "w-full md:w-2/5 p-8 bg-white lg:ml-4 shadow-md"
              }
            >
              <div className="rounded shadow p-6">
                <div className="pb-6">
                  {/* <label
                      htmlFor="name"
                      className={
                        isDarkMode
                          ? "font-semibold text-white block pb-1"
                          : "font-semibold text-gray-700 block pb-1"
                      }
                    >
                      Name
                    </label> */}
                  <div className="flex items-center gap-2">
                    <BiUserCircle />
                    <input
                      disabled
                      id="name"
                      className={
                        isDarkMode
                          ? "border-1 bg-black-250 rounded-r pr-4 py-2 w-full"
                          : "border-1 rounded-r pr-4 py-2 w-full"
                      }
                      type="text"
                      value={singleUsers?.name}
                      // defaultValue={singleUsers?.name}
                    />
                  </div>
                </div>
                <div className="pb-6">
                  {/* <label
                      htmlFor="username"
                      className={
                        isDarkMode
                          ? "font-semibold text-white block pb-1"
                          : "font-semibold text-gray-700 block pb-1"
                      }
                    >
                      Username
                    </label> */}
                  <div className="flex items-center gap-2">
                    <FaUser />
                    <input
                      disabled
                      id="username"
                      className={
                        isDarkMode
                          ? "border-1 bg-black-250 rounded-r pr-4 py-2 w-full"
                          : "border-1 rounded-r pr-4 py-2 w-full"
                      }
                      type="text"
                      value={singleUsers?.username}
                      // defaultValue={singleUsers?.username}
                    />
                  </div>
                </div>
                <div className="pb-4">
                  {/* <label
                      htmlFor="email"
                      className={
                        isDarkMode
                          ? "font-semibold text-white block pb-1"
                          : "font-semibold text-gray-700 block pb-1"
                      }
                    >
                      Email
                    </label> */}
                  <div className="flex items-center gap-2">
                    <MdEmail />
                    <input
                      disabled
                      id="email"
                      className={
                        isDarkMode
                          ? "border-1 bg-black-250 rounded-r pr-4 py-2 w-full"
                          : "border-1 rounded-r pr-4 py-2 w-full"
                      }
                      type="email"
                      value={singleUsers?.email}
                      // defaultValue={singleUsers?.email}
                    />
                  </div>
                </div>
                <div className="pb-4">
                  {/* <label
                      htmlFor="education"
                      className={
                        isDarkMode
                          ? "font-semibold text-white block pb-1"
                          : "font-semibold text-gray-700 block pb-1"
                      }
                    >
                      Education
                    </label> */}
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        fill="#fff"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    <input
                      disabled
                      id="education"
                      className={
                        isDarkMode
                          ? "border-1 bg-black-250 rounded-r pr-4 py-2 w-full"
                          : "border-1 rounded-r pr-4 py-2 w-full"
                      }
                      type="education"
                      value={singleUsers?.education}
                      // defaultValue={singleUsers?.education}
                    />
                  </div>
                </div>
                <div className="pb-4">
                  {/* <label
                      htmlFor="location"
                      className={
                        isDarkMode
                          ? "font-semibold text-white block pb-1"
                          : "font-semibold text-gray-700 block pb-1"
                      }
                    >
                      Location
                    </label> */}
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <input
                      disabled
                      id="location"
                      className={
                        isDarkMode
                          ? "border-1 bg-black-250 rounded-r pr-4 py-2 w-full"
                          : "border-1 rounded-r pr-4 py-2 w-full"
                      }
                      type="location"
                      value={singleUsers?.location}
                      // defaultValue={singleUsers?.location}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
