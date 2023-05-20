import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { AuthContext } from "../../contexts/AuthProvider";
import { setAuthToken } from "../../APIs/Auth";
import Spinner from "../../components/Spinner/Spinner";
import useToken from "../../hooks/useToken";
import { APIContext } from "../../contexts/APIProvider";
import loginImg from "../../Assets/login.png";
import { useLottie } from "lottie-react";
import loginAnimation from "../../Lottie/login.json";
import Fade from "react-reveal/Fade";

const Login = () => {
  // lottie animation gif
  const options = {
    animationData: loginAnimation,
    loop: true,
  };
  const { View } = useLottie(options);

  const { isDarkMode } = useContext(APIContext);
  const [role] = useState("user");
  const {
    signInWithGoogle,
    loginUserAccount,
    resetUserAccountPassword,
    loading,
    setLoading,
    user,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // const [loginUserEmail, setLoginUserEmail] = useState("");
  // const [token] = useToken(loginUserEmail);

  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //Sign In user
    loginUserAccount(email, password, {
      headers: {
        authorization: `bearer ${localStorage.getItem("freeMiumToken")}`,
      },
    })
      .then((result) => {
        const user = result.user;
        toast.success("Login with email success");
        // setLoginUserEmail(user?.email);
        setAuthToken(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Login with google success");
        // setLoginUserEmail(user?.email);
        setAuthToken(user);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const userPasswordReset = () => {
    resetUserAccountPassword(userEmail)
      .then(() => {
        toast.success("Please check your email to reset");
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(setLoading(false));
  };

  if (loading) {
    return <Spinner />;
  }
  if (user?.uid) {
    navigate("/");
  }
  return (
    <div className="lg:grid grid-cols-2 items-center">
      <Fade left>
        <div className="w-[70%] h-[70%] mx-auto lg:block hidden">{View}</div>
      </Fade>
      <Fade right>
        <div className="pt-8 my-10 lg:px-0 px-5">
          <div
            className={
              isDarkMode
                ? "flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-black-250 shadow-lg border-[1px] border-[#ddd] text-white lg:ml-0 mx-auto"
                : "flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[white] shadow-lg border-[1px] border-[#ddd] text-gray-900 lg:ml-0 mx-auto"
            }
          >
            <div className="mb-8 text-center">
              <h1 className="my-3 text-[28px] font-bold">Welcome back.</h1>
              <p className="text-sm text-gray-400">
                Sign in to access your account
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              noValidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Email address
                    </label>
                  </div>
                  <input
                    onBlur={(e) => setUserEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter Your Email Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="*******"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900"
                  />
                </div>
              </div>

              <div>
                <PrimaryButton
                  type="submit"
                  classes={
                    isDarkMode
                      ? "w-full px-8 py-3 font-semibold rounded-full bg-[#1A8917] text-white"
                      : "w-full px-8 py-3 font-semibold rounded-full bg-[#1A8917] text-white"
                  }
                >
                  Login
                </PrimaryButton>
              </div>
            </form>
            <div className="space-y-1">
              <button
                onClick={userPasswordReset}
                className="text-xs hover:underline text-gray-400"
              >
                Forgot password?
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="flex flex-col justify-center items-center gap-5">
              <p className="px-3 text-sm">Sign in with Google Account</p>
              <button
                onClick={handleGoogleLogin}
                aria-label="Log in with Google"
                className="w-full p-2 border-2 border-gray-400 rounded-full flex justify-center items-center gap-2"
              >
                <svg width="25" height="25">
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z"
                      fill="#EA4335"
                    ></path>
                  </g>
                </svg>
                Sign in With Google
              </button>
              <p className="px-6 text-sm text-center text-gray-600">
                Are you new to FreeMium?
                <Link
                  to="/register"
                  className="hover:underline text-green-600 font-medium ml-2"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Login;
