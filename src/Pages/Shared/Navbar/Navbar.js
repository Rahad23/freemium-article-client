import React, { useEffect } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import logoFM from "../../../Assets/logoFM.png";
import { CgProfile } from "react-icons/cg";
import {
  AiOutlineDashboard,
  AiOutlineLogout,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import { MdAmpStories } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { CiLogin } from "react-icons/ci";
import "./Navebar.css";
import Search from "../Search/Search";
import { APIContext } from "../../../contexts/APIProvider";
import NotificationIcon from "../../../components/Notification/NotificationIcon";
import { RiMessengerLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../../../store/fetchSlice";
//
const Navbar = () => {
  const { user, logoutUserAccount } = useContext(AuthContext);
  const { isDarkMode, setIsDarkMode } = useContext(APIContext);
  const dispatch = useDispatch();
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleLogOut = () => {
    logoutUserAccount()
      .then(() => {
        toast.success("User logout Success");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const singleUsers = useSelector((state) => state.fetch.data);
  useEffect(() => {
    dispatch(
      fetchAsync(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
    );
  }, [dispatch, user]);
  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  const writeIcon = (
    // writeIcon
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Write"
      className="font-bold"
    >
      <path
        d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
        fill="currentColor"
      ></path>
      <path
        d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
        stroke="currentColor"
      ></path>
    </svg>
  );

  const navItemNotUser = (
    <>
      <li>
        <NavLink
          to="/our-story"
          className={
            isDarkMode
              ? "text-white border-animate"
              : "text-gray-900 border-animate"
          }
        >
          Our story
        </NavLink>
      </li>

      <li>
        <NavLink
          className={
            isDarkMode
              ? "text-white border-animate"
              : "text-gray-900 border-animate"
          }
          to="/membership"
        >
          Membership
        </NavLink>
      </li>
      <li className="gap-2 lg:block">
        <NavLink
          className={
            isDarkMode
              ? "flex items-center gap-2 text-white hover:text-black"
              : "flex items-center gap-2 text-gray-900 hover:text-black"
          }
          to="/write-stories"
        >
          Write
        </NavLink>
      </li>

      <li>
        <NavLink
          className={
            isDarkMode
              ? "text-white border-animate"
              : "text-gray-900 border-animate"
          }
          to="/login"
        >
          Sign In
        </NavLink>
      </li>
    </>
  );
  const responsiveNavItemNotUser = (
    <>
      <li className="justify-between bg-white text-black text-normal font-semibold text-semibold py-1">
        <NavLink
          to="/our-story"
          className={
            isDarkMode
              ? "text-white border-animate"
              : "text-gray-900 border-animate"
          }
        >
          Our story
        </NavLink>
      </li>
      <li className="justify-between bg-white text-black text-normal font-semibold text-semibold py-1">
        <NavLink
          className={
            isDarkMode
              ? "text-white border-animate"
              : "text-gray-900 border-animate"
          }
          to="/membership"
        >
          Membership
        </NavLink>
      </li>
      <li className="justify-between bg-white text-black text-normal font-semibold text-semibold py-1">
        <NavLink
          className={
            isDarkMode
              ? "flex items-center gap-2 text-white hover:text-black border-animate"
              : "flex items-center gap-2 text-gray-900 hover:text-black border-animate"
          }
          to="/write-stories"
        >
          Write
        </NavLink>
      </li>

      <hr className="text-gray-400 shadow-2xl my-2" />
      <li className="justify-between bg-white text-black text-normal font-semibold py-1">
        <button
          // onClick={handleLogOut}
          className="text-gray-900 hover:text-gray-600 flex items-center"
        >
          <CiLogin className="text-xl font-semibold mr-3" />
          <NavLink
            className={
              isDarkMode
                ? "text-white border-animate"
                : "text-gray-900 border-animate"
            }
            to="/login"
          >
            Sign In
          </NavLink>
        </button>
      </li>
    </>
  );
  return (
    <div className="border-b-[1px]">
      <div className="w-11/12 xl:w-11/12 mx-auto">
        <div className="mx-auto print:hidden ">
          {user?.uid ? (
            <div className="navbar p-0">
              <div className="navbar-start h-16">
                <div className="flex gap-2 items-center">
                  <label
                    htmlFor="dashboard-drawer"
                    tabIndex={2}
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </label>
                  <NavLink to="/">
                    <div className="flex items-center">
                      <div
                        className={
                          isDarkMode
                            ? "hidden text-3xl font-bold rounded-full bg-white text-black-350 md:flex items-center justify-center h-12 w-12 mr-2 p-2"
                            : "hidden  text-3xl font-bold rounded-full bg-black-350 text-white md:flex items-center justify-center h-12 w-12 mr-2 p-2"
                        }
                      >
                        FM
                      </div>
                      <h1
                        className={
                          isDarkMode
                            ? "text-xl text-white font-bold"
                            : "text-xl text-black-350 font-bold"
                        }
                      >
                        FreeMium
                      </h1>
                    </div>
                    {/* <img className="w-56 md:w-40" src={logoFM} alt="" /> */}
                  </NavLink>
                  {/* <NavLink to="/search"> */}
                  <Search
                    searchPlaceholder={"Search Story"}
                    propsStyle={"4px"}
                  />
                  {/* </NavLink> */}
                </div>
              </div>
              <div className="navbar-end gap-1 md:gap-8 items-center">
                <div className="block">
                  <NavLink
                    className={
                      isDarkMode
                        ? "text-white hover:text-black"
                        : "text-gray-900 hover:text-black"
                    }
                    to="/write-stories"
                  >
                    {writeIcon}
                  </NavLink>
                </div>
                <div className="">
                  <NavLink
                    className={
                      isDarkMode
                        ? "text-white hover:text-black"
                        : "text-gray-900 hover:text-black"
                    }
                    to="/hexa-ai"
                  >
                    <AiOutlineQuestionCircle
                      data-tip="Ask me Anything"
                      className="tooltip w-6 h-6"
                    />
                  </NavLink>
                </div>
                <div className="">
                  <NavLink
                    className={
                      isDarkMode
                        ? "text-white hover:text-black"
                        : "text-gray-900 hover:text-black"
                    }
                    to="/messages"
                  >
                    <RiMessengerLine className="w-6 h-6" />
                  </NavLink>
                </div>

                {/* notification Section */}
                {/* notification svg icon */}

                <NotificationIcon />
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost border-none btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        className="w-4"
                        src={user?.photoURL}
                        alt="profile pictures"
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className={
                      isDarkMode
                        ? "menu menu-compact dropdown-content mt-3 p-2 shadow rounded-sm bg-black-250 box-border w-max border-2 border-black-350 text-white"
                        : "menu menu-compact dropdown-content mt-3 p-2 shadow rounded-sm bg-base-100 box-border w-max border-2 border-gray-50 text-black-250"
                    }
                  >
                    {singleUsers?.role === "admin" && (
                      <li
                        className={
                          isDarkMode
                            ? "justify-between bg-black-250 text-white text-lg font-semibold text-semibold"
                            : "justify-between bg-white text-black text-lg font-semibold text-semibold"
                        }
                      >
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "text-sky-600 font-semibold bg-none active:bg-none hover:bg-none"
                              : ""
                          }
                          to="/dashboard"
                        >
                          <AiOutlineDashboard /> Dashboard
                        </NavLink>
                      </li>
                    )}
                    <li
                      className={
                        isDarkMode
                          ? "justify-between bg-black-250 text-white text-lg font-semibold text-semibold"
                          : "justify-between bg-white text-black text-lg font-semibold text-semibold"
                      }
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-sky-600 font-semibold bg-none active:bg-none hover:bg-none"
                            : ""
                        }
                        to="/profile"
                      >
                        <CgProfile className="text-lg" />
                        Profile
                      </NavLink>
                    </li>
                    <li
                      className={
                        isDarkMode
                          ? "justify-between bg-black-250 text-white text-lg font-semibold text-semibold"
                          : "justify-between bg-white text-black text-lg font-semibold text-semibold"
                      }
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-sky-600 font-semibold bg-none active:bg-none hover:bg-none"
                            : ""
                        }
                        to="/list"
                      >
                        <BsBookmarksFill className="text-lg" />
                        List
                      </NavLink>
                    </li>
                    <li
                      className={
                        isDarkMode
                          ? "justify-between bg-black-250 text-white text-lg font-semibold text-semibold"
                          : "justify-between bg-white text-black text-lg font-semibold text-semibold"
                      }
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-sky-600 font-semibold bg-none active:bg-none hover:bg-none"
                            : ""
                        }
                        to="/stories"
                      >
                        <MdAmpStories className="text-lg" />
                        Stories
                      </NavLink>
                    </li>
                    <li
                      className={
                        isDarkMode
                          ? "justify-between bg-black-250 text-white text-lg font-semibold text-semibold"
                          : "justify-between bg-white text-black text-lg font-semibold text-semibold"
                      }
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-sky-600 font-semibold bg-none active:bg-none hover:bg-none"
                            : ""
                        }
                        to="/stats"
                      >
                        <GiNetworkBars className="text-lg" />
                        Stats
                      </NavLink>
                    </li>

                    <div className="divider"></div>
                    <li
                      className={
                        isDarkMode
                          ? "justify-between bg-black-250 text-white text-lg font-semibold text-semibold"
                          : "justify-between bg-white text-black text-lg font-semibold text-semibold"
                      }
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-sky-600 font-semibold bg-none active:bg-none hover:bg-none"
                            : ""
                        }
                        to="/settings"
                      >
                        Settings
                      </NavLink>
                    </li>
                    <li
                      className={
                        isDarkMode
                          ? "justify-between bg-black-250 text-white text-lg font-semibold text-semibold"
                          : "justify-between bg-white text-black text-lg font-semibold text-semibold"
                      }
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-sky-600 font-semibold bg-none active:bg-none hover:bg-none"
                            : ""
                        }
                        to="/refineRecommendations"
                      >
                        Refine recommendations
                      </NavLink>
                    </li>
                    {/* <li
                  className={
                    isDarkMode
                      ? "justify-between bg-black-250 text-white text-lg font-semibold text-semibold"
                      : "justify-between bg-white text-black text-lg font-semibold text-semibold"
                  }
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-sky-600 font-semibold bg-none active:bg-none hover:bg-none"
                        : ""
                    }
                    to="/"
                  >
                    Manage publications
                  </NavLink>
                </li> */}
                    <div className="divider"></div>
                    <li
                      className={
                        isDarkMode
                          ? "justify-between bg-black-250 text-white text-lg font-semibold text-semibold"
                          : "justify-between bg-white text-black text-lg font-semibold text-semibold"
                      }
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-sky-600 font-semibold bg-none active:bg-none hover:bg-none"
                            : ""
                        }
                        to="/payment"
                      >
                        Become a member
                      </NavLink>
                    </li>
                    <li
                      className={
                        isDarkMode
                          ? "justify-between bg-black-250 text-white text-lg font-semibold text-semibold"
                          : "justify-between bg-white text-black text-lg font-semibold text-semibold"
                      }
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-sky-600 font-semibold bg-none active:bg-none hover:bg-none"
                            : ""
                        }
                        to="/applyToThePartnerProgram"
                      >
                        Apply to the Partner Program
                      </NavLink>
                    </li>
                    <li
                      className={
                        isDarkMode
                          ? "justify-between bg-black-250 text-white text-lg font-semibold text-semibold"
                          : "justify-between bg-white text-black text-lg font-semibold text-semibold"
                      }
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-sky-600 font-semibold bg-none active:bg-none hover:bg-none"
                            : ""
                        }
                        to="/giftMembership"
                      >
                        Gift membership
                      </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li
                      className={
                        isDarkMode
                          ? "justify-between bg-black-250 text-white text-lg font-semibold text-semibold"
                          : "justify-between bg-white text-black text-lg font-semibold text-semibold"
                      }
                    >
                      <button onClick={toggleDarkMode} className="">
                        {isDarkMode ? (
                          <div className="flex items-center">
                            {lightIcon}{" "}
                            <span className="ml-2">Light-theme</span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            {darkIcon} <span className="ml-2">Dark-theme</span>
                          </div>
                        )}
                      </button>
                    </li>
                    <div className="divider"></div>
                    <li
                      className={
                        isDarkMode
                          ? "justify-between bg-black-250 text-black text-lg font-semibold"
                          : "justify-between bg-white text-black text-lg font-semibold"
                      }
                    >
                      <>
                        <button
                          onClick={handleLogOut}
                          className="text-red-500 hover:text-red-600"
                          title={`${user?.displayName} you want to sign out`}
                        >
                          <AiOutlineLogout className="text-lg" /> Sign out
                        </button>
                        {/* <p className="text-red-500 hover:text-red-600">{user?.email}</p> */}
                      </>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="navbar justify-between items-center">
              <div className="">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    {/* before login list svg icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content mt-3 px-5 py-1 shadow bg-base-100 rounded-box w-[12rem]"
                  >
                    {responsiveNavItemNotUser}
                  </ul>
                </div>
                <NavLink to="/">
                  <div className="flex items-center">
                    <div
                      className={
                        isDarkMode
                          ? "text-3xl font-bold rounded-full bg-white text-black-350 flex items-center justify-center h-12 w-12 mr-2 p-2"
                          : "text-3xl font-bold rounded-full bg-black-350 text-white flex items-center justify-center h-12 w-12 mr-2 p-2"
                      }
                    >
                      FM
                    </div>
                    <h1
                      className={
                        isDarkMode
                          ? "text-xl text-white font-bold"
                          : "text-xl text-black-350 font-bold"
                      }
                    >
                      FreeMium
                    </h1>
                  </div>
                  {/* <img className="w-56 md:w-40" src={logoFM} alt="" /> */}
                </NavLink>
              </div>
              <div className="flex items-center gap-7">
                <div className="hidden lg:flex">
                  <ul className="flex items-center gap-7">{navItemNotUser}</ul>
                </div>
                <button onClick={toggleDarkMode} className="">
                  {isDarkMode ? lightIcon : darkIcon}
                </button>
                <NavLink
                  className={
                    isDarkMode
                      ? "bg-black-250 py-2 px-3 text-gray-100 rounded-3xl"
                      : "bg-black-350 py-2 px-3 text-gray-100 rounded-3xl"
                  }
                  to="/login"
                >
                  Get started
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
