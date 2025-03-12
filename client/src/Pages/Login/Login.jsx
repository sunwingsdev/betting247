import React, { useState } from "react";
import loginImage from "../../assets/betx365 login.jpg";
import { useNavigate } from "react-router-dom";
import bkashImage from "../../assets/bkash.jpg";
import nogodImage from "../../assets/nogod.jpg";
import upaiImage from "../../assets/upai.jpg";
import rocketImage from "../../assets/rocket.jpg";
import {
  useLazyGetAuthenticatedUserQuery,
  useLoginUserMutation,
} from "../../redux/features/allApis/usersApi/usersApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/slices/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationCode, setValidationCode] = useState(generateRandomCode());
  const [enteredValidationCode, setEnteredValidationCode] = useState(""); // State for entered validation code

  function generateRandomCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  // Function to reset the validation code
  const resetValidationCode = () => {
    setValidationCode(generateRandomCode());
    setEnteredValidationCode(""); // Clear the entered validation code on reset
  };

  const images = [bkashImage, nogodImage, upaiImage, rocketImage];
  const isValidationCodeValid = enteredValidationCode === validationCode;

  const handelLogin = async () => {
    try {
      const { data: loginData } = await loginUser({ username, password });

      if (loginData.token) {
        const { data: userData } = await getUser(loginData.token);
        dispatch(setCredentials({ token: loginData.token, user: userData }));
        toast.success("Login successful", {
          appearance: "success",
          autoDismiss: true,
        });
        resetValidationCode();
        if (userData?.role !== "admin") {
          navigate("/");
        } else {
          navigate("/admindashboard");
        }
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Provide valid username and password", {
        appearance: "error",
        autoDismiss: true,
      });
      resetValidationCode();
    }
  };
  return (
    <div className="  flex flex-col bg-commonYellowColor   ">
      <div className="   relative   ">
        <img
          src={loginImage}
          alt=""
          className=" w-full object-cover  clip-top-utilities   "
        />
        <span
          className="absolute bg-signUpColor rounded-full top-2 right-2 p-2"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-auto"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
      </div>
      <div className="   flex space-y-2  flex-col justify-center items-center   ">
        <div className="px-6 space-y-2 w-full md:max-w-xs">
          <input
            type="text"
            name=""
            id=""
            className="w-full py-1 px-2 rounded-md placeholder:text-sm"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <div className="relative ">
            <input
              type={showPassword ? "text" : "password"}
              name=""
              id=""
              className="w-full py-1 px-2 placeholder:text-sm rounded-md "
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="absolute top-2 right-2"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-auto "
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-auto "
                >
                  <path d="M17.94 17.94A9 9 0 0 1 12 20c-7 0-11-8-11-8a18.36 18.36 0 0 1 3.8-4.6" />
                  <path d="M9.88 9.88A3 3 0 0 1 12 9c1.66 0 3 1.34 3 3 0 .6-.18 1.16-.5 1.62" />
                  <path d="M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>

          <div className="relative ">
            <input
              type="text"
              className="w-full py-1 px-2 rounded-md placeholder:text-sm "
              placeholder="Validation Code"
              value={enteredValidationCode} // Bind to enteredValidationCode
              onChange={(e) => setEnteredValidationCode(e.target.value)} // Update enteredValidationCode
            />
            <h3 className="text-customBlack text-lg font-bold absolute top-0 right-2">
              {validationCode}
            </h3>
          </div>
          <div className="text-center">
            <button
              disabled={!isValidationCodeValid || !username || !password || isLoading}
              className={`${
                !isValidationCodeValid ? "opacity-70 cursor-not-allowed" : ""
              } bg-signUpColor text-loginColor w-full py-1 font-bold rounded-md`}
              onClick={handelLogin}
            >
              {isLoading ? "Loading..." : 'Login'}
            </button>
          </div>
        </div>
        <div className="pt-4 overflow-hidden w-full">
          <div className="flex flex-row gap-2 md:animate-marqueeMedium animate-marquee  ">
            {images.map((img, index) => (
              <img key={index} src={img} alt={`slide${index}`} />
            ))}
          </div>
        </div>
        <div className="text-xs pt-2 px-4">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <h3 className="underline text-customBlack border-r border-customBlack pr-2">
              Privacy Policy
            </h3>
            <h3 className="underline text-customBlack border-r border-customBlack pr-2">
              Terms and Conditions
            </h3>
            <h3 className="underline text-customBlack border-r border-customBlack pr-2">
              Rules and Regulations
            </h3>
            <h3 className="underline text-customBlack border-r border-customBlack pr-2">
              KYC
            </h3>
            <h3 className="underline text-customBlack border-r border-customBlack pr-2">
              Responsible Gaming
            </h3>
            <h3 className="underline text-customBlack border-r border-customBlack pr-2">
              About Us
            </h3>
            <h3 className="underline text-customBlack border-r border-customBlack pr-2">
              Self-Exclusion Policy
            </h3>
            <h3 className="underline text-customBlack border-r border-customBlack pr-2">
              Underage Policy
            </h3>
          </div>
        </div>
        <div className="w-full bg-custom-gradient  py-6">
          <div className="flex flex-row items-center border-b border-customWhite pt-1  w-full justify-center gap-2 pb-2">
            <span className="  rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22 11 13 2 9z" />
              </svg>
            </span>

            <span className=" rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="20"
                height="auto"
                fill="white"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M425.6 299.1c2.9-14.6 4.4-29.6 4.4-45 0-129.1-104.9-234-234-234-15.4 0-30.4 1.5-45 4.4C133.4 8.6 115.1 0 95.1 0 43.1 0 1 42.1 1 94.1c0 20 8.6 38.3 22.5 55.9-2.9 14.6-4.4 29.6-4.4 45 0 129.1 104.9 234 234 234 15.4 0 30.4-1.5 45-4.4 17.6 13.9 35.9 22.5 55.9 22.5 52 0 94.1-42.1 94.1-94.1 0-20-8.6-38.3-22.5-55.9zM237.1 364.9c-37.8 0-72.6-13.9-99.3-36.9-5.6-4.9-5.9-13.6-.7-19.2l20.6-20.6c4.7-4.7 12.3-5 17.5-.7 20.8 17.5 47.5 27.6 76.1 27.6 23.7 0 50.2-10.7 50.2-31.6 0-12-9.8-21.7-29.2-27.3l-51.3-14.6c-43.2-12.2-72.9-39.5-72.9-80.8 0-23.9 9.8-45.4 27.7-61.5 17.3-15.5 41.4-25.1 67.7-27V64c0-6.6 5.4-12 12-12h32.4c6.6 0 12 5.4 12 12v20.1c27.6 3.9 52 14.2 72.3 30.5 5.5 4.4 6.1 12.6 1.4 17.9l-22.9 23.9c-4.3 4.5-11.3 5-16.3 1.3-17.4-13.5-39.2-20.9-62-20.9-27.7 0-46.5 12.5-46.5 30.6 0 14.3 10.8 22.4 35.8 29.6l46.8 13.4c45.6 13 77.2 38.5 77.2 84.5-.1 49.8-43.1 88.2-107.8 88.2z" />
              </svg>
            </span>

            <span className=" rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </span>
          </div>
          <div>
            <h3 className="underline text-center text-customWhite ">
              000000000
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
